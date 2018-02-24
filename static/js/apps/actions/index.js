export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCTS_RESPONSE = 'GET_PRODUCTS_RESPONSE';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export function getProducts() {
  return {
    type: GET_PRODUCTS
  }
}

export function getProductsResponse(data) {
  return {
    type: GET_PRODUCTS_RESPONSE,
    data
  }
}

export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    product
  }
}

export function removeFromCart(product) {
  return {
    type: REMOVE_FROM_CART,
    product
  }
}
