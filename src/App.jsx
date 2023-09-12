import {Route, Routes} from "react-router-dom";
import Home from "./Routes/Home/Home.jsx";
import Navigation from "./Routes/Navigation/Navigation.jsx";
import SignInPage from "./Routes/SignInPage/SignInPage.jsx";
import Shop from "./Routes/Shop/Shop.jsx";
import Checkout from "./Routes/Checkout/Checkout.jsx";
import {useEffect} from "react";
import {geoCreateUserDocumentFromAuth, onAuthStateChangedListener} from "./Utilities/Firebase/Firebase.js";
import {setCurrentUser} from "./Store/User/userAction.js";
import {useDispatch} from "react-redux";


const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const unSubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                geoCreateUserDocumentFromAuth(user);
            }
            dispatch(setCurrentUser(user));
        });
        return unSubscribe;
    }, [dispatch]);

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
