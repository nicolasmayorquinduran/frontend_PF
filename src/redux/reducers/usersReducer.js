import { TYPES } from "../actions/types.js";

const initialState = {
  users: [],
};

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.GET_USERS:
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
}

export default usersReducer;
