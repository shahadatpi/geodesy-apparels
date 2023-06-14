import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

const geoFirebaseConfig = {
    apiKey: "AIzaSyCUskEUeKLYWBodVkoE7dr8n7zsYE5ibTo",
    authDomain: "geodesy-apparels.firebaseapp.com",
    projectId: "geodesy-apparels",
    storageBucket: "geodesy-apparels.appspot.com",
    messagingSenderId: "880169201292",
    appId: "1:880169201292:web:4d61904d778cb55ff995a9"
};

const geoFirebaseApp = initializeApp(geoFirebaseConfig);

const geoGoogleProvider = new GoogleAuthProvider();

geoGoogleProvider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();
export const geoSignInWithGooglePopup = () =>
    signInWithPopup(auth, geoGoogleProvider);
export const signInWithGoogleRedirect = () =>
    signInWithRedirect(auth, geoGoogleProvider);

export const db = getFirestore();

export const geoCreateUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
};

export const geoCreateAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};
export const geoSignInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};