import axios from 'axios';
import qs from 'qs';
import tls from 'tls';
import {
  RodonavesFetchOtherError,
  RodonavesFetchClientError,
  RodonavesFetchServerError,
} from '../errors';

/**
 * **FOR INTERNAL USE** - 📨 Fetch in the RTE API
 *
 * @alias module:rodonaves-js#Rodonaves.fetch
 * @instance
 * @param {string} url URL. Route to the fetch. can be `/test`
 * @param {string} method Method. Can be *GET*. *POST*...
 * @param {object} params Querystring params. Its most used in *GET* requests
 * @param {object} data Data. Use for *POST* requests
 * @returns {Promise.<any, (Error)>} Data response of the fetch, or an error if rejected.
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
      throw new RodonavesFetchServerError(error.response.status);
    } else if (error.request) {
      throw new RodonavesFetchClientError();
    } else {
      throw new RodonavesFetchOtherError();
    }
  }
}
