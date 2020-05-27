# Rodonaves Client API - By CarimFlex

[![npm (scoped)](https://img.shields.io/npm/v/@carimflex/rodonaves-js.svg)](https://www.npmjs.com/package/@carimflex/rodonaves-js)
![Build Status](https://github.com/1carimflex/rodonaves-js/workflows/Test,%20build%20and%20deploy/badge.svg)
[![codecov](https://codecov.io/gh/1carimflex/rodonaves-js/branch/master/graph/badge.svg)](https://codecov.io/gh/1carimflex/rodonaves-js)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

A JavaScript library to interface with Rodonaves API, it works in the browser and with Node.js. The [documentation can be found here](https://jonyw4.github.io/rodonaves-js/).

### Do you like?
*Please, consider supporting my work as a lot of effort takes place to create this component! Thanks a lot.*

<a href="https://www.buymeacoffee.com/jonycelio" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-yellow.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>


### How to use

#### Browser using CDN (Rodonaves + Axios + QS)
```
<script src="//cdn.jsdelivr.net/combine/npm/axios@0.19.2/dist/axios.js,npm/qs@6.9.3/dist/qs.js,npm/@carimflex/rodonaves-js@1.0.0/dist/rodonaves-js-browser.js"></script>
```

#### npm

```
$ npm install --save @carimflex/rodonaves-js
```

## Example

```js
import Rodonaves from '@carimflex/rodonaves-js';

const rodonaves = new Rodonaves(
  'user',
  'password',
);
const response = await rodonaves.getCityByZipCode('12608220');
```

## API Docs

This library provides a promise based interface for all functions. Before you
can use the library, you need to provide authentication details which will be
used through API calls.

For a detailed documentation, see our [Documentation](https://jonyw4.github.io/rodonaves-js/).

## To do
- [x] Function `getCityByZipCode(zipCode)`
- [x] Function `getDeliveryTime(originZipCode, destinationZipCode)`  
- [x] Function `simulateQuote(originZipCode, destinationZipCode, packs, invoiceValue, destinationTaxId)`
- [ ] Function `getCityByName(name)`
- [ ] Function `tracking(name)`
- [ ] Function `quote()`
- [ ] Function `updateQuote()`
