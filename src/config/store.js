import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import cartReducer from '../features/cart/reducer'
import thunk from "redux-thunk";
import {createReducer} from "redux-orm";
import orm from "./orm";
import searchProductsReducer from "../features/product/reducer";
import productDetailsReducer from "../features/product/productDetailsReducer";
//import reducer from "../features/product/reducer";
const rootReducer = combineReducers({
 orm : createReducer(orm),
 cart: cartReducer,
 productsSearch: searchProductsReducer,
 productDetails: productDetailsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk))
)

export default store;