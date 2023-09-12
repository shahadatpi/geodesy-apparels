import {createAction} from "../../Utilities/Reducers/Reducers.jsx";
import {USER_ACTION_TYPES} from "./userTypes.js";

export const setCurrentUser = (user) => createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);