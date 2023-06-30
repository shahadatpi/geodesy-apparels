import {createContext, useEffect, useState} from 'react';
import {geoCreateUserDocumentFromAuth, onAuthStateChangedListener} from "../utilities/Firebase/Firebase.js";

export const UserContex = createContext({
         currentUser: null,
         setCurrentUser: ()=> null,
});
export const UserProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    useEffect(()=>{
        const unSubscribe = onAuthStateChangedListener((user)=>{
          if (user){
              geoCreateUserDocumentFromAuth(user);
          }
            setCurrentUser(user);
        });
        return unSubscribe;
    }, []);


    return <UserContex.Provider value={value}>{children}</UserContex.Provider>;

}