import { Helmet, HelmetProvider } from 'react-helmet-async';
import {useState} from 'react';
import { signUp } from '../../../services/userServices';
import Form from '../../common/Form/Form'
import Input from '../../common/Input/Input'
import Button from '../../common/Button/Button'
import FormHeader from '../../common/FormHeader/FormHeader'
import './Styles/SignUp.scss'
import {NotificationContainer, NotificationManager} from 'react-notifications';

function SignUp() {
    const [username, setUsername]= useState("");
    const [name, setName]= useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [passwordConfirmation, setPasswordConfirmation]= useState("");
    
    const handleSignUp = (event) =>{
        event.preventDefault();
        signUp(name, username, email, password, passwordConfirmation)
        .then((user)=>{
            alert("El usuario "+ username +" fue creado exitosamente");
            console.log("user", user);
        })
        .catch((err)=>{
            console.log("err",err);
            alert("Error: ",err)
        });
    };
    return (
        <HelmetProvider>
        <div className="container-total-signup">
            <Helmet>
                <title>Sign up</title>
                <meta
                    name="description"
                    content="Create a twitter account. Join now!"
                />
            </Helmet>
        <div className="container">
            <FormHeader
                title="Create your account"
                subtitle="My Twitter"
            />
            <Form>
                <Input
                    type="text"
                    name="name"
                    id="name"
                    value="Name"
                    required="required"
                    setState={setName}
                    state={name}
                />
                <Input
                    type="text"
                    name="username"
                    id="username"
                    value="Username"
                    required="required"
                    setState={setUsername}
                    state={username}
                />
                <Input
                    type="email"
                    name="email"
                    id="email"
                    value="Email"
                    required="required"
                    setState={setEmail}
                    state={email}
                />
                <Input
                    type="password"
                    name="password"
                    id="password"
                    value="Password"
                    required="required"
                    setState={setPassword}
                    state={password}
                />
                <Input
                    type="password"
                    name="passwordConfirmation"
                    id="passwordConfirmation"
                    value="Password Confirmation"
                    required="required"
                    setState={setPasswordConfirmation}
                    state={passwordConfirmation}
                />
                <Button
                    className="primary-button"
                    text="SignUp"
                    onClick={handleSignUp}
                />
            </Form>
            Already have an account? <a href="./Login">Login</a>
        </div>
        </div>
        </HelmetProvider>
    );
}
export default SignUp;