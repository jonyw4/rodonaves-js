/**
 * @typedef {object} RodonavesSimulateQuoteResponse
 * @property {number} Value Value
 * @property {number} DeliveryTime Delivery Time
 * @property {number} ProtocolNumber Protocol Number
 * @property {string} CustomerEmail Customer Email
 * @property {boolean} Cubed if is cubed
 * @property {string} Message Message
 * @property {string} ExpirationDay Expiration Day
 */

/**
 * @typedef {object} RodonavesPack
 * @property {number} weight Weight (kg)
 * @property {number} length Length (cm)
 * @property {number} height Height (cm)
 * @property {number} width Width (cm)
 */

/**
 * 💵 Get Quote for Shipping
 *
 * @alias module:rodonaves-js#Rodonaves~simulateQuote
 * @param {string} originZipCode Origin ZipCode
 * @param {string} destinationZipCode Destination ZipCode
 * @param {RodonavesPack[]} packs A list of boxes for shipping
 * @param {number} invoiceValue Total money value of the items in shipment
 * @param {string} destinationTaxId CPF/CNPJ of the destination
 * @returns {Promise.<RodonavesSimulateQuoteResponse, (Error)>}  Return the simulate quote data, or an error if rejected.
 */
export default async function (originZipCode, destinationZipCode, packs, invoiceValue, destinationTaxId) {
  if (!packs || packs.length === 0) {
    throw new Error('Packs can not be null or empty');
  }

  if (!this.token) await this.auth();

  let totalPacksWeight = 0;
  packs.forEach((pack) => {
    totalPacksWeight += pack.weight;
  });

  const filteredOriginZipCode = originZipCode.match(/\d+/g).join('');
  const filteredDestinationZipCode = destinationZipCode.match(/\d+/g).join('');

  const [originCityData, destinationCityData] = await Promise.all([
    this.getCityByZipCode(filteredOriginZipCode),
    this.getCityByZipCode(filteredDestinationZipCode),
  ]);

  const data = {
    OriginCityId: originCityData.CityId,
    OriginZipCode: originZipCode,
    DestinationCityId: destinationCityData.CityId,
    DestinationZipCode: destinationZipCode,
    TotalWeight: totalPacksWeight,
    EletronicInvoiceValue: invoiceValue,
    CustomerTaxIdRegistration: destinationTaxId,
    Packs: packs.map((pack) => ({
      AmountPackages: 1,
      Weight: pack.weight,
      Length: pack.length,
      Height: pack.height,
      Width: pack.width,
    })),
  };

  return this.fetch('/api/v1/simula-cotacao', 'POST', {}, data);
}
