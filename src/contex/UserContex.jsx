import {createContext, useEffect, useReducer} from 'react';
import {geoCreateUserDocumentFromAuth, onAuthStateChangedListener} from "../Utilities/Firebase/Firebase.js";
import {createAction} from "../Utilities/Reducers/Reducers.jsx";

export const UserContex = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});


export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {
    console.log(action);
    const {type, payload} = action;

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
    }

}

const INITIAL_STATE = {
    currentUser: null
}


export const UserProvider = ({children}) => {
    const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE);
    console.log(currentUser)
    const setCurrentUser = (user) => {
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
    }
    const value = {currentUser, setCurrentUser};

    useEffect(() => {
        const unSubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                geoCreateUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });
        return unSubscribe;
    }, []);


    return <UserContex.Provider value={value}>{children}</UserContex.Provider>;

}