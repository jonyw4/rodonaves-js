/**
 * 📅 Get Delivery Time
 *
 * @alias module:rodonaves-js#Rodonaves.getPrazoEntrega
 * @instance
 * @param {string} originZipCode Origin ZipCode
 * @param {string} destinationZipCode Destination ZipCode
 * @returns {Promise.<number, (Error)>} Return a delivery time, or an error if rejected.
 */
export default async function (originZipCode, destinationZipCode) {
  const filteredOriginZipCode = originZipCode.match(/\d+/g).join('');
  const filteredDestinationZipCode = destinationZipCode.match(/\d+/g).join('');

  if (!this.token) await this.auth();

  // TODO: Improve catch error
  const [originCityData, destinationCityData] = await Promise.all([
    this.getCityByZipCode(filteredOriginZipCode).catch((e) => e),
    this.getCityByZipCode(filteredDestinationZipCode).catch((e) => e),
  ]);

  const data = {
    OriginCityDescription: originCityData.CityDescription,
    OriginUFDescription: originCityData.UnitFederation.Description,
    DestinationCityDescription: destinationCityData.CityDescription,
    DestinationUFDescription: destinationCityData.UnitFederation.Description,
  };
  const { Value } = this.fetch('/api/v1/prazo-entrega', 'POST', {}, data);
  return Value;
}
