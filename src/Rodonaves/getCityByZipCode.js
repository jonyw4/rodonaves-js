/**
 * @typedef {object} RodonavesGetCityByZipCodeResponse
 * @property {number} CityId City Id
 * @property {string} CityDescription City name
 * @property {string} UnitFederation.Description State of the city
 * @property {string} Street Street
 * @property {string} District District
 * @property {number} ZipCode Zip Code
 * @property {number} Number Number
 * @property {string} Supplement Supplement
 * @property {number} SitLoc ?
 * @property {boolean} SectorAttended If sector is attended
 * @property {boolean} CityAttended If city is attended
 * @property {string} NotAttendedMessage Message to location not attended
 */

/**
 * 🌆 Get City by Zip Code
 *
 * @alias module:rodonaves-js#Rodonaves~getCityByZipCode
 * @param {string} zipCode ZipCode Just numbers
 * @returns {Promise.<RodonavesGetCityByZipCodeResponse, (Error)>} Return a city data, or an error if rejected.
 */
export default async function (zipCode) {
  const filteredZipCode = zipCode.match(/\d+/g).join('');
  if (!this.token) await this.auth();
  return this.fetch('/api/v1/busca-por-cep', 'GET', {
    zipCode: filteredZipCode,
  });
}
