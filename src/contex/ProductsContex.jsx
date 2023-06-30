import {createContext, useState} from "react";
import PRODUTCS from '../shop-data.json';

export const ProductsContex = createContext({
    products : [],
});

export const ProductsProvider = ({children}) =>{
    const [products, setProducts] = useState(PRODUTCS);
    const value = {products}
    return(
        <ProductsContex.Provider value={value}>{children}</ProductsContex.Provider>
    )
}