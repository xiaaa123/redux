import store from './store.js'
import  { addToCart,updateCart, deleteFromCart } from  './actions/cart-actions'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// console.log('initial state',store.getState());

const App = <h1>Redux shopping cart</h1>

ReactDOM.render (
  <Provider store= {store}>
    {App}
  </Provider>,
  document.getElementById('root')
)

let unsubscribe = store.subscribe(()=>
 console.log(store.getState())
)

store.dispatch(addToCart('coffee',1,250));
store.dispatch(addToCart('Flour',2,110));
store.dispatch(addToCart('juice',1,250))

store.dispatch(updateCart('Flour',10,110))
store.dispatch(deleteFromCart('coffee'))
unsubscribe();