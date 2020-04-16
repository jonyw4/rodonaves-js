import fetch from './fetch';
import auth from './auth';
import getCityByZipCode from './getCityByZipCode';
import simulateQuote from './simulateQuote';
import getDeliveryTime from './getDeliveryTime';

/**
 * @class
 * @alias module:rodonaves-js#Rodonaves
 * @param {string} username Rodonaves username for Auth
 * @param {string} password Rodonaves password for Auth
 * @param {string} mode Mode of the request. Can be `dev` or `prod`
 * @param {number} timeout Timeout of the request in *ms*
 * @todo Create function `getCityByName(name)`
 * @todo Create function `tracking(name)`
 * @todo Create function `quote()`
 * @todo Create function `updateQuote()`
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
