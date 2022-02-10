import axios from "axios";
import { TYPES } from "./types.js";

export function getReviews(id) {
  return function (dispatch) {
    return axios
      .get(
        `https://pfbackendecommerce.herokuapp.com/reviews/${id}` ||
          `http://localhost:3001/reviews/${id}`
      )
      .then((response) => {
        return dispatch({
          type: TYPES.GET_REVIEWS,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
  };
}

export function postReviews(payload) {
  return async function (dispatch) {
    try {
      const json = await axios.post(
        "https://pfbackendecommerce.herokuapp.com/reviews" ||
          "http://localhost:3001/reviews",
        payload
      );

      return dispatch({
        type: TYPES.POST_REVIEWS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function putReviews(payload) {
  return async function (dispatch) {
    try {
      const json = await axios.put(
        "https://pfbackendecommerce.herokuapp.com/reviews",
        payload || "http://localhost:3001/reviews",
        payload
      );

      return dispatch({
        type: TYPES.PUT_REVIEWS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
