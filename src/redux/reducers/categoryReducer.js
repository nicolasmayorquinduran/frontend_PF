import { TYPES } from "../actions/types.js";

const initialState = {
  categories: [],
  filterCategories: [],
};

export default function categoryReducer(state = initialState, action) {
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

    default:
      return initialState;
  }
}
