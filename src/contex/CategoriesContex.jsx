import {createContext, useEffect, useState} from "react";
import { getCategoriesAndDocuments} from "../utilities/Firebase/Firebase.js";

export const CategoriesContex = createContext({
    categoriesMap : {},
});

export const CategoriesProvider = ({children}) =>{
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(()=>{
       const getCategoriesMap = async () =>{
           const categoryMap = await getCategoriesAndDocuments();
           console.log(categoryMap);
           setCategoriesMap(categoryMap);
       }
       getCategoriesMap();

    }, []);

    const value = {categoriesMap}
    return(
        <CategoriesContex.Provider value={value}>{children}</CategoriesContex.Provider>
    )
}