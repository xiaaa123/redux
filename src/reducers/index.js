import {combineReducers} from 'redux'
import cartReducer from './cart-reducers'
import productsReducer from './products-reducer'

const allReducers = {
    products: productsReducer,
    shoppingCart: cartReducer
  }
  
const rootReducer = combineReducers(allReducers)
//111
export default rootReducer;