# API Reference
Rodonaves API for node/javascript


* [rodonaves-js](#module_rodonaves-js)
    * [.Rodonaves](#module_rodonaves-js+Rodonaves)
        * [new Rodonaves(username, password, mode)](#new_module_rodonaves-js+Rodonaves_new)
        * [.fetch(url, method, params, data)](#module_rodonaves-js+Rodonaves.fetch) ⇒ <code>Promise.&lt;any&gt;</code>
        * [.getCityByZipCode(zipCode)](#module_rodonaves-js+Rodonaves.getCityByZipCode) ⇒ <code>Promise</code>

<a name="module_rodonaves-js+Rodonaves"></a>

### rodonaves.Rodonaves
Rodonaves API Class

**Kind**: instance class of [<code>rodonaves-js</code>](#module_rodonaves-js)  

* [.Rodonaves](#module_rodonaves-js+Rodonaves)
    * [new Rodonaves(username, password, mode)](#new_module_rodonaves-js+Rodonaves_new)
    * [.fetch(url, method, params, data)](#module_rodonaves-js+Rodonaves.fetch) ⇒ <code>Promise.&lt;any&gt;</code>
    * [.getCityByZipCode(zipCode)](#module_rodonaves-js+Rodonaves.getCityByZipCode) ⇒ <code>Promise</code>

<a name="new_module_rodonaves-js+Rodonaves_new"></a>

#### new Rodonaves(username, password, mode)

| Param | Type | Description |
| --- | --- | --- |
| username | <code>String</code> | Rodonaves username for Auth |
| password | <code>String</code> | Rodonaves password for Auth |
| mode | <code>String</code> | Mode of the request. Can be dev or prod |

<a name="module_rodonaves-js+Rodonaves.fetch"></a>

#### Rodonaves.fetch(url, method, params, data) ⇒ <code>Promise.&lt;any&gt;</code>
Fetch in the RTE API

**Kind**: static method of [<code>Rodonaves</code>](#module_rodonaves-js+Rodonaves)  
**Promise**: fPromise  
**Reject**: <code>RodonavesError</code>  
**Fulfill**: <code>any</code> API Response  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | URL |
| method | <code>String</code> | Method |
| params | <code>Object</code> | Querystring params |
| data | <code>Object</code> | Data |

<a name="module_rodonaves-js+Rodonaves.getCityByZipCode"></a>

#### Rodonaves.getCityByZipCode(zipCode) ⇒ <code>Promise</code>
Get City by Zip Code

**Kind**: static method of [<code>Rodonaves</code>](#module_rodonaves-js+Rodonaves)  
**Returns**: <code>Promise</code> - Promise object with data information  

| Param | Type | Description |
| --- | --- | --- |
| zipCode | <code>String</code> | ZipCode |


* * *