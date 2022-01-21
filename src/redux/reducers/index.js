import { combineReducers } from "redux";
import userReducer from "./usersReducer";
import productsReducer from "./productsReducer";
import categoryReducer from "./categoryReducer";
import orderAdmReducer from "../reducers/orderAdmReducer";

const rootReducer = combineReducers({
  userReducer,
  productsReducer,
  categoryReducer,
  orderAdmReducer,
});

export default rootReducer;
