import {takeLatest, put, all, call} from 'redux-saga/effects';
import {USER_ACTION_TYPES} from "./userTypes.js";
import {
    geoCreateAuthUserWithEmailAndPassword,
    geoCreateUserDocumentFromAuth, geoSignInAuthUserWithEmailAndPassword, geoSignInWithGooglePopup,
    getCurrentUser, signOutUser,
} from "../../Utilities/Firebase/Firebase.js";
import {signInFailed, signInSuccess, signOutFailed, signOutSuccess, signUpFailed, signUpSuccess} from "./userAction.js";


export function* getSnapShotFromUserAuth(userAuth, additionalDetails){
    try {
        const userSnapShot = yield call(geoCreateUserDocumentFromAuth, userAuth, additionalDetails);
        yield put(signInSuccess({id: userSnapShot.id, ...userSnapShot.data()}));
        }catch (error){
        yield put(signInFailed(error));
    }
}

export function* signUp({payload: {email, password, displayName}}){
    try {
        const {user} = yield call(geoCreateAuthUserWithEmailAndPassword, email, password);
        yield put(signUpSuccess(user, {displayName}));
    }catch (error){
        yield put(signUpFailed(error));
    }
}


export function* signInAfterSignUp({payload: {user, additionalDetails}}){
     yield call(getSnapShotFromUserAuth, user, additionalDetails);
}

export function* signInWithGoogle(){
    try {
        const {user} = yield call(geoSignInWithGooglePopup);

        yield call(getSnapShotFromUserAuth, user);
    }catch (error){
        yield put(signInFailed(error));
    }
}

export function* signInWithEmail({payload: {email, password}}){
    try {
        const {user} = yield call(geoSignInAuthUserWithEmailAndPassword, email, password);
        yield call(getSnapShotFromUserAuth, user);
    }catch (error){
        yield put(signInFailed(error));
    }
}
export function* signOut(){
   try {
       yield call(signOutUser);
       yield put(signOutSuccess());
   }catch (error){
       yield put(signOutFailed(error));
   }
}
export function* isUserAuthenticated(){
    try {
        const userAuth = yield call(getCurrentUser);
        if (!userAuth) return;
        yield call(getSnapShotFromUserAuth, userAuth);

    } catch (error){
        yield put(signInFailed(error));
    }
}

export function* onGoogleSignInStart(){
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN, signInWithGoogle);
}

export function* onEmailSignInStart(){
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignUpStart(){
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}
export function* onSignUpSuccess(){
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* onSignOutStart(){
    yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}


export function* onCheckUserSession(){
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* userSagas(){
    yield all([call(onCheckUserSession),
               call(onGoogleSignInStart),
               call(onEmailSignInStart),
               call(onSignUpStart),
               call(onSignUpSuccess),
               call(onSignOutStart)
    ]);
}