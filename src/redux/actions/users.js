import axios from "axios";
import { TYPES } from "./types.js";

export function getUsers() {
  return function (dispatch) {
    return axios
      .get("http://localhost:3001/users")
      .then((response) =>
        dispatch({
          type: TYPES.GET_USERS,
          payload: response.data,
        })
      )
      .catch((error) => console.log(error));
  };
}
