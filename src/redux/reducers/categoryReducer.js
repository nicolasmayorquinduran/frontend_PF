import {
  TYPES
} from "../actions/types.js";

const initialState = {
  categories: [],
  allCategories: [],
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.GET_CATEGORIES:
      console.log('hola')
      return {
        ...state,
        categories: action.payload,
        allCategories: action.payload
        };

    case TYPES.EDIT_CATEGORIES:
      return {
        ...state
      }

    case TYPES.DELETE_CATEGORIES:
      return{
        ...state
      }
        
    // case TYPES.BY_CATEGORY:
    //   const categoriesAll = state.allCategories
    //   const categoryFilter = action.payload === 'All'?
    //   categoriesAll : categoriesAll.filter(e=>e != action.payload)
    //   return {
    //     ...state,
    //     categories: categoryFilter
    //   }
      

      default:
        return initialState;
  }
}

