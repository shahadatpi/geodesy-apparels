import {Route, Routes} from "react-router-dom";
import Home from "./routes/Home/Home.jsx";
import Navigation from "./routes/Navigation/Navigation.jsx";
import SignInPage from "./routes/SignInPage/SignInPage.jsx";
import Shop from "./routes/Shop/Shop.jsx";
import Checkout from "./routes/Checkout/Checkout.jsx";


const App = () => {


    return (
        <Routes>
            <Route path="/" element={<Navigation/>}>
                <Route index element={<Home/>}/>
                <Route path="shop/*" element={<Shop/>}/>
                <Route path="signin" element={<SignInPage/>}/>
                <Route path="checkout" element={<Checkout/>}/>
            </Route>
        </Routes>
    )
}

export default App
