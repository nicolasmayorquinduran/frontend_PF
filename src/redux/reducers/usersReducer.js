import { TYPES } from "../actions/types.js";

const initialState = {
  users: [],
  actualUser: {}
};

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case TYPES.GET_ACTUAL_USER:
      return {
        ...state,
        actualUser: action.payload,
      }

    default:
      return state;
  }
}

export default usersReducer;
