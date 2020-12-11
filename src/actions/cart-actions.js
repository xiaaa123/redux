export const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART'

export function updateCart (product,quantity,cost) {
    return {
        type:UPDATE_CART,
        payload: {product,quantity,cost}
    }
}

export function deleteFromCart (product,quantity,cost) {
    return {
        type: DELETE_FROM_CART,
        payload: {product}
    }
}

export function addToCart (product,quantity,cost) {
    return {
      type: ADD_TO_CART,
      payload: {product,quantity,cost}
    }
}
  