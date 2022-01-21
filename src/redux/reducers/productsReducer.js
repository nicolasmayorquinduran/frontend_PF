import { TYPES } from "../actions/types.js";

const initialState = {
  products: [],
  allProducts: [],
  search: "",
  productsDetails: [],
  panelAdmin: []
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
      return {
        ...state,
        search: action.payload,
      };

      case TYPES.PRODUCT_DETAILS:
        return {
          ...state,
          productsDetails: action.payload
        }


      case TYPES.GET_PRODUCTS_ADM:
        return {
          ...state,
          panelAdmin: action.payload
        }

    default:
      return state;
  }
}

export default productsReducer;
