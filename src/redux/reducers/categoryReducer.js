import {
  TYPES
} from "../actions/types.js";

const initialState = {
  categories: [],
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.GET_CATEGORIES:
      console.log('hola')
      return {
        ...state,
        categories: action.payload
        }

    case TYPES.EDIT_CATEGORIES:
      return {
        ...state
      }

    case TYPES.DELETE_CATEGORIES:
      return{
        ...state
      }    

      default:
        return initialState;
  }
}

