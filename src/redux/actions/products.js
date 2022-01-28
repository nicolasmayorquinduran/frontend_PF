import axios from "axios";
import { TYPES } from "./types.js";

export function getProducts() {
  return function (dispatch) {
    return axios
      .get("http://localhost:3001/products")
      .then((response) =>
        dispatch({
          type: TYPES.GET_PRODUCTS,
          payload: response.data,
        })
      )
      .catch((error) => console.log(error));
  };
}

export function searchProducts(search) {
  return function (dispatch) {
    return dispatch({
      type: TYPES.GET_PRODUCTS_BY_NAME,
      payload: search,
    });
  };
}

export function detailsProduct(id) {
  return function (dispatch) {
    return axios
      .get(`http://localhost:3001/products/${id}`)
      .then((response) => {
        return dispatch({
          type: TYPES.PRODUCT_DETAILS,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
  };
}

// Post new Product: Admin
export function postProducts(payload) {
  return async function(dispatch) {
    try {
      const json = await axios.post("http://localhost:3001/products", payload);
    
      return dispatch(
        {
          type: TYPES.POST_PRODUCTS_ADM,
          payload: json.data,
        }
      );
    
    } catch (error) {
      console.log(error)
    }
  }
};


export function getAllCarts() {
  return async function (dispatch) {
    let deleted = await axios.get(`http://localhost:3000/carts`);
    return dispatch({
      type: TYPES.GET_ALL_CARTS,
      payload: deleted.info,
    });
  };
}

export function postProductCart({ product }) {
  // return async function(dispatch){
  //   let cart = await axios.get('http://localhost:3000/userId/cart')
  //   return dispatch({
  //     type: TYPES.POST_PRODUCT_CART,
  //     payload: cart.info
  //   })
  // }
  return function (dispatch) {
    return dispatch({
      type: TYPES.POST_PRODUCT_CART,
      payload: product,
    });
  };
}

export function deleteProductCart({ cartId, productId }) {
  return async function (dispatch) {
    let deleted = await axios.delete(
      `http://localhost:3000/${cartId}/${productId}`
    );
    return dispatch({
      type: TYPES.DELETE_PRODUCT_CART,
      payload: deleted.info,
    });
  };
}

export function deleteAllCart({ cartId }) {
  return async function (dispatch) {
    let deleted = await axios.delete(`http://localhost:3000/${cartId}`);
    return dispatch({
      type: TYPES.DELETE_ALL_CART,
      payload: deleted.info,
    });
  };
}

export function updateProductAdm(payload) {
  return async function(dispatch) {
    try {
      const json = await axios.put("http://localhost:3001/products", payload);
    
      return dispatch(
        {
          type: TYPES.UPDATE_PRODUCT_ADM,
          payload: json.data,
        }
      );
    
    } catch (error) {
      console.log(error)
    }
  }
}
