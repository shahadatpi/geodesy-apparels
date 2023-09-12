import {createAction} from "../../Utilities/Reducers/Reducers.jsx";
import {CATEGORIES_ACTION_TYPES} from "./categoryTypes.js";

export const setCategoriesMap = (categoriesMap) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesMap)