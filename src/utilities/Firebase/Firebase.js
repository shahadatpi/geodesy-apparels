import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, createUserWithEmailAndPassword} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCUskEUeKLYWBodVkoE7dr8n7zsYE5ibTo",
    authDomain: "geodesy-apparels.firebaseapp.com",
    projectId: "geodesy-apparels",
    storageBucket: "geodesy-apparels.appspot.com",
    messagingSenderId: "880169201292",
    appId: "1:880169201292:web:4d61904d778cb55ff995a9"
};

// Initialize Firebase
const geoApp = initializeApp(firebaseConfig);

const geoProvider = new GoogleAuthProvider();

geoProvider.setCustomParameters({
    prompt: "select_account"
});

export const geoAuth = getAuth();
export const geoSignInGooglePopup = ()=> signInWithPopup(geoAuth, geoProvider);
export const geoSignInGoogleRedirect = ()=> signInWithRedirect(geoAuth, geoProvider);
export const db = getFirestore();
 export const createUserDocFromAuth = async (userAuth)=>{
      if (!userAuth) return ;
      const userDocRef = doc(db, 'user', userAuth.uid);
      const useSnapShot = await getDoc(userDocRef);
      console.log(useSnapShot);
      console.log(userDocRef);

      if (!useSnapShot.exists()){
          const {displayName, email} = userAuth;
          const createAt = new Date();
          try {
              await setDoc(userDocRef, {displayName, email, createAt});
          }catch (error){
              console.log('error creating user', error.message);
          }
      }
      return userDocRef;
 }

 export const geoEmailPassUser = async (email, password)=> {
     if (!email || !password) return;
     return await createUserDocFromAuth(geoAuth, email, password);
 }