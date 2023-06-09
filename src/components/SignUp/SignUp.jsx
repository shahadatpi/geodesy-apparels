import { useState} from "react";
import {geoEmailPassUser} from "../../utilities/Firebase/Firebase.js";
import InputForm from "../InputForm/InputForm.jsx";
import './SignUp.scss'
import Button from "../Button/Button.jsx";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}
const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const handleChange = (e)=>{

       const {name, value} = e.target
        setFormFields({...formFields, [name]:value});
    }
    const handleSubmit = async (e)=>{
         e.preventDefault();
         if (password !== confirmPassword){
             alert("Password does not match!");
             return;
         }
         try {
             const response = await geoEmailPassUser(email, password);
             console.log(response)
         }catch (error){
             console.log(error);
         }
    }
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
