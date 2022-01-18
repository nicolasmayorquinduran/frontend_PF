import { combineReducers } from 'redux';
import userReducer from './usersReducer';
import productsReducer from './productsReducer';


const rootReducer = combineReducers({
    userReducer,
    productsReducer,
});


export default rootReducer;