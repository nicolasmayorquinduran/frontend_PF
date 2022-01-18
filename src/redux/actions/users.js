import axios from "axios";
import { TYPES } from "./types.js";

export function getUsers() {
  return async function (dispatch) {
    try {
      const json = await axios.get("http://localhost:3001/users");
      return dispatch({
        type: TYPES.GET_USERS,
        payload: json.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
}
