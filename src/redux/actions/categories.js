import axios from "axios";
import { TYPES } from "./types.js";

export function getCategories() {
  return async function (dispatch) {
    try {
      const info = await axios.get("http://localhost:3001/categories");
      return dispatch({
        type: TYPES.GET_CATEGORIES,
        payload: info.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function addCategories(payload) {
  /*aca iria la action para agregar 
    una categroia*/
  return async function (dispatch) {
    try {
      const json = await axios.post(
        "http://localhost:3001/categories",
        payload
      );
      return dispatch({
        type: TYPES.ADD_CATEGORIES,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
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
