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


export function detailsProduct(id) {
  return function (dispatch) {
    return axios
      .get(`http://localhost:3001/products/${id}`)
      .then((response) =>
        dispatch({
          type: TYPES.PRODUCT_DETAILS,
          payload: response.data,
        })
      )
      .catch((error) => console.log(error));
  };
}


