import axios from 'axios';
import qs from 'qs';
import tls from 'tls';
import {
  RodonavesFetchOtherError,
  RodonavesFetchClientError,
  RodonavesFetchServerError,
} from '../errors';

if (tls) {
  // Fix problem of TLS with new versions of node
  tls.DEFAULT_MIN_VERSION = 'TLSv1';
}


/**
 * **FOR INTERNAL USE** - 📨 Fetch in the RTE API
 *
 * @alias module:rodonaves-js#Rodonaves~fetch
 * @param {string} url URL. Route to the fetch. can be `/test`
 * @param {import('axios').Method} method Method. Can be *GET*. *POST*...
 * @param {object} params Querystring params. Its most used in *GET* requests
 * @param {object} data Data. Use for *POST* requests
 * @param {string} contentType Type of data content. Use for *POST* requests
 * @returns {Promise.<any, (Error)>} Data response of the fetch, or an error if rejected.
 */
export default async function (url, method = 'GET', params = {}, data = {}, contentType = 'application/json') {
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
