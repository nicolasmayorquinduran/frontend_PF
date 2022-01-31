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

export function getUserCart (email){
  return async function (dispatch){
    let cart = await axios.get('http://localhost:3000/cart',email)
    return dispatch({
      type:TYPES.GET_USER_CART,
      payload:cart.data
    })
  }
}

export function addToCart(product, userId, cart) {
  return async function (dispatch) {
    if (!userId) {
      let products = JSON.parse(localStorage.getItem("cart")) || [];
      let productFind = false;
      // products = products.map((p) => {
      //ESTO ES PARA MANEJAR EL STOCK 
      //   if (p.ProductId === product.ProductId) {
      //     productFind = true;
      //     return {
      //       ...p,
      //       //qty: Number(p.qty) + 1,
      //       amount: Number(p.amount) + product.amount <= p.stock ? Number(p.amount) + product.amount : p.amount,
      //     };
      //   }
      //   return p;
      // });

      if (productFind === false) {
        products.push(product);
        //console.log(products)
      }
      products = products.filter(p => p.amount > 0)
      localStorage.setItem("cart", JSON.stringify(products));
      return dispatch({
        type: TYPES.ADD_TO_CART,
        payload: products
      }); /* */
    }
    if (userId) {
      let exits = false;
      let aux = Array.isArray(cart) ? cart.map(p => {
        if (p.idProduct === product.idProduct) {
          exits = true;
          return {
            ...p,
            amount: Number(p.amount) + Number(product.amount)
          }
        }
        return p;
      }) : []

      if (!exits) aux = [...aux, product]


      const body = {
        productsInfo: aux
      } //[{...product}/* id: product.idProduct, qty: 1  */]};
      //console.log('lo',product.idProduct)
      return axios
        .put(`http://localhost:3000/users/cart/${userId}`, body) //fatlta autenci usuario
        .then((response) => {

          //console.log("putproductadd",response)
          // localStorage.setItem("cart", JSON.stringify(response.data.cart));
          dispatch({
            type: TYPES.ADD_TO_CART_DB,
            payload: response.data.cart
          });
        })
        .catch((error) => console.error(error));
    }
  };
}

export function deleteProductCart({ CartId, ProductId }) {
  return async function (dispatch) {
    let deleted = await axios.delete(`http://localhost:3000/${CartId}`,ProductId);
    return dispatch({
      type: TYPES.DELETE_PRODUCT_CART,
      payload: deleted.info,
    });
  };
}

export function deleteAllCart({ CartId }) {
  return async function (dispatch) {
    let deleted = await axios.delete(`http://localhost:3000/${CartId}`);
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
