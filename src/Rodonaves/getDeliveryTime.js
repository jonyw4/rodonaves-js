/**
 * 📅 Get Delivery Time
 *
 * @alias module:rodonaves-js#Rodonaves~getDeliveryTime
 * @param {string} originZipCode Origin ZipCode
 * @param {string} destinationZipCode Destination ZipCode
 * @returns {Promise.<number, (Error)>} Return a delivery time, or an error if rejected.
 */
export default async function (originZipCode, destinationZipCode) {
  const filteredOriginZipCode = originZipCode.match(/\d+/g).join('');
  const filteredDestinationZipCode = destinationZipCode.match(/\d+/g).join('');

  if (!this.token) await this.auth();

  const [originCityData, destinationCityData] = await Promise.all([
    this.getCityByZipCode(filteredOriginZipCode),
    this.getCityByZipCode(filteredDestinationZipCode),
  ]);

  const data = {
    OriginCityDescription: originCityData.CityDescription,
    OriginUFDescription: originCityData.UnitFederation.Description,
    DestinationCityDescription: destinationCityData.CityDescription,
    DestinationUFDescription: destinationCityData.UnitFederation.Description,
  };
  const { DeliveryTime } = await this.fetch('/api/v1/prazo-entrega', 'POST', {}, data);
  return DeliveryTime;
}
