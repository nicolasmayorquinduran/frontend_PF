import axios from "axios";
import { TYPES } from "./types.js";


export function getDetails () {
  return async function (dispatch) {
    try {
      const json = await axios.get("http://localhost:3001/products/id")
      
      console.log(json.data);

      return dispatch (
        {
          type: TYPES.PRODUCTS_DETAILS,
          payload: json.data
        }
      );
    
    } catch (error) {
      console.log(error);
    }
  }
};