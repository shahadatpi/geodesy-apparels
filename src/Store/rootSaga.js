import {all, call} from 'redux-saga/effects';
import {categoriesSaga} from "./Categories/categorySaga.js";
import {userSagas} from "./User/userSaga.js";

export function* rootSaga(){
   yield all([call(categoriesSaga), call(userSagas)]);
}