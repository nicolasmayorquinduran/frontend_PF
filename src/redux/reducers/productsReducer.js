import { TYPES } from "../actions/types.js";


const initialState = {
  products: [],
<<<<<<< HEAD
  productDetails: {},
=======
  allProducts: [],
  search: "",
  productDetail: {},
  panelAdmin: [],
  newProducts: [],
  updateProduct: []
>>>>>>> cfe4ef5eabea2c949b25bc4905ed842f83385a85
};


function productsReducer(state = initialState, action) {
  switch (action.type) {
    
    case TYPES.GET_PRODUCTS:
      
      return {
        ...state,
        products: action.payload,
<<<<<<< HEAD
        productDetails: {},
      };


    case TYPES.PRODUCTS_DETAILS:

      console.log("Producto detallado:", action.payload);
      return {
        ...state,
        productDetails: action.payload
=======
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
      };

    case TYPES.UPDATE_PRODUCT_ADM:
      return {
        ...state,
        updateProduct: action.payload,
>>>>>>> cfe4ef5eabea2c949b25bc4905ed842f83385a85
      };


    default:
    return state;
  
  }
}

export default productsReducer;
