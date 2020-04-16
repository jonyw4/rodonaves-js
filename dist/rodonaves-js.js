(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('axios'), require('qs'), require('tls')) :
  typeof define === 'function' && define.amd ? define(['exports', 'axios', 'qs', 'tls'], factory) :
  (global = global || self, factory(global.rodonaves = {}, global.axios, global.qs, global.tls));
}(this, (function (exports, axios, qs, tls) { 'use strict';

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

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    return function () {
      var Super = _getPrototypeOf(Derived),
          result;

      if (_isNativeReflectConstruct()) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  /**
   * @class
   * @alias module:rodonaves-js
   * @augments Error
   */


  var RodonavesFetchServerError = /*#__PURE__*/function (_Error2) {
    _inherits(RodonavesFetchServerError, _Error2);

    var _super2 = _createSuper(RodonavesFetchServerError);

    /**
     * Creates an instance of RodonavesFetchServerError.
     *
     * @param {string} status Status Code passed from the server
     * @memberof RodonavesFetchServerError
     */
    function RodonavesFetchServerError(status) {
      var _this2;

      _classCallCheck(this, RodonavesFetchServerError);

      _this2 = _super2.call(this, "Server error status ".concat(status, " "));
      _this2.name = 'RodonavesFetchServerError';
      return _this2;
    }

    return RodonavesFetchServerError;
  }( /*#__PURE__*/_wrapNativeSuper(Error));
  /**
   * @class
   * @alias module:rodonaves-js
   * @augments Error
   */


  var RodonavesFetchClientError = /*#__PURE__*/function (_Error3) {
    _inherits(RodonavesFetchClientError, _Error3);

    var _super3 = _createSuper(RodonavesFetchClientError);

    /**
     * Creates an instance of RodonavesFetchClientError.
     *
     * @memberof RodonavesFetchClientError
     */
    function RodonavesFetchClientError() {
      var _this3;

      _classCallCheck(this, RodonavesFetchClientError);

      _this3 = _super3.call(this, 'Client error');
      _this3.name = 'RodonavesFetchClientError';
      return _this3;
    }

    return RodonavesFetchClientError;
  }( /*#__PURE__*/_wrapNativeSuper(Error));
  /**
   * @class
   * @alias module:rodonaves-js
   * @augments Error
   */


  var RodonavesFetchOtherError = /*#__PURE__*/function (_Error4) {
    _inherits(RodonavesFetchOtherError, _Error4);

    var _super4 = _createSuper(RodonavesFetchOtherError);

    /**
     * Creates an instance of RodonavesFetchOtherError.
     *
     * @memberof RodonavesFetchOtherError
     */
    function RodonavesFetchOtherError() {
      var _this4;

      _classCallCheck(this, RodonavesFetchOtherError);

      _this4 = _super4.call(this, 'Other Error');
      _this4.name = 'RodonavesFetchOtherError';
      return _this4;
    }

    return RodonavesFetchOtherError;
  }( /*#__PURE__*/_wrapNativeSuper(Error));

  /**
   * **FOR INTERNAL USE** - 📨 Fetch in the RTE API
   *
   * @alias module:rodonaves-js#Rodonaves~fetch
   * @param {string} url URL. Route to the fetch. can be `/test`
   * @param {string} method Method. Can be *GET*. *POST*...
   * @param {object} params Querystring params. Its most used in *GET* requests
   * @param {object} data Data. Use for *POST* requests
   * @param contentType Type of data content. Use for *POST* requests
   * @returns {Promise.<any, (Error)>} Data response of the fetch, or an error if rejected.
   */

  function fetch (_x) {
    return _ref.apply(this, arguments);
  }

  function _ref() {
    _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
      var method,
          params,
          data,
          contentType,
          headers,
          transformedData,
          response,
          _args = arguments;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              method = _args.length > 1 && _args[1] !== undefined ? _args[1] : 'GET';
              params = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
              data = _args.length > 3 && _args[3] !== undefined ? _args[3] : {};
              contentType = _args.length > 4 && _args[4] !== undefined ? _args[4] : 'application/json';
              // Fix problem of TLS with new versions of node
              tls.DEFAULT_MIN_VERSION = 'TLSv1'; // Insert Authorization token in request

              headers = {
                'Content-Type': contentType
              };

              if (this.token) {
                headers.Authorization = "Bearer ".concat(this.token);
              } // Check if is form data, and transform


              transformedData = data;

              if (contentType === 'multipart/form-data') {
                transformedData = qs.stringify(data);
              }

              _context.prev = 9;
              _context.next = 12;
              return axios({
                baseURL: 'https://01wapi.rte.com.br/',
                method: method,
                url: url,
                timeout: this.timeout,
                headers: headers,
                params: params,
                data: transformedData
              });

            case 12:
              response = _context.sent;
              return _context.abrupt("return", response.data);

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](9);

              if (!_context.t0.response) {
                _context.next = 22;
                break;
              }

              throw new RodonavesFetchServerError(_context.t0.response.status);

            case 22:
              if (!_context.t0.request) {
                _context.next = 26;
                break;
              }

              throw new RodonavesFetchClientError();

            case 26:
              throw new RodonavesFetchOtherError();

            case 27:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[9, 16]]);
    }));
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
    _auth = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.fetch('/token', 'POST', undefined, {
                auth_type: this.mode,
                grant_type: 'password',
                username: this.username,
                password: this.password
              }, 'multipart/form-data');

            case 2:
              data = _context.sent;
              this.token = data.access_token;
              return _context.abrupt("return", true);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
    return _auth.apply(this, arguments);
  }

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
  function getCityByZipCode (_x) {
    return _ref$1.apply(this, arguments);
  }

  function _ref$1() {
    _ref$1 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(zipCode) {
      var filteredZipCode;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              filteredZipCode = zipCode.match(/\d+/g).join('');

              if (this.token) {
                _context.next = 4;
                break;
              }

              _context.next = 4;
              return this.auth();

            case 4:
              return _context.abrupt("return", this.fetch('/api/v1/busca-por-cep', 'GET', {
                zipCode: filteredZipCode
              }));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
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
    _ref$2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(originZipCode, destinationZipCode, packs, invoiceValue, destinationTaxId) {
      var totalPacksWeight, filteredOriginZipCode, filteredDestinationZipCode, _yield$Promise$all, _yield$Promise$all2, originCityData, destinationCityData, data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(!packs || packs.length === 0)) {
                _context.next = 2;
                break;
              }

              throw new Error('Packs can not be null or empty');

            case 2:
              if (this.token) {
                _context.next = 5;
                break;
              }

              _context.next = 5;
              return this.auth();

            case 5:
              totalPacksWeight = 0;
              packs.forEach(function (pack) {
                totalPacksWeight += pack.weight;
              });
              filteredOriginZipCode = originZipCode.match(/\d+/g).join('');
              filteredDestinationZipCode = destinationZipCode.match(/\d+/g).join('');
              _context.next = 11;
              return Promise.all([this.getCityByZipCode(filteredOriginZipCode), this.getCityByZipCode(filteredDestinationZipCode)]);

            case 11:
              _yield$Promise$all = _context.sent;
              _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
              originCityData = _yield$Promise$all2[0];
              destinationCityData = _yield$Promise$all2[1];
              data = {
                OriginCityId: originCityData.CityId,
                OriginZipCode: originZipCode,
                DestinationCityId: destinationCityData.CityId,
                DestinationZipCode: destinationZipCode,
                TotalWeight: totalPacksWeight,
                EletronicInvoiceValue: invoiceValue,
                CustomerTaxIdRegistration: destinationTaxId,
                Packs: packs.map(function (pack) {
                  return {
                    AmountPackages: 1,
                    Weight: pack.weight,
                    Length: pack.length,
                    Height: pack.height,
                    Width: pack.width
                  };
                })
              };
              return _context.abrupt("return", this.fetch('/api/v1/simula-cotacao', 'POST', {}, data));

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
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
    _ref$3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(originZipCode, destinationZipCode) {
      var filteredOriginZipCode, filteredDestinationZipCode, _yield$Promise$all, _yield$Promise$all2, originCityData, destinationCityData, data, _yield$this$fetch, DeliveryTime;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              filteredOriginZipCode = originZipCode.match(/\d+/g).join('');
              filteredDestinationZipCode = destinationZipCode.match(/\d+/g).join('');

              if (this.token) {
                _context.next = 5;
                break;
              }

              _context.next = 5;
              return this.auth();

            case 5:
              _context.next = 7;
              return Promise.all([this.getCityByZipCode(filteredOriginZipCode), this.getCityByZipCode(filteredDestinationZipCode)]);

            case 7:
              _yield$Promise$all = _context.sent;
              _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
              originCityData = _yield$Promise$all2[0];
              destinationCityData = _yield$Promise$all2[1];
              data = {
                OriginCityDescription: originCityData.CityDescription,
                OriginUFDescription: originCityData.UnitFederation.Description,
                DestinationCityDescription: destinationCityData.CityDescription,
                DestinationUFDescription: destinationCityData.UnitFederation.Description
              };
              _context.next = 14;
              return this.fetch('/api/v1/prazo-entrega', 'POST', {}, data);

            case 14:
              _yield$this$fetch = _context.sent;
              DeliveryTime = _yield$this$fetch.DeliveryTime;
              return _context.abrupt("return", DeliveryTime);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
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

  exports.Rodonaves = Rodonaves;
  exports.RodonavesFetchClientError = RodonavesFetchClientError;
  exports.RodonavesFetchOtherError = RodonavesFetchOtherError;
  exports.RodonavesFetchServerError = RodonavesFetchServerError;
  exports.default = Rodonaves;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
