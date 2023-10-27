import { useState} from "react";
import InputForm from "../InputForm/InputForm.jsx";
import './SignInForm.scss'
import Button, {BUTTON_TYPE_CLASSES} from "../Button/Button.jsx";
import {useDispatch} from "react-redux";
import {emailSignInStart, googleSignIn} from "../../Store/User/userAction.js";

const defaultFormFields = {
    email: '',
    password: '',
}
const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password} = formFields;
    const dispatch = useDispatch();

    const resetFormFields = () =>{
        setFormFields(defaultFormFields);
    }
    const logGoogleUser = async ()=>{
        dispatch(googleSignIn());
    }

    const handleChange = (e)=>{

        const {name, value} = e.target
        setFormFields({...formFields, [name]:value});
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();

        try {
           dispatch(emailSignInStart(email, password));
            resetFormFields();

        }catch (error){
            console.log('User SignIn Error!', error);
        }
    }

    return (
        <div className='sign-in-form-container'>
            <h1>Already have an account?</h1>
            <span>SignIn With Your Email And Password</span>
            <form onSubmit={handleSubmit} >


                <InputForm label="Email" type="email" onChange={handleChange} name="email" value={email} required/>

                <InputForm label="Password" type="password" onChange={handleChange} name="password" value={password} required/>
                 <div className='buttons-container'>
                     <Button type="submit">Sign In</Button>
                     <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={logGoogleUser} >Google Sign In</Button>
                 </div>
            </form>
        </div>
    );
};

export default SignInForm;
