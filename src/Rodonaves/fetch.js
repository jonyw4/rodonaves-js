import axios from 'axios';
import qs from 'qs';
import tls from 'tls';
import RodonavesError from '../errors/RodonavesError';

/**
 * Fetch in the RTE API
 * @alias module:rodonaves-js#Rodonaves.fetch
 * @instance
 * @param {String} url URL
 * @param {String} method Method
 * @param {Object} params Querystring params
 * @param {Object} data Data
 * @promise fPromise
 * @reject {RodonavesError}
 * @fulfill {any} API Response
 * @returns {Promise.<any>}
 */
export default async function (url, method = 'GET', params = {}, data = {}) {
  // Fix problem of TLS with new versions of node
  tls.DEFAULT_MIN_VERSION = 'TLSv1';

  // Insert Authorization token in request
  const headers = { 'Content-Type': 'multipart/form-data' };
  if (this.token) {
    headers.Authorization = `Bearer ${this.token}`;
  }

  try {
    const response = await axios({
      baseURL: 'https://01wapi.rte.com.br/',
      method,
      url,
      timeout: this.timeout,
      headers,
      params,
      data: qs.stringify(data),
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new RodonavesError({
        message: `Server error with status: ${error.response.status}`,
        type: 'fetch_server_error',
        data: [error.response.data],
      });
    } else if (error.request) {
      throw new RodonavesError({
        message: 'Client error',
        type: 'fetch_client_error',
        data: [error.request],
      });
    } else {
      throw new RodonavesError({
        message: `Error: ${error.message}`,
        type: 'fetch_general_error',
        data: [error.request],
      });
    }
  }
}
