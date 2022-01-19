import { TYPES } from "../actions/types.js";

const initialState = {
  products: [],
  productsDetails: {},
};

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

      case TYPES.GET_PRODUCTS_BY_NAME:
        return{
          ...state,
          products:action.payload
        }

      // console.log("Producto detallado:", action.payload);
      case TYPES.PRODUCT_DITAILS:
        return {
          ...state,
          productsDetails: action.payload
        }

    default:
      return state;
  }
}

export default productsReducer;


