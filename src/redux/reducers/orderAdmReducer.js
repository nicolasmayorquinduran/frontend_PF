import { TYPES } from "../actions/types";

const initialState = {
  orders: {},
};

function orderAdmReducer(state = initialState, action) {
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

export default orderAdmReducer;
