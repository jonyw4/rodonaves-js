import axios from 'axios';
import qs from 'qs';
import tls from 'tls';

/* eslint-disable max-classes-per-file */

/**
 * @class
 * @augments Error
 */
class RodonavesFetchServerError extends Error {
  /**
   * Creates an instance of RodonavesFetchServerError.
   *
   * @param {string} status Status Code passed from the server
   * @memberof RodonavesFetchServerError
   */
  constructor(status) {
    super(`Server error status ${status} `);
    this.name = 'RodonavesFetchServerError';
  }
}

/**
 * @class
 * @augments Error
 */
class RodonavesFetchClientError extends Error {
  /**
   * Creates an instance of RodonavesFetchClientError.
   *
   * @memberof RodonavesFetchClientError
   */
  constructor() {
    super('Client error');
    this.name = 'RodonavesFetchClientError';
  }
}

/**
 * @class
 * @augments Error
 */
class RodonavesFetchOtherError extends Error {
  /**
   * Creates an instance of RodonavesFetchOtherError.
   *
   * @memberof RodonavesFetchOtherError
   */
  constructor() {
    super('Other Error');
    this.name = 'RodonavesFetchOtherError';
  }
}

if (tls) {
  // Fix problem of TLS with new versions of node
  tls.DEFAULT_MIN_VERSION = 'TLSv1';
}


/**
 * **FOR INTERNAL USE** - 📨 Fetch in the RTE API
 *
 * @alias module:rodonaves-js#Rodonaves~fetch
 * @param {string} url URL. Route to the fetch. can be `/test`
 * @param {string} method Method. Can be *GET*. *POST*...
 * @param {object} params Querystring params. Its most used in *GET* requests
 * @param {object} data Data. Use for *POST* requests
 * @param {string} contentType Type of data content. Use for *POST* requests
 * @returns {Promise.<any, (Error)>} Data response of the fetch, or an error if rejected.
 */
async function fetch (url, method = 'GET', params = {}, data = {}, contentType = 'application/json') {
  // Insert Authorization token in request
  const headers = { 'Content-Type': contentType };
  if (this.token) {
    headers.Authorization = `Bearer ${this.token}`;
  }

  // Check if is form data, and transform
  let transformedData = data;
  if (contentType === 'multipart/form-data') {
    transformedData = qs.stringify(data);
  }

  try {
    const response = await axios({
      baseURL: 'https://01wapi.rte.com.br/',
      method,
      url,
      timeout: this.timeout,
      headers,
      params,
      data: transformedData,
    });
    return response.data;
  } catch (error) {
    // console.log(error);
    if (error.response) {
      throw new RodonavesFetchServerError(error.response.status);
    } else if (error.request) {
      throw new RodonavesFetchClientError();
    } else {
      throw new RodonavesFetchOtherError();
    }
  }
}

/**
 * **FOR INTERNAL USE** - 🔑 Get token. Used for other functions to put token in header
 *
 * @alias module:rodonaves-js#Rodonaves~auth
 * @returns {Promise.<boolean, (Error)>} True response credentials are ok, or an error if rejected.
 */
async function auth() {
  const data = await this.fetch(
    '/token',
    'POST',
    undefined,
    {
      auth_type: this.mode,
      grant_type: 'password',
      username: this.username,
      password: this.password,
    },
    'multipart/form-data',
  );

  this.token = data.access_token;
  return true;
}

/**
 * @typedef {object} RodonavesGetCityByZipCodeResponse
 * @property {number} CityId City Id
 * @property {string} CityDescription City name
 * @property {object} UnitFederation State Information
 * @property {string} UnitFederation.Description State of the city
 * @property {string} Street Street
 * @property {string} District District
 * @property {number} ZipCode Zip Code
 * @property {number} Number Number
 * @property {string} Supplement Supplement
 * @property {number} SitLoc ?
 * @property {boolean} SectorAttended If sector is attended
 * @property {boolean} CityAttended If city is attended
 * @property {string} NotAttendedMessage Message to location not attended
 */

/**
 * 🌆 Get City by Zip Code
 *
 * @alias module:rodonaves-js#Rodonaves~getCityByZipCode
 * @param {string} zipCode ZipCode Just numbers
 * @returns {Promise.<RodonavesGetCityByZipCodeResponse, (Error)>} Return a city data, or an error if rejected.
 */
async function getCityByZipCode (zipCode) {
  const filteredZipCode = zipCode.match(/\d+/g).join('');
  if (!this.token) await this.auth();
  return this.fetch('/api/v1/busca-por-cep', 'GET', {
    zipCode: filteredZipCode,
  });
}

/**
 * @typedef {object} RodonavesSimulateQuoteResponse
 * @property {number} Value Value
 * @property {number} DeliveryTime Delivery Time
 * @property {number} ProtocolNumber Protocol Number
 * @property {string} CustomerEmail Customer Email
 * @property {boolean} Cubed if is cubed
 * @property {string} Message Message
 * @property {string} ExpirationDay Expiration Day
 */

/**
 * @typedef {object} RodonavesPack
 * @property {number} weight Weight (kg)
 * @property {number} length Length (cm)
 * @property {number} height Height (cm)
 * @property {number} width Width (cm)
 */

/**
 * 💵 Get Quote for Shipping
 *
 * @alias module:rodonaves-js#Rodonaves~simulateQuote
 * @param {string} originZipCode Origin ZipCode
 * @param {string} destinationZipCode Destination ZipCode
 * @param {RodonavesPack[]} packs A list of boxes for shipping
 * @param {number} invoiceValue Total money value of the items in shipment
 * @param {number} destinationTaxId CPF/CNPJ of the destination
 * @returns {Promise.<RodonavesSimulateQuoteResponse, (Error)>}  Return the simulate quote data, or an error if rejected.
 */
async function simulateQuote (originZipCode, destinationZipCode, packs, invoiceValue, destinationTaxId) {
  if (!packs || packs.length === 0) {
    throw new Error('Packs can not be null or empty');
  }

  if (!this.token) await this.auth();

  let totalPacksWeight = 0;
  packs.forEach((pack) => {
    totalPacksWeight += pack.weight;
  });

  const filteredOriginZipCode = originZipCode.match(/\d+/g).join('');
  const filteredDestinationZipCode = destinationZipCode.match(/\d+/g).join('');

  const [originCityData, destinationCityData] = await Promise.all([
    this.getCityByZipCode(filteredOriginZipCode),
    this.getCityByZipCode(filteredDestinationZipCode),
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
      Width: pack.width,
    })),
  };

  return this.fetch('/api/v1/simula-cotacao', 'POST', {}, data);
}

/**
 * 📅 Get Delivery Time
 *
 * @alias module:rodonaves-js#Rodonaves~getDeliveryTime
 * @param {string} originZipCode Origin ZipCode
 * @param {string} destinationZipCode Destination ZipCode
 * @returns {Promise.<number, (Error)>} Return a delivery time, or an error if rejected.
 */
async function getDeliveryTime (originZipCode, destinationZipCode) {
  const filteredOriginZipCode = originZipCode.match(/\d+/g).join('');
  const filteredDestinationZipCode = destinationZipCode.match(/\d+/g).join('');

  if (!this.token) await this.auth();

  const [originCityData, destinationCityData] = await Promise.all([
    this.getCityByZipCode(filteredOriginZipCode),
    this.getCityByZipCode(filteredDestinationZipCode),
  ]);

  const data = {
    OriginCityDescription: originCityData.CityDescription,
    OriginUFDescription: originCityData.UnitFederation.Description,
    DestinationCityDescription: destinationCityData.CityDescription,
    DestinationUFDescription: destinationCityData.UnitFederation.Description,
  };
  const { DeliveryTime } = await this.fetch('/api/v1/prazo-entrega', 'POST', {}, data);
  return DeliveryTime;
}

/**
 * @class
 * @alias module:rodonaves-js#Rodonaves
 * @param {string} username Rodonaves username for Auth
 * @param {string} password Rodonaves password for Auth
 * @param {string} mode Mode of the request. Can be `dev` or `prod`
 * @param {number} timeout Timeout of the request in *ms*
 */
function Rodonaves(username, password, mode = 'dev', timeout = 1000) {
  this.mode = mode;
  this.username = username;
  this.password = password;
  this.timeout = timeout;
  this.token = null;
}
Rodonaves.prototype = {};
Rodonaves.prototype.constructor = Rodonaves;
Rodonaves.prototype.fetch = fetch;
Rodonaves.prototype.auth = auth;
Rodonaves.prototype.getCityByZipCode = getCityByZipCode;
Rodonaves.prototype.getDeliveryTime = getDeliveryTime;
Rodonaves.prototype.simulateQuote = simulateQuote;

/**
 * @module rodonaves-js
 */

export default Rodonaves;
