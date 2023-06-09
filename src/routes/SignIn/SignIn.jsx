import {geoSignInGooglePopup,createUserDocFromAuth} from '../../utilities/Firebase/Firebase.js';
import SignUp from "../../components/SignUp/SignUp.jsx";

const SignIn = () => {

    const logGoogleUser = async ()=>{
        const {user} = await geoSignInGooglePopup();
        const userDocRef = await createUserDocFromAuth(user);
    }

    return (
        <div>
            <h1>Welcome To Geodesy Apparels SignIn</h1>
            <button onClick={logGoogleUser}>Sign IN</button>
            <SignUp></SignUp>
        </div>
    );
};

export default SignIn;
