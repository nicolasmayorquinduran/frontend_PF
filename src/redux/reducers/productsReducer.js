import { TYPES } from "../actions/types.js";

const initialState = {
  products: [],
  allProducts: [],
  productsDetails: [],
};

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        allProducts: action.payload
      };

      case TYPES.GET_PRODUCTS_BY_NAME:
        return{
          ...state,
          products:action.payload
        }

      
      case TYPES.PRODUCT_DETAILS:
        console.log("Producto detallado:", action.payload);
        return {
          ...state,
          productsDetails: action.payload
        }

    default:
      return state;
  }
}

export default productsReducer;


