import * as productActions from '../actions'

const initialState = {
  data: []
};

export default function catalogReducer(state = initialState, action) {
  switch (action.type) {
    case productActions.GET_PRODUCTS_RESPONSE: {
      return {
        ...state,
        data: action.data.catalog
      }
    }
    default: {
      return state;
    }
  }
}