import { useState, useContext} from "react";
import {geoCreateUserDocumentFromAuth, geoCreateAuthUserWithEmailAndPassword} from "../../Utilities/Firebase/Firebase.js";
import InputForm from "../InputForm/InputForm.jsx";
import './SignUp.scss'
import Button from "../Button/Button.jsx";
import {UserContex} from "../../contex/UserContex.jsx";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}
const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('passwords do not match');
            return;
        }

        try {
            const { user } = await geoCreateAuthUserWithEmailAndPassword(
                email,
                password
            );

            await geoCreateUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            } else {
                console.log('user creation encountered an error', error);
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    };
    return (
        <div className='sign-up-container'>
            <h1>Don't have an account?</h1>
            <span>SignUp With Your Email And Password</span>
            <form onSubmit={handleSubmit} >

                <InputForm label="Display Name" type="text" onChange={handleChange} name="displayName" value={displayName} required />

                <InputForm label="Email" type="email" onChange={handleChange} name="email" value={email} required/>

                <InputForm label="Password" type="password" onChange={handleChange} name="password" value={password} required/>

                <InputForm label="Confirm Password" type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword} required/>
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    );
};

export default SignUp;
