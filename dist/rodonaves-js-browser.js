(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('axios'), require('qs'), require('tls')) :
  typeof define === 'function' && define.amd ? define(['axios', 'qs', 'tls'], factory) :
  (global = global || self, global.Rodonaves = factory(global.axios, global.Qs, global.tls));
}(this, (function (axios, qs, tls) { 'use strict';

  axios = axios && Object.prototype.hasOwnProperty.call(axios, 'default') ? axios['default'] : axios;
  qs = qs && Object.prototype.hasOwnProperty.call(qs, 'default') ? qs['default'] : qs;
  tls = tls && Object.prototype.hasOwnProperty.call(tls, 'default') ? tls['default'] : tls;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  /* eslint-disable max-classes-per-file */
  /**
   * @class
   * @augments Error
   */


  class RodonavesFetchServerError extends Error {
    /**
     * Creates an instance of RodonavesFetchServerError.
     *
     * @param {string} status Status Code passed from the server
     * @memberof RodonavesFetchServerError
     */
    constructor(status) {
      super("Server error status ".concat(status, " "));
      this.name = 'RodonavesFetchServerError';
    }

  }
  /**
   * @class
   * @augments Error
   */


  class RodonavesFetchClientError extends Error {
    /**
     * Creates an instance of RodonavesFetchClientError.
     *
     * @memberof RodonavesFetchClientError
     */
    constructor() {
      super('Client error');
      this.name = 'RodonavesFetchClientError';
    }

  }
  /**
   * @class
   * @augments Error
   */


  class RodonavesFetchOtherError extends Error {
    /**
     * Creates an instance of RodonavesFetchOtherError.
     *
     * @memberof RodonavesFetchOtherError
     */
    constructor() {
      super('Other Error');
      this.name = 'RodonavesFetchOtherError';
    }

  }

  if (tls) {
    // Fix problem of TLS with new versions of node
    tls.DEFAULT_MIN_VERSION = 'TLSv1';
  }
  /**
   * **FOR INTERNAL USE** - 📨 Fetch in the RTE API
   *
   * @alias module:rodonaves-js#Rodonaves~fetch
   * @param {string} url URL. Route to the fetch. can be `/test`
   * @param {string} method Method. Can be *GET*. *POST*...
   * @param {object} params Querystring params. Its most used in *GET* requests
   * @param {object} data Data. Use for *POST* requests
   * @param {string} contentType Type of data content. Use for *POST* requests
   * @returns {Promise.<any, (Error)>} Data response of the fetch, or an error if rejected.
   */


  function fetch (_x) {
    return _ref.apply(this, arguments);
  }

  function _ref() {
    _ref = _asyncToGenerator(function* (url) {
      var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
      var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var contentType = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'application/json';
      // Insert Authorization token in request
      var headers = {
        'Content-Type': contentType
      };

      if (this.token) {
        headers.Authorization = "Bearer ".concat(this.token);
      } // Check if is form data, and transform


      var transformedData = data;

      if (contentType === 'multipart/form-data') {
        transformedData = qs.stringify(data);
      }

      try {
        var response = yield axios({
          baseURL: 'https://01wapi.rte.com.br/',
          method,
          url,
          timeout: this.timeout,
          headers,
          params,
          data: transformedData
        });
        return response.data;
      } catch (error) {
        // console.log(error);
        if (error.response) {
          throw new RodonavesFetchServerError(error.response.status);
        } else if (error.request) {
          throw new RodonavesFetchClientError();
        } else {
          throw new RodonavesFetchOtherError();
        }
      }
    });
    return _ref.apply(this, arguments);
  }

  /**
   * **FOR INTERNAL USE** - 🔑 Get token. Used for other functions to put token in header
   *
   * @alias module:rodonaves-js#Rodonaves~auth
   * @returns {Promise.<boolean, (Error)>} True response credentials are ok, or an error if rejected.
   */
  function auth() {
    return _auth.apply(this, arguments);
  }

  function _auth() {
    _auth = _asyncToGenerator(function* () {
      var data = yield this.fetch('/token', 'POST', undefined, {
        auth_type: this.mode,
        grant_type: 'password',
        username: this.username,
        password: this.password
      }, 'multipart/form-data');
      this.token = data.access_token;
      return true;
    });
    return _auth.apply(this, arguments);
  }

  /**
   * @typedef {object} RodonavesGetCityByZipCodeResponse
   * @property {number} CityId City Id
   * @property {string} CityDescription City name
   * @property {object} UnitFederation State Information
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
  function getCityByZipCode (_x) {
    return _ref$1.apply(this, arguments);
  }

  function _ref$1() {
    _ref$1 = _asyncToGenerator(function* (zipCode) {
      var filteredZipCode = zipCode.match(/\d+/g).join('');
      if (!this.token) yield this.auth();
      return this.fetch('/api/v1/busca-por-cep', 'GET', {
        zipCode: filteredZipCode
      });
    });
    return _ref$1.apply(this, arguments);
  }

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
   * @param {number} destinationTaxId CPF/CNPJ of the destination
   * @returns {Promise.<RodonavesSimulateQuoteResponse, (Error)>}  Return the simulate quote data, or an error if rejected.
   */
  function simulateQuote (_x, _x2, _x3, _x4, _x5) {
    return _ref$2.apply(this, arguments);
  }

  function _ref$2() {
    _ref$2 = _asyncToGenerator(function* (originZipCode, destinationZipCode, packs, invoiceValue, destinationTaxId) {
      if (!packs || packs.length === 0) {
        throw new Error('Packs can not be null or empty');
      }

      if (!this.token) yield this.auth();
      var totalPacksWeight = 0;
      packs.forEach(pack => {
        totalPacksWeight += pack.weight;
      });
      var filteredOriginZipCode = originZipCode.match(/\d+/g).join('');
      var filteredDestinationZipCode = destinationZipCode.match(/\d+/g).join('');
      var [originCityData, destinationCityData] = yield Promise.all([this.getCityByZipCode(filteredOriginZipCode), this.getCityByZipCode(filteredDestinationZipCode)]);
      var data = {
        OriginCityId: originCityData.CityId,
        OriginZipCode: originZipCode,
        DestinationCityId: destinationCityData.CityId,
        DestinationZipCode: destinationZipCode,
        TotalWeight: totalPacksWeight,
        EletronicInvoiceValue: invoiceValue,
        CustomerTaxIdRegistration: destinationTaxId,
        Packs: packs.map(pack => ({
          AmountPackages: 1,
          Weight: pack.weight,
          Length: pack.length,
          Height: pack.height,
          Width: pack.width
        }))
      };
      return this.fetch('/api/v1/simula-cotacao', 'POST', {}, data);
    });
    return _ref$2.apply(this, arguments);
  }

  /**
   * 📅 Get Delivery Time
   *
   * @alias module:rodonaves-js#Rodonaves~getDeliveryTime
   * @param {string} originZipCode Origin ZipCode
   * @param {string} destinationZipCode Destination ZipCode
   * @returns {Promise.<number, (Error)>} Return a delivery time, or an error if rejected.
   */
  function getDeliveryTime (_x, _x2) {
    return _ref$3.apply(this, arguments);
  }

  function _ref$3() {
    _ref$3 = _asyncToGenerator(function* (originZipCode, destinationZipCode) {
      var filteredOriginZipCode = originZipCode.match(/\d+/g).join('');
      var filteredDestinationZipCode = destinationZipCode.match(/\d+/g).join('');
      if (!this.token) yield this.auth();
      var [originCityData, destinationCityData] = yield Promise.all([this.getCityByZipCode(filteredOriginZipCode), this.getCityByZipCode(filteredDestinationZipCode)]);
      var data = {
        OriginCityDescription: originCityData.CityDescription,
        OriginUFDescription: originCityData.UnitFederation.Description,
        DestinationCityDescription: destinationCityData.CityDescription,
        DestinationUFDescription: destinationCityData.UnitFederation.Description
      };
      var {
        DeliveryTime
      } = yield this.fetch('/api/v1/prazo-entrega', 'POST', {}, data);
      return DeliveryTime;
    });
    return _ref$3.apply(this, arguments);
  }

  /**
   * @class
   * @alias module:rodonaves-js#Rodonaves
   * @param {string} username Rodonaves username for Auth
   * @param {string} password Rodonaves password for Auth
   * @param {string} mode Mode of the request. Can be `dev` or `prod`
   * @param {number} timeout Timeout of the request in *ms*
   * @todo Create function `getCityByName(name)`
   * @todo Create function `tracking(name)`
   * @todo Create function `quote()`
   * @todo Create function `updateQuote()`
   */

  function Rodonaves(username, password) {
    var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'dev';
    var timeout = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1000;
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
  Rodonaves.prototype.getDeliveryTime = getDeliveryTime;
  Rodonaves.prototype.simulateQuote = simulateQuote;

  /**
   * @module rodonaves-js
   */

  return Rodonaves;

})));
