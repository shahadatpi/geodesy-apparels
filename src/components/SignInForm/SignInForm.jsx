import { useState} from "react";
import {geoCreateUserDocumentFromAuth, geoSignInWithGooglePopup, geoSignInAuthUserWithEmailAndPassword} from "../../utilities/Firebase/Firebase.js";
import InputForm from "../InputForm/InputForm.jsx";
import './SignInForm.scss'
import Button from "../Button/Button.jsx";

const defaultFormFields = {
    email: '',
    password: '',
}
const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password} = formFields;
    const resetFormFields = () =>{
        setFormFields(defaultFormFields);
    }
    const logGoogleUser = async ()=>{
        const {user} = await geoSignInWithGooglePopup();
        await geoCreateUserDocumentFromAuth(user);
    }

    const handleChange = (e)=>{

        const {name, value} = e.target
        setFormFields({...formFields, [name]:value});
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();

        try {
            const response = await geoSignInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
            console.log(response);
        }catch (error){
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Incorrect password');
                    break;
                case 'auth/user-not-found':
                    alert('This user does not exists!');
                    break;
                default:
                    console.log(error);
            }
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
                     <Button type='button' buttonType='google' onClick={logGoogleUser} >Google Sign In</Button>
                 </div>
            </form>
        </div>
    );
};

export default SignInForm;
