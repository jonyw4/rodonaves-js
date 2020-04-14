# API Reference


- [API Reference](#api-reference)
    - [new RodonavesFetchServerError(status)](#new-rodonavesfetchservererrorstatus)
    - [new RodonavesFetchClientError()](#new-rodonavesfetchclienterror)
    - [new RodonavesFetchOtherError()](#new-rodonavesfetchothererror)
    - [rodonaves-js.Rodonaves](#rodonaves-jsrodonaves)
      - [new Rodonaves(username, password, mode, timeout)](#new-rodonavesusername-password-mode-timeout)
      - [Rodonaves.auth()](#rodonavesauth)
      - [Rodonaves.fetch(url, method, params, data)](#rodonavesfetchurl-method-params-data)
      - [Rodonaves.getCityByZipCode(zipCode)](#rodonavesgetcitybyzipcodezipcode)


### new RodonavesFetchServerError(status)

Creates an instance of RodonavesFetchServerError.


| Param | Type | Description |
| --- | --- | --- |
| status | `string` | Status Code passed from the server |


### new RodonavesFetchClientError()

Creates an instance of RodonavesFetchClientError.


### new RodonavesFetchOtherError()

Creates an instance of RodonavesFetchOtherError.


### rodonaves-js.Rodonaves

**Kind**: instance class of [`rodonaves-js`](#rodonaves-js)  
**Todo**

- [ ] Create function `getCityByName(name)` using *GET* `/api/v1/busca-cidade?name=''`


- [API Reference](#api-reference)
    - [new RodonavesFetchServerError(status)](#new-rodonavesfetchservererrorstatus)
    - [new RodonavesFetchClientError()](#new-rodonavesfetchclienterror)
    - [new RodonavesFetchOtherError()](#new-rodonavesfetchothererror)
    - [rodonaves-js.Rodonaves](#rodonaves-jsrodonaves)
      - [new Rodonaves(username, password, mode, timeout)](#new-rodonavesusername-password-mode-timeout)
      - [Rodonaves.auth()](#rodonavesauth)
      - [Rodonaves.fetch(url, method, params, data)](#rodonavesfetchurl-method-params-data)
      - [Rodonaves.getCityByZipCode(zipCode)](#rodonavesgetcitybyzipcodezipcode)


#### new Rodonaves(username, password, mode, timeout)


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| username | `string` |  | Rodonaves username for Auth |
| password | `string` |  | Rodonaves password for Auth |
| mode | `string` | `'dev'` | Mode of the request. Can be `dev` or `prod` |
| timeout | `number` | `1000` | Timeout of the request in *ms* |


#### Rodonaves.auth()

**FOR INTERNAL USE** - 🔑 Get token. Used for other functions to put token in header

**Kind**: static method of [`Rodonaves`](#new-rodonavesusername-password-mode-timeout)  
**Returns**: `Promise.<boolean, (Error)>` - True response credentials are ok, or an error if rejected.  

#### Rodonaves.fetch(url, method, params, data)

**FOR INTERNAL USE** - 📨 Fetch in the RTE API

**Kind**: static method of [`Rodonaves`](#new-rodonavesusername-password-mode-timeout)  
**Returns**: `Promise.<any, (Error)>` - Data response of the fetch, or an error if rejected.  

| Param | Type | Description |
| --- | --- | --- |
| url | `string` | URL. Route to the fetch. can be `/test` |
| method | `string` | Method. Can be *GET*. *POST*... |
| params | `object` | Querystring params. Its most used in *GET* requests |
| data | `object` | Data. Use for *POST* requests |


#### Rodonaves.getCityByZipCode(zipCode)

🌆 Get City by Zip Code

**Kind**: static method of [`Rodonaves`](#new-rodonavesusername-password-mode-timeout)  
**Returns**: `Promise.<BuscaPorCepResponse, (Error)>` - Return a city data, or an error if rejected.  

| Param | Type | Description |
| --- | --- | --- |
| zipCode | `string` | ZipCode Just numbers |

