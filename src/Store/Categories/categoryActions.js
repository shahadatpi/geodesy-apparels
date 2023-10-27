import {createAction} from "../../Utilities/Reducers/Reducers.jsx";
import {CATEGORIES_ACTION_TYPES} from "./categoryTypes.js";


export const fetchCategoriesStart = ()=> createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
export const fetchCategoriesSuccess = (categoriesArray)=> createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);
export const fetchCategoriesFailed = (error)=> createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

