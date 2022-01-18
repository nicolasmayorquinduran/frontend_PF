import { TYPES } from "../actions/types.js";


const initialState = {
  products: [],
  productDetails: {},
};


function productsReducer(state = initialState, action) {
  switch (action.type) {
    
    case TYPES.GET_PRODUCTS:
      
      return {
        ...state,
        products: action.payload,
        productDetails: {},
      };


    case TYPES.PRODUCTS_DETAILS:

      console.log("Producto detallado:", action.payload);
      return {
        ...state,
        productDetails: action.payload
      };


    default:
    return state;
  
  }
}

export default productsReducer;
