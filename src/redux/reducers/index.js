import { act } from "react-dom/test-utils";
import { TYPES } from "../actions/types.js";

const initialState = {
  categories: [],
  filterCategories: [],
  orders: [],
  products: [],
  allProducts: [],
  search: "",
  productDetail: {},
  panelAdmin: [],
  newProducts: [],
  updateProduct: [],
  promos: [],
  users: [],
  actualUser: { carts: [{ productCart: [] }] },
  cart: {},
  reviews: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    case TYPES.EDIT_CATEGORIES:
      return {
        ...state,
        filterCategories: (state.filterCategories.length && [
          ...state.filterCategories,
          action.payload,
        ]) || [...state.categories, action.payload],
      };

    case TYPES.DELETE_CATEGORIES:
      return {
        ...state,
        filterCategories:
          (state.filterCategories.length &&
            state.filterCategories.filter((c) => c !== action.payload)) ||
          state.categories.filter((c) => c !== action.payload),
      };
    case TYPES.ORDER_ADMIN:
      return {
        ...state,
        orders: action.payload,
      };
    case TYPES.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        allProducts: action.payload,
      };

    case TYPES.GET_PRODUCTS_BY_NAME:
      return {
        ...state,
        search: action.payload,
      };

    case TYPES.PRODUCT_DETAILS:
      return {
        ...state,
        productDetail: action.payload,
      };

    case TYPES.POST_PRODUCTS_ADM:
      return {
        ...state,
      };

    case TYPES.GET_PROMOS:
      return {
        ...state,
        promos: action.payload,
      };
    case TYPES.GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case TYPES.GET_ACTUAL_USER:
      let productsUser =
        action.payload.carts[action.payload.carts.length - 1].productCart;
      productsUser = productsUser.map(
        (p) =>
          !p?.hasOwnProperty("stockSelected") &&
          (p.stockSelected = {
            xs: "0",
            s: "0",
            m: "0",
            l: "0",
            xl: "0",
            xxl: "0",
          })
      );
      if (!productsUser.length) {
        var guardado = localStorage.getItem("cart");
        guardado = JSON.parse(guardado);
        guardado = guardado.filter((ProductStorage) =>
          action.payload.carts[
            action.payload.carts.length - 1
          ].productCart.every(
            (ProductUser) => ProductStorage.ProductId !== ProductUser.ProductId
          )
        );
        guardado = guardado.concat(productsUser);
        productsUser = guardado;
      }
      return {
        ...state,
        actualUser: action.payload,
      };
    case TYPES.GET_USER_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case TYPES.ADD_TO_CART:
      // actualUser: { carts: [{ productCart: [remera] }, { productCart2: [pantalon] }, {productCart3: [blusa] }] },
      return {
        ...state,
        actualUser: {
          ...state.actualUser,
          carts: [
            ...state.actualUser.carts.map((e, index) => {
              if (index === state.actualUser.carts.length - 1) {
                e.productCart = action.payload;

                return e;
              } else {
                return e;
              }
            }),
          ],
        },
      };

    case TYPES.DELETE_PRODUCT_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case TYPES.DELETE_ALL_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case TYPES.GET_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
