import axios from "axios";
import {
  TYPES
} from "./types.js";

export function getCategories() {
  return async function (dispatch) {
    console.log('hola')
    try {
      const info = await axios.get("http://localhost:3001/categories")
      return dispatch({
        type: TYPES.GET_CATEGORIES,
        payload: info.data,
      })
    } catch (err) {
      console.log(err)
    }

  }
}

export function editCategories(id, nuevoNombre) {
  /*aca iria la action para modificar 
    una categroia*/
}

export function deleteCategories(id) {
  /*aca iria la action para eliminar 
    una categroia*/
}

