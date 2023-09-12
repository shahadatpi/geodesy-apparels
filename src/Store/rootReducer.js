import {combineReducers} from "redux";
import {userReducer} from "./User/userReducer.js";
import {categoriesReducer} from "./Categories/categoryReducers.js";
import {cartReducer} from "./Cart/cartReducers.js";

export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
    cart: cartReducer,
})