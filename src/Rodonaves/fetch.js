import axios from 'axios';
import qs from 'qs';
import tls from 'tls';

/**
 * Fetch in the RTE API
 * @param {String} url URL
 * @param {String} method Method
 * @param {Object} params Querystring params
 * @param {Object} data Data
 */
export default async function (url, method = 'GET', params = {}, data = {}) {
  // Fix problem of TLS with new versions of node
  tls.DEFAULT_MIN_VERSION = 'TLSv1';

  // Insert Authorization token in request
  const headers = { 'Content-Type': 'multipart/form-data' };
  if (this.token) {
    headers.Authorization = `Bearer ${this.token}`;
  }

  return axios({
    baseURL: 'https://01wapi.rte.com.br/',
    method,
    url,
    timeout: this.timeout,
    headers,
    params,
    data: qs.stringify(data),
  });
}
