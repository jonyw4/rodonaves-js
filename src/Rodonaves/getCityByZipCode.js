/**
 * Get City by Zip Code
 * @alias module:rodonaves-js#Rodonaves.getCityByZipCode
 * @instance
 * @param {String} zipCode ZipCode
 * @returns {Promise} Promise object with data information
 */
export default async function (zipCode) {
  if (!this.token) await this.auth();
  return this.fetch('/api/v1/busca-por-cep', 'GET', {
    zipCode,
  });
}
