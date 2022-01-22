import axios from "axios";
import { TYPES } from "./types.js";

export function getProducts() {
  return function (dispatch) {
    return axios
      .get("http://localhost:3001/products")
      .then((response) =>
        dispatch({
          type: TYPES.GET_PRODUCTS,
          payload: response.data,
        })
      )
      .catch((error) => console.log(error));
  };
}

export function searchProducts(search) {
  return function (dispatch) {
    return dispatch({
      type: TYPES.GET_PRODUCTS_BY_NAME,
      payload: search,
    });
  };
}

export function detailsProduct() {
  return function (dispatch) {
    return axios
      .get(`http://localhost:3001/productsDetails/id`)
      .then((response) => {
        console.log('RESPONSE',response.data)
        return dispatch({
          type: TYPES.PRODUCT_DETAILS,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
  };
}


// FALTA CREAR RUTA DEL BACK:
export function postProductsAdm (newProduct) {
  return function (dispatch) {
    return dispatch({
      type: TYPES.POST_PRODUCTS_ADM,
      payload: newProduct
    })
  }
};
