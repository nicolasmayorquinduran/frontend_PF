import { TYPES } from "../actions/types";

const initialState = {
  orders: [],
};

export default function ordersAdminReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.ORDER_ADMIN:
      return {
        ...state,
        orders: action.payload,
      };
    default:
      return initialState;
  }
}
