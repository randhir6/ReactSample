import * as productActions from '../actions';

const initialState = {
  data: [],
  total: 0
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case productActions.ADD_TO_CART: {
      const found = state.data.some((product) => {
        return product.id === action.product.id
      });

      return {
        ...state,
        data: !found ? [action.product, ...state.data] : state.data,
        total: !found ? state.total + action.product.price : state.total
      }
    }
    case productActions.REMOVE_FROM_CART: {
      return {
        ...state,
        data: state.data.filter((product) => {
          return product.id !== action.product.id
        }),
        total: state.total - action.product.price
      }
    }
    default: {
      return state;
    }
  }
}