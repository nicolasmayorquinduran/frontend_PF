import axios from "axios";
import { TYPES } from "./types.js";

export function getActivities() {
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

export function getProductsByName(nameProduc){
  return async function(dispatch){
    try{
      var json = await axios("http://localhost:3001/products?name=" + nameProduc)
      return dispatch({
        type:GET_PRODUCTS_BY_NAME,
        payload: json.data
      })
    }catch(error){
      console.log(error)
      return dispatch({
        type:TYPES.GET_PRODUCTS_BY_NAME,
        payload: "Este producto no existe"
      })
    }
  }
}