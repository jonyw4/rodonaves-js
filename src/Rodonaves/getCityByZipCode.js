// TODO: BuscaPorCepResponse correct def

/**
 * @typedef {Object} BuscaPorCepResponse
 * @memberof module:rodonaves-js#Rodonaves
 * @property {bool} valid True if the token is valid.
 * @property {string} id The user id bound to the token.
 */

/**
 * Get City by Zip Code
 * @alias module:rodonaves-js#Rodonaves.getCityByZipCode
 * @instance
 * @param {String} zipCode ZipCode
 * @reject {Error}
 * @fulfill {BuscaPorCepResponse} API Response
 * @returns {Promise.<BuscaPorCepResponse>}
 */
export default async function (zipCode) {
  if (!this.token) await this.auth();
  return this.fetch('/api/v1/busca-por-cep', 'GET', {
    zipCode,
  });
}
