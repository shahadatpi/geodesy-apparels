import {rootReducer} from "./rootReducer.js";
import {applyMiddleware, compose, legacy_createStore as createStore} from 'redux';
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from "redux-persist";
import {logger} from "redux-logger/src";
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from "./rootSaga.js";



 const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
}

const sagaMiddleWare = createSagaMiddleware();


const middleWares = [process.env.NODE_ENV ===! 'production' && logger, sagaMiddleWare].filter(Boolean);
const composeEnhancer =

    (process.env.NODE_ENV ===! 'production' && window && window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ ) || compose;
const composeEnhancers = composeEnhancer(applyMiddleware(...middleWares));

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, undefined, composeEnhancers);
sagaMiddleWare.run(rootSaga);
export const persistor = persistStore(store);