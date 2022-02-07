import axios from "axios";
import { TYPES } from "./types.js";

export function getReviews(id) {
  return function (dispatch) {
    return axios
      .get(`http://localhost:3001/reviews/${id}`)
      .then((response) => {
        return dispatch({
          type: TYPES.GET_REVIEWS,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
  };
}