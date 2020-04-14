import fetch from './fetch';
import auth from './auth';
import getCityByZipCode from './getCityByZipCode';
import getCotacao from './getCotacao';
import getPrazoEntrega from './getPrazoEntrega';
import getCotacaoAndPrazoEntrega from './getCotacaoAndPrazoEntrega';

/**
 * @class
 * @alias module:rodonaves-js#Rodonaves
 * @param {string} username Rodonaves username for Auth
 * @param {string} password Rodonaves password for Auth
 * @param {string} mode Mode of the request. Can be dev or prod
 * @param timeout
 * @todo Create function getCityByName(name) using GET /api/v1/busca-cidade?name=''
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
Rodonaves.prototype.getCotacao = getCotacao;
Rodonaves.prototype.getPrazoEntrega = getPrazoEntrega;
Rodonaves.prototype.getCotacaoAndPrazoEntrega = getCotacaoAndPrazoEntrega;

/**
 * @module rodonaves-js
 */

export default Rodonaves;
