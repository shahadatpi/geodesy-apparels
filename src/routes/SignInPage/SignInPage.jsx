import SignUp from "../../components/SignUp/SignUp.jsx";
import SignInForm from "../../components/SignInForm/SignInForm.jsx";
import './SignInPage.scss';

const SignInPage = () => {
    return (
        <div className='sign-in-container'>

            <SignInForm/>
            <SignUp/>
        </div>
    );
};

export default SignInPage;
