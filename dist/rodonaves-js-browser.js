(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('tls')) :
  typeof define === 'function' && define.amd ? define(['exports', 'tls'], factory) :
  (global = global || self, factory(global.rodonaves = {}, global.tls));
}(this, (function (exports, tls) { 'use strict';

  tls = tls && Object.prototype.hasOwnProperty.call(tls, 'default') ? tls['default'] : tls;

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

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

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var bind = function bind(fn, thisArg) {
    return function wrap() {
      var args = new Array(arguments.length);

      for (var i = 0; i < args.length; i++) {
        args[i] = arguments[i];
      }

      return fn.apply(thisArg, args);
    };
  };

  /*global toString:true*/
  // utils is a library of generic helper functions non-specific to axios


  var toString = Object.prototype.toString;
  /**
   * Determine if a value is an Array
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an Array, otherwise false
   */

  function isArray(val) {
    return toString.call(val) === '[object Array]';
  }
  /**
   * Determine if a value is undefined
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if the value is undefined, otherwise false
   */


  function isUndefined(val) {
    return typeof val === 'undefined';
  }
  /**
   * Determine if a value is a Buffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Buffer, otherwise false
   */


  function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
  }
  /**
   * Determine if a value is an ArrayBuffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an ArrayBuffer, otherwise false
   */


  function isArrayBuffer(val) {
    return toString.call(val) === '[object ArrayBuffer]';
  }
  /**
   * Determine if a value is a FormData
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an FormData, otherwise false
   */


  function isFormData(val) {
    return typeof FormData !== 'undefined' && val instanceof FormData;
  }
  /**
   * Determine if a value is a view on an ArrayBuffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
   */


  function isArrayBufferView(val) {
    var result;

    if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
      result = ArrayBuffer.isView(val);
    } else {
      result = val && val.buffer && val.buffer instanceof ArrayBuffer;
    }

    return result;
  }
  /**
   * Determine if a value is a String
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a String, otherwise false
   */


  function isString(val) {
    return typeof val === 'string';
  }
  /**
   * Determine if a value is a Number
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Number, otherwise false
   */


  function isNumber(val) {
    return typeof val === 'number';
  }
  /**
   * Determine if a value is an Object
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an Object, otherwise false
   */


  function isObject(val) {
    return val !== null && _typeof(val) === 'object';
  }
  /**
   * Determine if a value is a Date
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Date, otherwise false
   */


  function isDate(val) {
    return toString.call(val) === '[object Date]';
  }
  /**
   * Determine if a value is a File
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a File, otherwise false
   */


  function isFile(val) {
    return toString.call(val) === '[object File]';
  }
  /**
   * Determine if a value is a Blob
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Blob, otherwise false
   */


  function isBlob(val) {
    return toString.call(val) === '[object Blob]';
  }
  /**
   * Determine if a value is a Function
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Function, otherwise false
   */


  function isFunction(val) {
    return toString.call(val) === '[object Function]';
  }
  /**
   * Determine if a value is a Stream
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Stream, otherwise false
   */


  function isStream(val) {
    return isObject(val) && isFunction(val.pipe);
  }
  /**
   * Determine if a value is a URLSearchParams object
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a URLSearchParams object, otherwise false
   */


  function isURLSearchParams(val) {
    return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
  }
  /**
   * Trim excess whitespace off the beginning and end of a string
   *
   * @param {String} str The String to trim
   * @returns {String} The String freed of excess whitespace
   */


  function trim(str) {
    return str.replace(/^\s*/, '').replace(/\s*$/, '');
  }
  /**
   * Determine if we're running in a standard browser environment
   *
   * This allows axios to run in a web worker, and react-native.
   * Both environments support XMLHttpRequest, but not fully standard globals.
   *
   * web workers:
   *  typeof window -> undefined
   *  typeof document -> undefined
   *
   * react-native:
   *  navigator.product -> 'ReactNative'
   * nativescript
   *  navigator.product -> 'NativeScript' or 'NS'
   */


  function isStandardBrowserEnv() {
    if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' || navigator.product === 'NativeScript' || navigator.product === 'NS')) {
      return false;
    }

    return typeof window !== 'undefined' && typeof document !== 'undefined';
  }
  /**
   * Iterate over an Array or an Object invoking a function for each item.
   *
   * If `obj` is an Array callback will be called passing
   * the value, index, and complete array for each item.
   *
   * If 'obj' is an Object callback will be called passing
   * the value, key, and complete object for each property.
   *
   * @param {Object|Array} obj The object to iterate
   * @param {Function} fn The callback to invoke for each item
   */


  function forEach(obj, fn) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === 'undefined') {
      return;
    } // Force an array if not already something iterable


    if (_typeof(obj) !== 'object') {
      /*eslint no-param-reassign:0*/
      obj = [obj];
    }

    if (isArray(obj)) {
      // Iterate over array values
      for (var i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      // Iterate over object keys
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          fn.call(null, obj[key], key, obj);
        }
      }
    }
  }
  /**
   * Accepts varargs expecting each argument to be an object, then
   * immutably merges the properties of each object and returns result.
   *
   * When multiple objects contain the same key the later object in
   * the arguments list will take precedence.
   *
   * Example:
   *
   * ```js
   * var result = merge({foo: 123}, {foo: 456});
   * console.log(result.foo); // outputs 456
   * ```
   *
   * @param {Object} obj1 Object to merge
   * @returns {Object} Result of all merge properties
   */


  function merge()
  /* obj1, obj2, obj3, ... */
  {
    var result = {};

    function assignValue(val, key) {
      if (_typeof(result[key]) === 'object' && _typeof(val) === 'object') {
        result[key] = merge(result[key], val);
      } else {
        result[key] = val;
      }
    }

    for (var i = 0, l = arguments.length; i < l; i++) {
      forEach(arguments[i], assignValue);
    }

    return result;
  }
  /**
   * Function equal to merge with the difference being that no reference
   * to original objects is kept.
   *
   * @see merge
   * @param {Object} obj1 Object to merge
   * @returns {Object} Result of all merge properties
   */


  function deepMerge()
  /* obj1, obj2, obj3, ... */
  {
    var result = {};

    function assignValue(val, key) {
      if (_typeof(result[key]) === 'object' && _typeof(val) === 'object') {
        result[key] = deepMerge(result[key], val);
      } else if (_typeof(val) === 'object') {
        result[key] = deepMerge({}, val);
      } else {
        result[key] = val;
      }
    }

    for (var i = 0, l = arguments.length; i < l; i++) {
      forEach(arguments[i], assignValue);
    }

    return result;
  }
  /**
   * Extends object a by mutably adding to it the properties of object b.
   *
   * @param {Object} a The object to be extended
   * @param {Object} b The object to copy properties from
   * @param {Object} thisArg The object to bind function to
   * @return {Object} The resulting value of object a
   */


  function extend(a, b, thisArg) {
    forEach(b, function assignValue(val, key) {
      if (thisArg && typeof val === 'function') {
        a[key] = bind(val, thisArg);
      } else {
        a[key] = val;
      }
    });
    return a;
  }

  var utils = {
    isArray: isArray,
    isArrayBuffer: isArrayBuffer,
    isBuffer: isBuffer,
    isFormData: isFormData,
    isArrayBufferView: isArrayBufferView,
    isString: isString,
    isNumber: isNumber,
    isObject: isObject,
    isUndefined: isUndefined,
    isDate: isDate,
    isFile: isFile,
    isBlob: isBlob,
    isFunction: isFunction,
    isStream: isStream,
    isURLSearchParams: isURLSearchParams,
    isStandardBrowserEnv: isStandardBrowserEnv,
    forEach: forEach,
    merge: merge,
    deepMerge: deepMerge,
    extend: extend,
    trim: trim
  };

  var utils_1 = utils.isArray;
  var utils_2 = utils.isArrayBuffer;
  var utils_3 = utils.isBuffer;
  var utils_4 = utils.isFormData;
  var utils_5 = utils.isArrayBufferView;
  var utils_6 = utils.isString;
  var utils_7 = utils.isNumber;
  var utils_8 = utils.isObject;
  var utils_9 = utils.isUndefined;
  var utils_10 = utils.isDate;
  var utils_11 = utils.isFile;
  var utils_12 = utils.isBlob;
  var utils_13 = utils.isFunction;
  var utils_14 = utils.isStream;
  var utils_15 = utils.isURLSearchParams;
  var utils_16 = utils.isStandardBrowserEnv;
  var utils_17 = utils.forEach;
  var utils_18 = utils.merge;
  var utils_19 = utils.deepMerge;
  var utils_20 = utils.extend;
  var utils_21 = utils.trim;

  var utils$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    isArray: utils_1,
    isArrayBuffer: utils_2,
    isBuffer: utils_3,
    isFormData: utils_4,
    isArrayBufferView: utils_5,
    isString: utils_6,
    isNumber: utils_7,
    isObject: utils_8,
    isUndefined: utils_9,
    isDate: utils_10,
    isFile: utils_11,
    isBlob: utils_12,
    isFunction: utils_13,
    isStream: utils_14,
    isURLSearchParams: utils_15,
    isStandardBrowserEnv: utils_16,
    forEach: utils_17,
    merge: utils_18,
    deepMerge: utils_19,
    extend: utils_20,
    trim: utils_21
  });

  function encode(val) {
    return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
  }
  /**
   * Build a URL by appending params to the end
   *
   * @param {string} url The base of the url (e.g., http://www.google.com)
   * @param {object} [params] The params to be appended
   * @returns {string} The formatted url
   */


  var buildURL = function buildURL(url, params, paramsSerializer) {
    /*eslint no-param-reassign:0*/
    if (!params) {
      return url;
    }

    var serializedParams;

    if (paramsSerializer) {
      serializedParams = paramsSerializer(params);
    } else if (utils$1.isURLSearchParams(params)) {
      serializedParams = params.toString();
    } else {
      var parts = [];
      utils$1.forEach(params, function serialize(val, key) {
        if (val === null || typeof val === 'undefined') {
          return;
        }

        if (utils$1.isArray(val)) {
          key = key + '[]';
        } else {
          val = [val];
        }

        utils$1.forEach(val, function parseValue(v) {
          if (utils$1.isDate(v)) {
            v = v.toISOString();
          } else if (utils$1.isObject(v)) {
            v = JSON.stringify(v);
          }

          parts.push(encode(key) + '=' + encode(v));
        });
      });
      serializedParams = parts.join('&');
    }

    if (serializedParams) {
      var hashmarkIndex = url.indexOf('#');

      if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
      }

      url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }

    return url;
  };

  function InterceptorManager() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */


  InterceptorManager.prototype.use = function use(fulfilled, rejected) {
    this.handlers.push({
      fulfilled: fulfilled,
      rejected: rejected
    });
    return this.handlers.length - 1;
  };
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   */


  InterceptorManager.prototype.eject = function eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  };
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   */


  InterceptorManager.prototype.forEach = function forEach(fn) {
    utils$1.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  };

  var InterceptorManager_1 = InterceptorManager;

  /**
   * Transform the data for a request or a response
   *
   * @param {Object|String} data The data to be transformed
   * @param {Array} headers The headers for the request or response
   * @param {Array|Function} fns A single function or Array of functions
   * @returns {*} The resulting transformed data
   */


  var transformData = function transformData(data, headers, fns) {
    /*eslint no-param-reassign:0*/
    utils$1.forEach(fns, function transform(fn) {
      data = fn(data, headers);
    });
    return data;
  };

  var isCancel = function isCancel(value) {
    return !!(value && value.__CANCEL__);
  };

  var normalizeHeaderName = function normalizeHeaderName(headers, normalizedName) {
    utils$1.forEach(headers, function processHeader(value, name) {
      if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
        headers[normalizedName] = value;
        delete headers[name];
      }
    });
  };

  /**
   * Update an Error with the specified config, error code, and response.
   *
   * @param {Error} error The error to update.
   * @param {Object} config The config.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   * @returns {Error} The error.
   */

  var enhanceError = function enhanceError(error, config, code, request, response) {
    error.config = config;

    if (code) {
      error.code = code;
    }

    error.request = request;
    error.response = response;
    error.isAxiosError = true;

    error.toJSON = function () {
      return {
        // Standard
        message: this.message,
        name: this.name,
        // Microsoft
        description: this.description,
        number: this.number,
        // Mozilla
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        // Axios
        config: this.config,
        code: this.code
      };
    };

    return error;
  };

  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {Object} config The config.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   * @returns {Error} The created error.
   */


  var createError = function createError(message, config, code, request, response) {
    var error = new Error(message);
    return enhanceError(error, config, code, request, response);
  };

  /**
   * Resolve or reject a Promise based on response status.
   *
   * @param {Function} resolve A function that resolves the promise.
   * @param {Function} reject A function that rejects the promise.
   * @param {object} response The response.
   */


  var settle = function settle(resolve, reject, response) {
    var validateStatus = response.config.validateStatus;

    if (!validateStatus || validateStatus(response.status)) {
      resolve(response);
    } else {
      reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
    }
  };

  /**
   * Determines whether the specified URL is absolute
   *
   * @param {string} url The URL to test
   * @returns {boolean} True if the specified URL is absolute, otherwise false
   */

  var isAbsoluteURL = function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
  };

  /**
   * Creates a new URL by combining the specified URLs
   *
   * @param {string} baseURL The base URL
   * @param {string} relativeURL The relative URL
   * @returns {string} The combined URL
   */

  var combineURLs = function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
  };

  /**
   * Creates a new URL by combining the baseURL with the requestedURL,
   * only when the requestedURL is not already an absolute URL.
   * If the requestURL is absolute, this function returns the requestedURL untouched.
   *
   * @param {string} baseURL The base URL
   * @param {string} requestedURL Absolute or relative URL to combine
   * @returns {string} The combined full path
   */


  var buildFullPath = function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
      return combineURLs(baseURL, requestedURL);
    }

    return requestedURL;
  };

  // Headers whose duplicates are ignored by node
  // c.f. https://nodejs.org/api/http.html#http_message_headers


  var ignoreDuplicateOf = ['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent'];
  /**
   * Parse headers into an object
   *
   * ```
   * Date: Wed, 27 Aug 2014 08:58:49 GMT
   * Content-Type: application/json
   * Connection: keep-alive
   * Transfer-Encoding: chunked
   * ```
   *
   * @param {String} headers Headers needing to be parsed
   * @returns {Object} Headers parsed into an object
   */

  var parseHeaders = function parseHeaders(headers) {
    var parsed = {};
    var key;
    var val;
    var i;

    if (!headers) {
      return parsed;
    }

    utils$1.forEach(headers.split('\n'), function parser(line) {
      i = line.indexOf(':');
      key = utils$1.trim(line.substr(0, i)).toLowerCase();
      val = utils$1.trim(line.substr(i + 1));

      if (key) {
        if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
          return;
        }

        if (key === 'set-cookie') {
          parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
        } else {
          parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
        }
      }
    });
    return parsed;
  };

  var isURLSameOrigin = utils$1.isStandardBrowserEnv() ? // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;
    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */

    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href); // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils

      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);
    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */

    return function isURLSameOrigin(requestURL) {
      var parsed = utils$1.isString(requestURL) ? resolveURL(requestURL) : requestURL;
      return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
  }() : // Non standard browser envs (web workers, react-native) lack needed support.
  function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  }();

  var cookies = utils$1.isStandardBrowserEnv() ? // Standard browser envs support document.cookie
  function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils$1.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils$1.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils$1.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },
      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return match ? decodeURIComponent(match[3]) : null;
      },
      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  }() : // Non standard browser env (web workers, react-native) lack needed support.
  function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() {
        return null;
      },
      remove: function remove() {}
    };
  }();

  var xhr = function xhrAdapter(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
      var requestData = config.data;
      var requestHeaders = config.headers;

      if (utils$1.isFormData(requestData)) {
        delete requestHeaders['Content-Type']; // Let the browser set it
      }

      var request = new XMLHttpRequest(); // HTTP basic authentication

      if (config.auth) {
        var username = config.auth.username || '';
        var password = config.auth.password || '';
        requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
      }

      var fullPath = buildFullPath(config.baseURL, config.url);
      request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true); // Set the request timeout in MS

      request.timeout = config.timeout; // Listen for ready state

      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        } // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request


        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        } // Prepare the response


        var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
        var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
        var response = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: responseHeaders,
          config: config,
          request: request
        };
        settle(resolve, reject, response); // Clean up request

        request = null;
      }; // Handle browser request cancellation (as opposed to a manual cancellation)


      request.onabort = function handleAbort() {
        if (!request) {
          return;
        }

        reject(createError('Request aborted', config, 'ECONNABORTED', request)); // Clean up request

        request = null;
      }; // Handle low level network errors


      request.onerror = function handleError() {
        // Real errors are hidden from us by the browser
        // onerror should only fire if it's a network error
        reject(createError('Network Error', config, null, request)); // Clean up request

        request = null;
      }; // Handle timeout


      request.ontimeout = function handleTimeout() {
        var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';

        if (config.timeoutErrorMessage) {
          timeoutErrorMessage = config.timeoutErrorMessage;
        }

        reject(createError(timeoutErrorMessage, config, 'ECONNABORTED', request)); // Clean up request

        request = null;
      }; // Add xsrf header
      // This is only done if running in a standard browser environment.
      // Specifically not if we're in a web worker, or react-native.


      if (utils$1.isStandardBrowserEnv()) {
        var cookies$1 = cookies; // Add xsrf header


        var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies$1.read(config.xsrfCookieName) : undefined;

        if (xsrfValue) {
          requestHeaders[config.xsrfHeaderName] = xsrfValue;
        }
      } // Add headers to the request


      if ('setRequestHeader' in request) {
        utils$1.forEach(requestHeaders, function setRequestHeader(val, key) {
          if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
            // Remove Content-Type if data is undefined
            delete requestHeaders[key];
          } else {
            // Otherwise add header to the request
            request.setRequestHeader(key, val);
          }
        });
      } // Add withCredentials to request if needed


      if (!utils$1.isUndefined(config.withCredentials)) {
        request.withCredentials = !!config.withCredentials;
      } // Add responseType to request if needed


      if (config.responseType) {
        try {
          request.responseType = config.responseType;
        } catch (e) {
          // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
          // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
          if (config.responseType !== 'json') {
            throw e;
          }
        }
      } // Handle progress if needed


      if (typeof config.onDownloadProgress === 'function') {
        request.addEventListener('progress', config.onDownloadProgress);
      } // Not all browsers support upload events


      if (typeof config.onUploadProgress === 'function' && request.upload) {
        request.upload.addEventListener('progress', config.onUploadProgress);
      }

      if (config.cancelToken) {
        // Handle cancellation
        config.cancelToken.promise.then(function onCanceled(cancel) {
          if (!request) {
            return;
          }

          request.abort();
          reject(cancel); // Clean up request

          request = null;
        });
      }

      if (requestData === undefined) {
        requestData = null;
      } // Send the request


      request.send(requestData);
    });
  };

  var DEFAULT_CONTENT_TYPE = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };

  function setContentTypeIfUnset(headers, value) {
    if (!utils$1.isUndefined(headers) && utils$1.isUndefined(headers['Content-Type'])) {
      headers['Content-Type'] = value;
    }
  }

  function getDefaultAdapter() {
    var adapter;

    if (typeof XMLHttpRequest !== 'undefined') {
      // For browsers use XHR adapter
      adapter = xhr;
    } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
      // For node use HTTP adapter
      adapter = xhr;
    }

    return adapter;
  }

  var defaults = {
    adapter: getDefaultAdapter(),
    transformRequest: [function transformRequest(data, headers) {
      normalizeHeaderName(headers, 'Accept');
      normalizeHeaderName(headers, 'Content-Type');

      if (utils$1.isFormData(data) || utils$1.isArrayBuffer(data) || utils$1.isBuffer(data) || utils$1.isStream(data) || utils$1.isFile(data) || utils$1.isBlob(data)) {
        return data;
      }

      if (utils$1.isArrayBufferView(data)) {
        return data.buffer;
      }

      if (utils$1.isURLSearchParams(data)) {
        setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
        return data.toString();
      }

      if (utils$1.isObject(data)) {
        setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
        return JSON.stringify(data);
      }

      return data;
    }],
    transformResponse: [function transformResponse(data) {
      /*eslint no-param-reassign:0*/
      if (typeof data === 'string') {
        try {
          data = JSON.parse(data);
        } catch (e) {
          /* Ignore */
        }
      }

      return data;
    }],

    /**
     * A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     */
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    }
  };
  defaults.headers = {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  };
  utils$1.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
    defaults.headers[method] = {};
  });
  utils$1.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
    defaults.headers[method] = utils$1.merge(DEFAULT_CONTENT_TYPE);
  });
  var defaults_1 = defaults;

  /**
   * Throws a `Cancel` if cancellation has been requested.
   */


  function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
      config.cancelToken.throwIfRequested();
    }
  }
  /**
   * Dispatch a request to the server using the configured adapter.
   *
   * @param {object} config The config that is to be used for the request
   * @returns {Promise} The Promise to be fulfilled
   */


  var dispatchRequest = function dispatchRequest(config) {
    throwIfCancellationRequested(config); // Ensure headers exist

    config.headers = config.headers || {}; // Transform request data

    config.data = transformData(config.data, config.headers, config.transformRequest); // Flatten headers

    config.headers = utils$1.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
    utils$1.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
      delete config.headers[method];
    });
    var adapter = config.adapter || defaults_1.adapter;
    return adapter(config).then(function onAdapterResolution(response) {
      throwIfCancellationRequested(config); // Transform response data

      response.data = transformData(response.data, response.headers, config.transformResponse);
      return response;
    }, function onAdapterRejection(reason) {
      if (!isCancel(reason)) {
        throwIfCancellationRequested(config); // Transform response data

        if (reason && reason.response) {
          reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
        }
      }

      return Promise.reject(reason);
    });
  };

  /**
   * Config-specific merge-function which creates a new config-object
   * by merging two configuration objects together.
   *
   * @param {Object} config1
   * @param {Object} config2
   * @returns {Object} New object resulting from merging config2 to config1
   */


  var mergeConfig = function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    var config = {};
    var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
    var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
    var defaultToConfig2Keys = ['baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer', 'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName', 'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken', 'socketPath'];
    utils$1.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
      if (typeof config2[prop] !== 'undefined') {
        config[prop] = config2[prop];
      }
    });
    utils$1.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
      if (utils$1.isObject(config2[prop])) {
        config[prop] = utils$1.deepMerge(config1[prop], config2[prop]);
      } else if (typeof config2[prop] !== 'undefined') {
        config[prop] = config2[prop];
      } else if (utils$1.isObject(config1[prop])) {
        config[prop] = utils$1.deepMerge(config1[prop]);
      } else if (typeof config1[prop] !== 'undefined') {
        config[prop] = config1[prop];
      }
    });
    utils$1.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
      if (typeof config2[prop] !== 'undefined') {
        config[prop] = config2[prop];
      } else if (typeof config1[prop] !== 'undefined') {
        config[prop] = config1[prop];
      }
    });
    var axiosKeys = valueFromConfig2Keys.concat(mergeDeepPropertiesKeys).concat(defaultToConfig2Keys);
    var otherKeys = Object.keys(config2).filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });
    utils$1.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
      if (typeof config2[prop] !== 'undefined') {
        config[prop] = config2[prop];
      } else if (typeof config1[prop] !== 'undefined') {
        config[prop] = config1[prop];
      }
    });
    return config;
  };

  /**
   * Create a new instance of Axios
   *
   * @param {Object} instanceConfig The default config for the instance
   */


  function Axios(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager_1(),
      response: new InterceptorManager_1()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {Object} config The config specific for this request (merged with this.defaults)
   */


  Axios.prototype.request = function request(config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof config === 'string') {
      config = arguments[1] || {};
      config.url = arguments[0];
    } else {
      config = config || {};
    }

    config = mergeConfig(this.defaults, config); // Set config.method

    if (config.method) {
      config.method = config.method.toLowerCase();
    } else if (this.defaults.method) {
      config.method = this.defaults.method.toLowerCase();
    } else {
      config.method = 'get';
    } // Hook up interceptors middleware


    var chain = [dispatchRequest, undefined];
    var promise = Promise.resolve(config);
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      chain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      chain.push(interceptor.fulfilled, interceptor.rejected);
    });

    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  };

  Axios.prototype.getUri = function getUri(config) {
    config = mergeConfig(this.defaults, config);
    return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
  }; // Provide aliases for supported request methods


  utils$1.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
    /*eslint func-names:0*/
    Axios.prototype[method] = function (url, config) {
      return this.request(utils$1.merge(config || {}, {
        method: method,
        url: url
      }));
    };
  });
  utils$1.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
    /*eslint func-names:0*/
    Axios.prototype[method] = function (url, data, config) {
      return this.request(utils$1.merge(config || {}, {
        method: method,
        url: url,
        data: data
      }));
    };
  });
  var Axios_1 = Axios;

  /**
   * A `Cancel` is an object that is thrown when an operation is canceled.
   *
   * @class
   * @param {string=} message The message.
   */

  function Cancel(message) {
    this.message = message;
  }

  Cancel.prototype.toString = function toString() {
    return 'Cancel' + (this.message ? ': ' + this.message : '');
  };

  Cancel.prototype.__CANCEL__ = true;
  var Cancel_1 = Cancel;

  /**
   * A `CancelToken` is an object that can be used to request cancellation of an operation.
   *
   * @class
   * @param {Function} executor The executor function.
   */


  function CancelToken(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    var resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
    var token = this;
    executor(function cancel(message) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }

      token.reason = new Cancel_1(message);
      resolvePromise(token.reason);
    });
  }
  /**
   * Throws a `Cancel` if cancellation has been requested.
   */


  CancelToken.prototype.throwIfRequested = function throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  };
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */


  CancelToken.source = function source() {
    var cancel;
    var token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token: token,
      cancel: cancel
    };
  };

  var CancelToken_1 = CancelToken;

  /**
   * Syntactic sugar for invoking a function and expanding an array for arguments.
   *
   * Common use case would be to use `Function.prototype.apply`.
   *
   *  ```js
   *  function f(x, y, z) {}
   *  var args = [1, 2, 3];
   *  f.apply(null, args);
   *  ```
   *
   * With `spread` this example can be re-written.
   *
   *  ```js
   *  spread(function(x, y, z) {})([1, 2, 3]);
   *  ```
   *
   * @param {Function} callback
   * @returns {Function}
   */

  var spread = function spread(callback) {
    return function wrap(arr) {
      return callback.apply(null, arr);
    };
  };

  var axios_1 = createCommonjsModule(function (module) {










  /**
   * Create an instance of Axios
   *
   * @param {Object} defaultConfig The default config for the instance
   * @return {Axios} A new instance of Axios
   */


  function createInstance(defaultConfig) {
    var context = new Axios_1(defaultConfig);
    var instance = bind(Axios_1.prototype.request, context); // Copy axios.prototype to instance

    utils$1.extend(instance, Axios_1.prototype, context); // Copy context to instance

    utils$1.extend(instance, context);
    return instance;
  } // Create the default instance to be exported


  var axios = createInstance(defaults_1); // Expose Axios class to allow class inheritance

  axios.Axios = Axios_1; // Factory for creating new instances

  axios.create = function create(instanceConfig) {
    return createInstance(mergeConfig(axios.defaults, instanceConfig));
  }; // Expose Cancel & CancelToken


  axios.Cancel = Cancel_1;
  axios.CancelToken = CancelToken_1;
  axios.isCancel = isCancel; // Expose all/spread

  axios.all = function all(promises) {
    return Promise.all(promises);
  };

  axios.spread = spread;
  module.exports = axios; // Allow use of default import syntax in TypeScript

  module.exports["default"] = axios;
  });

  var axios = axios_1;

  var has = Object.prototype.hasOwnProperty;
  var isArray$1 = Array.isArray;

  var hexTable = function () {
    var array = [];

    for (var i = 0; i < 256; ++i) {
      array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
  }();

  var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
      var item = queue.pop();
      var obj = item.obj[item.prop];

      if (isArray$1(obj)) {
        var compacted = [];

        for (var j = 0; j < obj.length; ++j) {
          if (typeof obj[j] !== 'undefined') {
            compacted.push(obj[j]);
          }
        }

        item.obj[item.prop] = compacted;
      }
    }
  };

  var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};

    for (var i = 0; i < source.length; ++i) {
      if (typeof source[i] !== 'undefined') {
        obj[i] = source[i];
      }
    }

    return obj;
  };

  var merge$1 = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */
    if (!source) {
      return target;
    }

    if (_typeof(source) !== 'object') {
      if (isArray$1(target)) {
        target.push(source);
      } else if (target && _typeof(target) === 'object') {
        if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) {
          target[source] = true;
        }
      } else {
        return [target, source];
      }

      return target;
    }

    if (!target || _typeof(target) !== 'object') {
      return [target].concat(source);
    }

    var mergeTarget = target;

    if (isArray$1(target) && !isArray$1(source)) {
      mergeTarget = arrayToObject(target, options);
    }

    if (isArray$1(target) && isArray$1(source)) {
      source.forEach(function (item, i) {
        if (has.call(target, i)) {
          var targetItem = target[i];

          if (targetItem && _typeof(targetItem) === 'object' && item && _typeof(item) === 'object') {
            target[i] = merge(targetItem, item, options);
          } else {
            target.push(item);
          }
        } else {
          target[i] = item;
        }
      });
      return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
      var value = source[key];

      if (has.call(acc, key)) {
        acc[key] = merge(acc[key], value, options);
      } else {
        acc[key] = value;
      }

      return acc;
    }, mergeTarget);
  };

  var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
      acc[key] = source[key];
      return acc;
    }, target);
  };

  var decode = function decode(str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');

    if (charset === 'iso-8859-1') {
      // unescape never throws, no try...catch needed:
      return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    } // utf-8


    try {
      return decodeURIComponent(strWithoutPlus);
    } catch (e) {
      return strWithoutPlus;
    }
  };

  var encode$1 = function encode(str, defaultEncoder, charset) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
      return str;
    }

    var string = str;

    if (_typeof(str) === 'symbol') {
      string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
      string = String(str);
    }

    if (charset === 'iso-8859-1') {
      return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
        return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
      });
    }

    var out = '';

    for (var i = 0; i < string.length; ++i) {
      var c = string.charCodeAt(i);

      if (c === 0x2D // -
      || c === 0x2E // .
      || c === 0x5F // _
      || c === 0x7E // ~
      || c >= 0x30 && c <= 0x39 // 0-9
      || c >= 0x41 && c <= 0x5A // a-z
      || c >= 0x61 && c <= 0x7A // A-Z
      ) {
          out += string.charAt(i);
          continue;
        }

      if (c < 0x80) {
        out = out + hexTable[c];
        continue;
      }

      if (c < 0x800) {
        out = out + (hexTable[0xC0 | c >> 6] + hexTable[0x80 | c & 0x3F]);
        continue;
      }

      if (c < 0xD800 || c >= 0xE000) {
        out = out + (hexTable[0xE0 | c >> 12] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | c & 0x3F]);
        continue;
      }

      i += 1;
      c = 0x10000 + ((c & 0x3FF) << 10 | string.charCodeAt(i) & 0x3FF);
      out += hexTable[0xF0 | c >> 18] + hexTable[0x80 | c >> 12 & 0x3F] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | c & 0x3F];
    }

    return out;
  };

  var compact = function compact(value) {
    var queue = [{
      obj: {
        o: value
      },
      prop: 'o'
    }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
      var item = queue[i];
      var obj = item.obj[item.prop];
      var keys = Object.keys(obj);

      for (var j = 0; j < keys.length; ++j) {
        var key = keys[j];
        var val = obj[key];

        if (_typeof(val) === 'object' && val !== null && refs.indexOf(val) === -1) {
          queue.push({
            obj: obj,
            prop: key
          });
          refs.push(val);
        }
      }
    }

    compactQueue(queue);
    return value;
  };

  var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
  };

  var isBuffer$1 = function isBuffer(obj) {
    if (!obj || _typeof(obj) !== 'object') {
      return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
  };

  var combine = function combine(a, b) {
    return [].concat(a, b);
  };

  var utils$2 = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode$1,
    isBuffer: isBuffer$1,
    isRegExp: isRegExp,
    merge: merge$1
  };

  var utils_1$1 = utils$2.arrayToObject;
  var utils_2$1 = utils$2.assign;
  var utils_3$1 = utils$2.combine;
  var utils_4$1 = utils$2.compact;
  var utils_5$1 = utils$2.decode;
  var utils_6$1 = utils$2.encode;
  var utils_7$1 = utils$2.isBuffer;
  var utils_8$1 = utils$2.isRegExp;
  var utils_9$1 = utils$2.merge;

  var utils$3 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    arrayToObject: utils_1$1,
    assign: utils_2$1,
    combine: utils_3$1,
    compact: utils_4$1,
    decode: utils_5$1,
    encode: utils_6$1,
    isBuffer: utils_7$1,
    isRegExp: utils_8$1,
    merge: utils_9$1
  });

  var replace = String.prototype.replace;
  var percentTwenties = /%20/g;



  var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
  };
  var formats = utils$3.assign({
    'default': Format.RFC3986,
    formatters: {
      RFC1738: function RFC1738(value) {
        return replace.call(value, percentTwenties, '+');
      },
      RFC3986: function RFC3986(value) {
        return String(value);
      }
    }
  }, Format);

  var toISO = Date.prototype.toISOString;
  var defaultFormat = formats['default'];
  var defaults$1 = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils$3.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
      return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
  };

  var stringify = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var has$1 = Object.prototype.hasOwnProperty;
  var isArray$2 = Array.isArray;
  var defaults$2 = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils$3.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
  };

  var interpretNumericEntities = function interpretNumericEntities(str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
      return String.fromCharCode(parseInt(numberStr, 10));
    });
  };

  var parseArrayValue = function parseArrayValue(val, options) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
      return val.split(',');
    }

    return val;
  };

  var maybeMap = function maybeMap(val, fn) {
    if (isArray$2(val)) {
      var mapped = [];

      for (var i = 0; i < val.length; i += 1) {
        mapped.push(fn(val[i]));
      }

      return mapped;
    }

    return fn(val);
  }; // This is what browsers will submit when the ✓ character occurs in an
  // application/x-www-form-urlencoded body and the encoding of the page containing
  // the form is iso-8859-1, or when the submitted form has an accept-charset
  // attribute of iso-8859-1. Presumably also with other charsets that do not contain
  // the ✓ character, such as us-ascii.


  var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')
  // These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.

  var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

  var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found

    var i;
    var charset = options.charset;

    if (options.charsetSentinel) {
      for (i = 0; i < parts.length; ++i) {
        if (parts[i].indexOf('utf8=') === 0) {
          if (parts[i] === charsetSentinel) {
            charset = 'utf-8';
          } else if (parts[i] === isoSentinel) {
            charset = 'iso-8859-1';
          }

          skipIndex = i;
          i = parts.length; // The eslint settings do not allow break;
        }
      }
    }

    for (i = 0; i < parts.length; ++i) {
      if (i === skipIndex) {
        continue;
      }

      var part = parts[i];
      var bracketEqualsPos = part.indexOf(']=');
      var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;
      var key, val;

      if (pos === -1) {
        key = options.decoder(part, defaults$2.decoder, charset, 'key');
        val = options.strictNullHandling ? null : '';
      } else {
        key = options.decoder(part.slice(0, pos), defaults$2.decoder, charset, 'key');
        val = maybeMap(parseArrayValue(part.slice(pos + 1), options), function (encodedVal) {
          return options.decoder(encodedVal, defaults$2.decoder, charset, 'value');
        });
      }

      if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
        val = interpretNumericEntities(val);
      }

      if (part.indexOf('[]=') > -1) {
        val = isArray$2(val) ? [val] : val;
      }

      if (has$1.call(obj, key)) {
        obj[key] = utils$3.combine(obj[key], val);
      } else {
        obj[key] = val;
      }
    }

    return obj;
  };

  var parseObject = function parseObject(chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);

    for (var i = chain.length - 1; i >= 0; --i) {
      var obj;
      var root = chain[i];

      if (root === '[]' && options.parseArrays) {
        obj = [].concat(leaf);
      } else {
        obj = options.plainObjects ? Object.create(null) : {};
        var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
        var index = parseInt(cleanRoot, 10);

        if (!options.parseArrays && cleanRoot === '') {
          obj = {
            0: leaf
          };
        } else if (!isNaN(index) && root !== cleanRoot && String(index) === cleanRoot && index >= 0 && options.parseArrays && index <= options.arrayLimit) {
          obj = [];
          obj[index] = leaf;
        } else {
          obj[cleanRoot] = leaf;
        }
      }

      leaf = obj; // eslint-disable-line no-param-reassign
    }

    return leaf;
  };

  var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
      return;
    } // Transform dot notation to bracket notation


    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey; // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g; // Get the parent

    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key; // Stash the parent if it exists

    var keys = [];

    if (parent) {
      // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
      if (!options.plainObjects && has$1.call(Object.prototype, parent)) {
        if (!options.allowPrototypes) {
          return;
        }
      }

      keys.push(parent);
    } // Loop through children appending to the array until we hit depth


    var i = 0;

    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
      i += 1;

      if (!options.plainObjects && has$1.call(Object.prototype, segment[1].slice(1, -1))) {
        if (!options.allowPrototypes) {
          return;
        }
      }

      keys.push(segment[1]);
    } // If there's a remainder, just add whatever is left


    if (segment) {
      keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options, valuesParsed);
  };

  var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
      return defaults$2;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
      throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
      throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var charset = typeof opts.charset === 'undefined' ? defaults$2.charset : opts.charset;
    return {
      allowDots: typeof opts.allowDots === 'undefined' ? defaults$2.allowDots : !!opts.allowDots,
      allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults$2.allowPrototypes,
      arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults$2.arrayLimit,
      charset: charset,
      charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults$2.charsetSentinel,
      comma: typeof opts.comma === 'boolean' ? opts.comma : defaults$2.comma,
      decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults$2.decoder,
      delimiter: typeof opts.delimiter === 'string' || utils$3.isRegExp(opts.delimiter) ? opts.delimiter : defaults$2.delimiter,
      // eslint-disable-next-line no-implicit-coercion, no-extra-parens
      depth: typeof opts.depth === 'number' || opts.depth === false ? +opts.depth : defaults$2.depth,
      ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
      interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults$2.interpretNumericEntities,
      parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults$2.parameterLimit,
      parseArrays: opts.parseArrays !== false,
      plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults$2.plainObjects,
      strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults$2.strictNullHandling
    };
  };

  var parse = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
      return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {}; // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];
      var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
      obj = utils$3.merge(obj, newObj, options);
    }

    return utils$3.compact(obj);
  };

  var lib = {
    formats: formats,
    parse: parse,
    stringify: stringify
  };

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
                transformedData = lib.stringify(data);
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
