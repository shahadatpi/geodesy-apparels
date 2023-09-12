import {applyMiddleware, compose} from "redux";
import {rootReducer} from "./rootReducer.js";
import {logger} from "redux-logger/src";
import {legacy_createStore as createStore} from 'redux'

const loggerMiddlewares = (store) => (next) => (action) => {
    if (!action.type){
        return next(action);
    }
    console.log('type: ', action.type);
    console.log('payload: ', action.payload);
    console.log('currentState: ', store.getState());

    next(action);
    console.log('nextState: ', store.getState());
}
const middleWares = [loggerMiddlewares];
const composeEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composeEnhancers);