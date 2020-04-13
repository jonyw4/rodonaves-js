import fetch from './fetch';
import auth from './auth';
import getCity from './getCity';
import getCotacao from './getCotacao';
import getPrazoEntrega from './getPrazoEntrega';
import getCotacaoAndPrazoEntrega from './getCotacaoAndPrazoEntrega';

class Rodonaves {
  /**
   * Constructor
   * @param {String} username Rodonaves username for Auth
   * @param {String} password Rodonaves password for Auth
   * @param {String} mode Mode of the request. Can be dev or prod
   */
  constructor(username, password, mode = 'dev', timeout = 1000) {
    this.mode = mode;
    this.username = username;
    this.password = password;
    this.timeout = timeout;
    this.token = null;
  }
}
Rodonaves.prototype.fetch = fetch;
Rodonaves.prototype.auth = auth;
Rodonaves.prototype.getCity = getCity;
Rodonaves.prototype.getCotacao = getCotacao;
Rodonaves.prototype.getPrazoEntrega = getPrazoEntrega;
Rodonaves.prototype.getCotacaoAndPrazoEntrega = getCotacaoAndPrazoEntrega;

export default Rodonaves;
