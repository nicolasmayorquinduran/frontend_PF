import { TYPES } from "../actions/types.js";

const initialState = {
  products: [],
};

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
}

export default productsReducer;
