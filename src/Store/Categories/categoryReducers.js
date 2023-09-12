import {CATEGORIES_ACTION_TYPES} from "./categoryTypes.js";

export const CATEGORIES_INIAL_STATE = {
    categories: []
}

export const categoriesReducer = (state=CATEGORIES_INIAL_STATE, action = {}) =>{
    const {type, payload} = action;

    switch (type) {
        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
            return {...state, categories: payload};
        default:
            return state;
    }

}