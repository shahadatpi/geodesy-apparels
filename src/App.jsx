import {Route, Routes} from "react-router-dom";
import Home from "./routes/home/home.jsx";
import Navigation from "./routes/Navigation/Navigation.jsx";
import SignIn from "./routes/SignIn/SignIn.jsx";

const App = () => {

    const Shop = () => {
        return (<h1>I'm the shop page!</h1>);
    }
    return (
        <Routes>
            <Route path="/" element={<Navigation/>}>
                <Route index element={<Home/>}/><Route/>
                <Route path="shop" element={<Shop/>}/><Route/>
                <Route path="signin" element={<SignIn/>}/><Route/>
            </Route>
        </Routes>
    )
}

export default App
