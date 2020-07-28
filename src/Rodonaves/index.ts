import axios, { Method, AxiosRequestConfig, AxiosError } from 'axios';
import qs from 'qs';
import tls from 'tls';
import {
  RodonavesFetchOtherError,
  RodonavesFetchClientError,
  RodonavesFetchServerError
} from '../errors';
import type {
  Mode,
  ServerResponse,
  RodonavesGetCityByZipCodeResponse,
  RodonavesSimulateQuoteResponse,
  RodonavesPack
} from '../types';

if (tls) {
  // Fix problem of TLS with new versions of node
  tls.DEFAULT_MIN_VERSION = 'TLSv1';
}

class Rodonaves {
  token: string;
  username: string;
  password: string;
  mode: Mode;
  timeout: number;

  /**
   * @param username Rodonaves username for Auth
   * @param password Rodonaves password for Auth
   * @param mode Mode of the request. Can be `dev` or `prod`
   * @param timeout Timeout of the request in *ms*
   */
  constructor(
    username: string,
    password: string,
    mode: Mode = 'dev',
    timeout = 1000
  ) {
    this.mode = mode;
    this.username = username;
    this.password = password;
    this.timeout = timeout;
  }

  private sanitizePostalCode(postalCode: string) {
    return postalCode.toString().replace(/\D+/g, '');
  }

  /**
   * 📨 Fetch in the RTE API
   * @param url URL. Route to the fetch. can be `/test`
   * @param method Method. Can be *GET*. *POST*...
   * @param params Querystring params. Its most used in *GET* requests
   * @param data Data. Use for *POST* requests
   * @param contentType Type of data content. Use for *POST* requests
   */
  public async fetch<T = any>(
    url: string,
    method: Method = 'GET',
    params: AxiosRequestConfig['params'] = {},
    data: AxiosRequestConfig['data'] = {},
    contentType = 'application/json'
  ): Promise<T> {
    // Insert Authorization token in request
    const headers: AxiosRequestConfig['headers'] = {
      'Content-Type': contentType
    };
    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`;
    }

    // Check if is form data, and transform
    let transformedData = data;
    if (contentType === 'multipart/form-data') {
      transformedData = qs.stringify(data);
    }

    return axios
      .request<any, ServerResponse<T>>({
        baseURL: 'https://01wapi.rte.com.br/',
        method,
        url,
        timeout: this.timeout,
        headers,
        params,
        data: transformedData
      })
      .then((response) => response.data)
      .catch((error: AxiosError<any>) => {
        if (error.response) {
          throw new RodonavesFetchServerError(
            error.message,
            error.config,
            error.code,
            error.request,
            error.response
          );
        } else if (error.request) {
          throw new RodonavesFetchClientError(
            error.message,
            error.config,
            error.code,
            error.request
          );
        } else {
          throw new RodonavesFetchOtherError(error.message, error.config);
        }
      });
  }

  /**
   * 🔑 Get token
   */
  public async auth() {
    const data = await this.fetch<{ access_token: string }>(
      '/token',
      'POST',
      undefined,
      {
        auth_type: this.mode,
        grant_type: 'password',
        username: this.username,
        password: this.password
      },
      'multipart/form-data'
    );

    this.token = data.access_token;
    return true;
  }

  /**
   * 🌆 Get City by Zip Code
   **/
  public async getCityByZipCode(zipCode: string) {
    const filteredZipCode = this.sanitizePostalCode(zipCode);
    if (!this.token) await this.auth();
    return this.fetch<RodonavesGetCityByZipCodeResponse>(
      '/api/v1/busca-por-cep',
      'GET',
      {
        zipCode: filteredZipCode
      }
    );
  }

  /**
   * 📅 Get Delivery Time
   */
  public async getDeliveryTime(
    originZipCode: string,
    destinationZipCode: string
  ) {
    if (!this.token) await this.auth();

    const [originCityData, destinationCityData] = await Promise.all([
      this.getCityByZipCode(this.sanitizePostalCode(originZipCode)),
      this.getCityByZipCode(this.sanitizePostalCode(destinationZipCode))
    ]);

    const data = {
      OriginCityDescription: originCityData.CityDescription,
      OriginUFDescription: originCityData.UnitFederation.Description,
      DestinationCityDescription: destinationCityData.CityDescription,
      DestinationUFDescription: destinationCityData.UnitFederation.Description
    };
    const { DeliveryTime } = await this.fetch<{ DeliveryTime: number }>(
      '/api/v1/prazo-entrega',
      'POST',
      {},
      data
    );
    return DeliveryTime;
  }

  /**
   * 💵 Get Quote for Shipping
   * @param originZipCode Origin ZipCode
   * @param destinationZipCode Destination ZipCode
   * @param packs A list of boxes for shipping
   * @param invoiceValue Total money value of the items in shipment
   * @param destinationTaxId CPF/CNPJ of the destination
   */
  async simulateQuote(
    originZipCode: string,
    destinationZipCode: string,
    packs: RodonavesPack[],
    invoiceValue: number,
    destinationTaxId: string
  ) {
    if (!this.token) await this.auth();

    let totalPacksWeight = 0;
    packs.forEach((pack) => {
      totalPacksWeight += pack.weight;
    });

    const [originCityData, destinationCityData] = await Promise.all([
      this.getCityByZipCode(this.sanitizePostalCode(originZipCode)),
      this.getCityByZipCode(this.sanitizePostalCode(destinationZipCode))
    ]);

    const data = {
      OriginCityId: originCityData.CityId,
      OriginZipCode: originZipCode,
      DestinationCityId: destinationCityData.CityId,
      DestinationZipCode: destinationZipCode,
      TotalWeight: totalPacksWeight,
      EletronicInvoiceValue: invoiceValue,
      CustomerTaxIdRegistration: destinationTaxId,
      Packs: packs.map((pack) => ({
        AmountPackages: 1,
        Weight: pack.weight,
        Length: pack.length,
        Height: pack.height,
        Width: pack.width
      }))
    };

    return this.fetch<RodonavesSimulateQuoteResponse>(
      '/api/v1/simula-cotacao',
      'POST',
      {},
      data
    );
  }
}
export default Rodonaves;
