import axios from "axios";
import { TYPES } from "./types.js";

export function getUsers() {
  return function (dispatch) {
    return axios
      .get(
        "https://pfbackendecommerce.herokuapp.com/users" ||
          "http://localhost:3001/users"
      )
      .then((response) =>
        dispatch({
          type: TYPES.GET_USERS,
          payload: response.data,
        })
      )

      .catch((error) => console.log(error));
  };
}

export function postUser(payload) {
  return async function (dispatch) {
    const info = await axios.post(
      "https://pfbackendecommerce.herokuapp.com/users",
      payload || "http://localhost:3001/users",
      payload
    );
    return info;
  };
}

export function getActualUser(payload) {
  return async function (dispatch) {
    try {
      const json = await axios.get(
        "https://pfbackendecommerce.herokuapp.com/users" + payload ||
          "http://localhost:3001/users/" + payload
      );
      return dispatch({
        type: TYPES.GET_ACTUAL_USER,
        payload: json.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export const putUser = async (payload) => {
  return await axios
    .put(
      "https://pfbackendecommerce.herokuapp.com/users",
      payload || "http://localhost:3001/users",
      payload
    )
    .then(function (response) {})
    .catch(function (error) {});
};
