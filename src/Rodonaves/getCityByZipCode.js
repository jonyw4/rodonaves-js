// TODO: BuscaPorCepResponse correct def

/**
 * @typedef {object} BuscaPorCepResponse
 * @memberof module:Rodonaves#Rodonaves
 * @property {bool} valid True if the token is valid.
 * @property {string} id The user id bound to the token.
 */

/**
 * 🌆 Get City by Zip Code
 *
 * @alias module:rodonaves-js#Rodonaves.getCityByZipCode
 * @instance
 * @param {string} zipCode ZipCode Just numbers
 * @returns {Promise.<BuscaPorCepResponse, (Error)>} Return a city data, or an error if rejected.
 */
export default async function (zipCode) {
  if (!this.token) await this.auth();
  return this.fetch('/api/v1/busca-por-cep', 'GET', {
    zipCode,
  });
}
