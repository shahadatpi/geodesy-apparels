import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import {BrowserRouter} from "react-router-dom";
import App from "./App.jsx";
import { UserProvider} from "./contex/UserContex.jsx";
import {ProductsProvider} from "./contex/ProductsContex.jsx";
import {CartProvider} from "./contex/CartContex.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        <BrowserRouter>
            <UserProvider>
                <ProductsProvider>
                    <CartProvider>
                        <App/>
                    </CartProvider>
                </ProductsProvider>
            </UserProvider>
        </BrowserRouter>
    </React.StrictMode>,
)
