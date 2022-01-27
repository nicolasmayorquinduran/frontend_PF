import { TYPES } from "../actions/types.js";

const initialState = {
  promos: [],
};

export default function promoReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.GET_PROMOS:
      return {
        ...state,
        promos: action.payload,
      };

    default:
      return initialState;
  }
}
