# API Reference

Rodonaves API for node/javascript

<a name="module_rodonaves-js+Rodonaves"></a>

### rodonaves.Rodonaves
Rodonaves API Class

**Kind**: instance class of [<code>rodonaves-js</code>](#module_rodonaves-js)  
**Todo**

- [ ] Create function getCityByName(name) using GET /api/v1/busca-cidade?name=''


* [.Rodonaves](#module_rodonaves-js+Rodonaves)
    * [new Rodonaves(username, password, mode)](#new_module_rodonaves-js+Rodonaves_new)
    * [.fetch(url, method, params, data)](#module_rodonaves-js+Rodonaves.fetch) ⇒ <code>Promise.&lt;any&gt;</code>
    * [.getCityByZipCode(zipCode)](#module_rodonaves-js+Rodonaves.getCityByZipCode) ⇒ <code>Promise.&lt;BuscaPorCepResponse&gt;</code>
    * [.BuscaPorCepResponse](#module_rodonaves-js+Rodonaves.BuscaPorCepResponse)

<a name="new_module_rodonaves-js+Rodonaves_new"></a>

#### new Rodonaves(username, password, mode)

| Param | Type | Description |
| --- | --- | --- |
| username | <code>String</code> | Rodonaves username for Auth |
| password | <code>String</code> | Rodonaves password for Auth |
| mode | <code>String</code> | Mode of the request. Can be dev or prod |

<a name="module_rodonaves-js+Rodonaves.fetch"></a>

#### Rodonaves.fetch(url, method, params, data) ⇒ <code>Promise.&lt;any&gt;</code>
INTERNAL USE - Fetch in the RTE API

**Kind**: static method of [<code>Rodonaves</code>](#module_rodonaves-js+Rodonaves)  
**Reject**: <code>Error</code>  
**Fulfill**: <code>any</code> API Response  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | URL |
| method | <code>String</code> | Method |
| params | <code>Object</code> | Querystring params |
| data | <code>Object</code> | Data |

<a name="module_rodonaves-js+Rodonaves.getCityByZipCode"></a>

#### Rodonaves.getCityByZipCode(zipCode) ⇒ <code>Promise.&lt;BuscaPorCepResponse&gt;</code>
Get City by Zip Code

**Kind**: static method of [<code>Rodonaves</code>](#module_rodonaves-js+Rodonaves)  
**Reject**: <code>Error</code>  
**Fulfill**: <code>BuscaPorCepResponse</code> API Response  

| Param | Type | Description |
| --- | --- | --- |
| zipCode | <code>String</code> | ZipCode |

<a name="module_rodonaves-js+Rodonaves.BuscaPorCepResponse"></a>

#### Rodonaves.BuscaPorCepResponse
**Kind**: static typedef of [<code>Rodonaves</code>](#module_rodonaves-js+Rodonaves)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| valid | <code>bool</code> | True if the token is valid. |
| id | <code>string</code> | The user id bound to the token. |

