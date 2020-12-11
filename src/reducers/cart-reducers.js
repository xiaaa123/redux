import { ADD_TO_CART, DELETE_FROM_CART, UPDATE_CART } from '../actions/cart-actions'

const initialState = {
    cart: [
      {
        product:'bread',
        quantity:2,
        cost:90
      },
      {
        product: 'milk',
        quantity: 1,
        cost:20
      }
    ]
  }

export default function(state=initialState,action) {
    switch (action.type) {
      case ADD_TO_CART: {
        return {
          ...state,
          cart: [...state.cart,action.payload]
        }
      }
      case UPDATE_CART: {
          return {
              ...state,
              cart: state.cart.map(item => item.product=== action.payload.product?action.payload:item)
          }
      }
      case DELETE_FROM_CART: {
          return {
              ...state,
              cart: state.cart.filter(item => item.product !== action.payload.product)
          }
      }
      default:
        return state;
    }  
  }
  