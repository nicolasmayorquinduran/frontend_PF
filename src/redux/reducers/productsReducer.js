import { TYPES } from "../actions/types.js";

const initialState = {
  products: [],
  allProducts: [],
  search: "",
  productDetail: {},
  panelAdmin: [],
  newProducts: [],
};

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        allProducts: action.payload,
      };

    case TYPES.GET_PRODUCTS_BY_NAME:
      return {
        ...state,
        search: action.payload,
      };

    case TYPES.PRODUCT_DETAILS:
      return {
        ...state,
        productDetail: action.payload,
      };

    case TYPES.POST_PRODUCTS_ADM:
      return {
        ...state,
        newProducts: [...state.newProducts, action.payload],
      };

    default:
      return state;
  }
}

export default productsReducer;
