import axios from "axios";
import { TYPES } from "./types";

export function orderAdmin() {
  return function (dispatch) {
    return axios
      .get("http://localhost:3001/ordersAdmin")
      .then((response) =>
        dispatch({
          type: TYPES.ORDER_ADMIN,
          payload: response.data,
        })
      )
      .catch((err) => console.log(err));
  };
}


export function sendEmail(payload) {
  return async function (dispatch) {
    await axios
      .post(`/sendEmail`, payload, { withCredentials: true })
      .then((response) => {
        dispatch({
          type: TYPES.SEND_EMAIL,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
  };
}