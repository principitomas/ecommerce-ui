import axios from 'axios'

const bearerAuth = 'bearer fb834c1b-9d9a-4f37-83a5-a994549a554b'
var SHOPPING_API = axios.create({
    baseURL: 'https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/f2ea2cb4-c600-4bb5-88e8-e952ff5591ee/ref-store-shopping-exp-api/1.0.0/m/cart/',
    headers: { "correlationId":"1", "client_id":"value", "client_secret":"value", "ms2-authorization": bearerAuth }
})

var PRODUCTS_API = axios.create({
    baseURL: 'https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/f2ea2cb4-c600-4bb5-88e8-e952ff5591ee/ref-store-products-exp-api/1.0.1/m',
    headers: { "correlationId":"1", "client_id":"value", "client_secret":"value", "ms2-authorization": bearerAuth }
})

export { SHOPPING_API, PRODUCTS_API }