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


export function detailsProduct() {
  return function (dispatch) {
    return axios
      .get(`http://localhost:3001/productsDetails/id`)
      .then((response) => {
        return dispatch({
          type: TYPES.PRODUCT_DETAILS,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
  };
}


// FALTA CREAR RUTA DEL BACK:
export function getProductsPanelAdm () {
  return function (dispatch) {
    return axios.get("")
      .then((response) => {
        return dispatch({
        type: TYPES.GET_PRODUCTS_PANEL_ADM,
        payload: response.data
      })
    }).catch ((error) => console.error(error))
  }
};
