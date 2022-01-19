import { combineReducers } from 'redux';
import userReducer from './usersReducer';
import productsReducer from './productsReducer';
import categoryReducer from './categoryReducer'


const rootReducer = combineReducers({
    userReducer,
    productsReducer,
    categoryReducer
});


export default rootReducer;