import axios from "axios";
import { TYPES } from "./types.js";

export function getPromos() {
  return async function (dispatch) {
    try {
      const info = await axios.get("http://localhost:3001/promos");
      return dispatch({
        type: TYPES.GET_PROMOS,
        payload: info.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function addPromo(payload) {
  /*aca iria la action para agregar 
    una categroia*/
  return {
    type: TYPES.EDIT_PROMOS,
    payload,
  };
}

export function deletePromo(payload) {
  /*aca iria la action para eliminar 
    una categroia*/
  return {
    type: TYPES.PUT_PROMOS,
    payload,
  };
}
