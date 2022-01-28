import { combineReducers } from "redux";
import userReducer from "./usersReducer";
import productsReducer from "./productsReducer";
import categoryReducer from "./categoryReducer";
import orderAdmReducer from "../reducers/orderAdmReducer";
import promoReducer from "./promoReducer";
const rootReducer = combineReducers({
  userReducer,
  productsReducer,
  categoryReducer,
  orderAdmReducer,
  promoReducer,
});

export default rootReducer;
