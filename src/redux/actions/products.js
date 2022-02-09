import axios from "axios";
import { TYPES } from "./types.js";

export function getProducts() {
  return function (dispatch) {
    return axios
      .get(
        "https://pfbackendecommerce.herokuapp.com/products" ||
          "http://localhost:3001/products"
      )
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
      .get(
        `https://pfbackendecommerce.herokuapp.com/products/${id}` ||
          `http://localhost:3001/products/${id}`
      )
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
  return async function (dispatch) {
    try {
      const json = await axios.post(
        "https://pfbackendecommerce.herokuapp.com/products",
        payload || "http://localhost:3001/products",
        payload
      );

      return dispatch({
        type: TYPES.POST_PRODUCTS_ADM,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getAllCarts() {
  return async function (dispatch) {
    let deleted = await axios.get(
      "https://pfbackendecommerce.herokuapp.com/carts" ||
        `http://localhost:3001/carts`
    );
    return dispatch({
      type: TYPES.GET_ALL_CARTS,
      payload: deleted.info,
    });
  };
}

export function getUserCart(email) {
  return async function (dispatch) {
    let cart = await axios.get(
      `https://pfbackendecommerce.herokuapp.com/cart/${email}` ||
        `http://localhost:3001/cart/${email}`
    );
    return dispatch({
      type: TYPES.GET_USER_CART,
      payload: cart.data,
    });
  };
}

export function addToCart(CartId, productInfo) {
  return async function (dispatch) {
    const addProd = await axios.put(
      `https://pfbackendecommerce.herokuapp.com/cart/${CartId}`,
      productInfo || `http://localhost:3001/cart/${CartId}`,
      productInfo
    ); //fatlta autenci usuario
    return dispatch({
      type: TYPES.ADD_TO_CART,
      payload: addProd.data.productCart,
    });
  };
}

export function deleteProductCart(CartId, ProductId) {
  return async function (dispatch) {
    let deleted = await axios.delete(
      `https://pfbackendecommerce.herokuapp.com/cart?CartId=${CartId}&ProductId=${ProductId}` ||
        `http://localhost:3001/cart?CartId=${CartId}&ProductId=${ProductId}`
    );
    return dispatch({
      type: TYPES.DELETE_PRODUCT_CART,
      payload: deleted.info,
    });
  };
}

export function deleteAllCart(CartId) {
  return async function (dispatch) {
    let deleted = await axios.delete(
      `https://pfbackendecommerce.herokuapp.com/cart/${CartId}` ||
        `http://localhost:3001/cart/${CartId}`
    );
    return dispatch({
      type: TYPES.DELETE_ALL_CART,
      payload: deleted.info,
    });
  };
}

export function updateProductAdm(payload) {
  return async function (dispatch) {
    try {
      const json = await axios.put(
        "https://pfbackendecommerce.herokuapp.com/products",
        payload || "http://localhost:3001/products",
        payload
      );

      return dispatch({
        type: TYPES.UPDATE_PRODUCT_ADM,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function cartToBuy(CartId, infoBuy, infoUser) {
  return async function (dispatch) {
    try {
      const buy = await axios.post(`http://localhost:3001/order/${CartId}`, {
        infoBuy,
        infoUser,
      });
      return dispatch({
        type: TYPES.CART_TO_BUY,
        payload: buy.data,
      });
    } catch (error) {}
  };
}
