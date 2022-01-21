import axios from "axios";
import { TYPES } from "./types";

export function orderAdmin() {
  return function (dispatch) {
    return axios
      .get("http://localhost:3001/orderAdmin")
      .then((response) => {
        dispatch({
          type: TYPES.ORDER_ADMIN,
          payload: response.data,
        });
      })
      .catch((err) => console.log(err));
  };
}
