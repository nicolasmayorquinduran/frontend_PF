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

export const addPromo = async (payload) => {
  return axios
    .post("http://localhost:3001/promos", payload)
    .then(function (response) {})
    .catch(function (error) {});
};

export const putPromo = async (payload) => {
  return axios
    .put("http://localhost:3001/promos", payload)
    .then(function (response) {})
    .catch(function (error) {});
};
