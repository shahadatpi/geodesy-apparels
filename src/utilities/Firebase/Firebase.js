import {initializeApp} from "firebase/app";
import {getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
    } from 'firebase/auth';
import {getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
} from 'firebase/firestore';

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
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const batch = writeBatch(db);
    const collectionRef = collection(db, collectionKey);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
    console.log('done');
};

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});

    return categoryMap;
};

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

export const signOutUser = async () => await signOut(auth);
export const onAuthStateChangedListener =  (callback) => onAuthStateChanged(auth, callback);