import {CATEGORIES_ACTION_TYPES} from "./categoryTypes.js";

export const CATEGORIES_INIAL_STATE = {
    categories: [],
    isLoading: false,
    error: null,
};

export const categoriesReducer = (state=CATEGORIES_INIAL_STATE, action = {}) =>{
    const {type, payload} = action;

    switch (type) {
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
            return {...state, isLoading: true};
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
            return {...state, categories: payload, isLoading: false};
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
            return {...state, error: payload, isLoading: false};
        default:
            return state;
    }

}