import fetch from './fetch';
import auth from './auth';
import getCityByZipCode from './getCityByZipCode';
import getCotacao from './getCotacao';
import getPrazoEntrega from './getPrazoEntrega';
import getCotacaoAndPrazoEntrega from './getCotacaoAndPrazoEntrega';

/**
 * @class Rodonaves
 * @classdesc Rodonaves API Class
 * @memberof module:rodonaves-js
 * @instance
 * @constructor
 * @param {String} username Rodonaves username for Auth
 * @param {String} password Rodonaves password for Auth
 * @param {String} mode Mode of the request. Can be dev or prod
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
 * Rodonaves API for node/javascript
 * @module rodonaves-js
 * @typicalname rodonaves
 */
export default Rodonaves;
