## Modules
Module | Description
------ | -----------
[rodonaves-js] | 

## Classes

Name | Description
------ | -----------
[AxiosTestError] | 

## Typedefs

Name | Description
------ | -----------
[RodonavesGetCityByZipCodeResponse] | 
[RodonavesSimulateQuoteResponse] | 
[RodonavesPack] | 


## rodonaves-js


* [rodonaves-js]
    * [new RodonavesFetchServerError(status)]
    * [new RodonavesFetchClientError()]
    * [new RodonavesFetchOtherError()]
    * [.Rodonaves]
        * [new Rodonaves(username, password, mode, timeout)]
        * [~auth()]
        * [~fetch(url, method, params, data, contentType)]
        * [~getCityByZipCode(zipCode)]
        * [~getDeliveryTime(originZipCode, destinationZipCode)]
        * [~simulateQuote(originZipCode, destinationZipCode, packs, invoiceValue, destinationTaxId)]


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

**Kind**: instance class of [`rodonaves-js`]  
**Todo**

- [ ] Create function `getCityByName(name)`
- [ ] Create function `tracking(name)`
- [ ] Create function `quote()`
Create function `updateQuote()`


* [.Rodonaves]
    * [new Rodonaves(username, password, mode, timeout)]
    * [~auth()]
    * [~fetch(url, method, params, data, contentType)]
    * [~getCityByZipCode(zipCode)]
    * [~getDeliveryTime(originZipCode, destinationZipCode)]
    * [~simulateQuote(originZipCode, destinationZipCode, packs, invoiceValue, destinationTaxId)]


#### new Rodonaves(username, password, mode, timeout)


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| username | `string` |  | Rodonaves username for Auth |
| password | `string` |  | Rodonaves password for Auth |
| mode | `string` | `'dev'` | Mode of the request. Can be `dev` or `prod` |
| timeout | `number` | `1000` | Timeout of the request in *ms* |


#### Rodonaves~auth()

**FOR INTERNAL USE** - 🔑 Get token. Used for other functions to put token in header

**Kind**: inner method of [`Rodonaves`]  
**Returns**: `Promise.<boolean, (Error)>` - True response credentials are ok, or an error if rejected.  

#### Rodonaves~fetch(url, method, params, data, contentType)

**FOR INTERNAL USE** - 📨 Fetch in the RTE API

**Kind**: inner method of [`Rodonaves`]  
**Returns**: `Promise.<any, (Error)>` - Data response of the fetch, or an error if rejected.  

| Param | Type | Description |
| --- | --- | --- |
| url | `string` | URL. Route to the fetch. can be `/test` |
| method | `string` | Method. Can be *GET*. *POST*... |
| params | `object` | Querystring params. Its most used in *GET* requests |
| data | `object` | Data. Use for *POST* requests |
| contentType |  |  |


#### Rodonaves~getCityByZipCode(zipCode)

🌆 Get City by Zip Code

**Kind**: inner method of [`Rodonaves`]  
**Returns**: `Promise.<RodonavesGetCityByZipCodeResponse, (Error)>` - Return a city data, or an error if rejected.  

| Param | Type | Description |
| --- | --- | --- |
| zipCode | `string` | ZipCode Just numbers |


#### Rodonaves~getDeliveryTime(originZipCode, destinationZipCode)

📅 Get Delivery Time

**Kind**: inner method of [`Rodonaves`]  
**Returns**: `Promise.<number, (Error)>` - Return a delivery time, or an error if rejected.  

| Param | Type | Description |
| --- | --- | --- |
| originZipCode | `string` | Origin ZipCode |
| destinationZipCode | `string` | Destination ZipCode |


#### Rodonaves~simulateQuote(originZipCode, destinationZipCode, packs, invoiceValue, destinationTaxId)

💵 Get Quote for Shipping

**Kind**: inner method of [`Rodonaves`]  
**Returns**: `Promise.<RodonavesSimulateQuoteResponse, (Error)>` - Return the simulate quote data, or an error if rejected.  

| Param | Type | Description |
| --- | --- | --- |
| originZipCode | `string` | Origin ZipCode |
| destinationZipCode | `string` | Destination ZipCode |
| packs | `Array.<RodonavesPack>` | A list of boxes for shipping |
| invoiceValue | `number` | Total money value of the items in shipment |
| destinationTaxId | `number` | CPF/CNPJ of the destination |


## AxiosTestError

**Kind**: global class  
**Extends**: `Error`  

## RodonavesGetCityByZipCodeResponse

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| CityId | `number` | City Id |
| CityDescription | `string` | City name |
| UnitFederation.Description | `string` | State of the city |
| Street | `string` | Street |
| District | `string` | District |
| ZipCode | `number` | Zip Code |
| Number | `number` | Number |
| Supplement | `string` | Supplement |
| SitLoc | `number` | ? |
| SectorAttended | `boolean` | If sector is attended |
| CityAttended | `boolean` | If city is attended |
| NotAttendedMessage | `string` | Message to location not attended |


## RodonavesSimulateQuoteResponse

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| Value | `number` | Value |
| DeliveryTime | `number` | Delivery Time |
| ProtocolNumber | `number` | Protocol Number |
| CustomerEmail | `string` | Customer Email |
| Cubed | `boolean` | if is cubed |
| Message | `string` | Message |
| ExpirationDay | `string` | Expiration Day |


## RodonavesPack

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| weight | `number` | Weight (kg) |
| length | `number` | Length (cm) |
| height | `number` | Height (cm) |
| width | `number` | Width (cm) |

<!-- LINKS -->

[rodonaves-js]:#rodonaves-js
[AxiosTestError]:#axiostesterror
[RodonavesGetCityByZipCodeResponse]:#rodonavesgetcitybyzipcoderesponse
[RodonavesSimulateQuoteResponse]:#rodonavessimulatequoteresponse
[RodonavesPack]:#rodonavespack
[.Rodonaves]:#rodonaves-jsrodonaves
[`rodonaves-js`]:#rodonaves-js
[`Rodonaves`]:#new-rodonavesusername-password-mode-timeout
[new RodonavesFetchServerError(status)]:#new-rodonavesfetchservererrorstatus
[new RodonavesFetchClientError()]:#new-rodonavesfetchclienterror
[new RodonavesFetchOtherError()]:#new-rodonavesfetchothererror
[new Rodonaves(username, password, mode, timeout)]:#new-rodonavesusername-password-mode-timeout
[~auth()]:#rodonavesauth
[~fetch(url, method, params, data, contentType)]:#rodonavesfetchurl-method-params-data-contenttype
[~getCityByZipCode(zipCode)]:#rodonavesgetcitybyzipcodezipcode
[~getDeliveryTime(originZipCode, destinationZipCode)]:#rodonavesgetdeliverytimeoriginzipcode-destinationzipcode
[~simulateQuote(originZipCode, destinationZipCode, packs, invoiceValue, destinationTaxId)]:#rodonavessimulatequoteoriginzipcode-destinationzipcode-packs-invoicevalue-destinationtaxid
