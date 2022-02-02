import axios from "axios";
import { TYPES } from "./types.js";

export function getCategories() {
  return async function (dispatch) {
    try {
      const info = await axios.get(
        "https://pfbackendecommerce.herokuapp.com/categories" ||
          "http://localhost:3001/categories"
      );
      return dispatch({
        type: TYPES.GET_CATEGORIES,
        payload: info.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function addCategories(data) {
  /*aca iria la action para agregar 
    una categroia*/
  return {
    type: TYPES.EDIT_CATEGORIES,
    payload: data,
  };
}

export function deleteCategories(payload) {
  /*aca iria la action para eliminar 
    una categroia*/
  return {
    type: TYPES.DELETE_CATEGORIES,
    payload,
  };
}
