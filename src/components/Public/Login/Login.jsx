import { Helmet } from 'react-helmet'

import Form from '../../common/Form/Form'
import Input from '../../common/Input/Input'
import Button from '../../common/Button/Button'
import FormHeader from '../../common/FormHeader/FormHeader'
import './styles/Login.scss'

function Login() {
    return (
        <div className="container-total-login">
            <Helmet>
                <title>Twitter Sign in</title>
                <meta
                    name="description"
                    content="Login with your twitter username or email and password"
                />
            </Helmet>
            <div className="container-login">
                <div>
                    <FormHeader
                        title="Login to your account"
                        subtitle="My Twitter"
                    />
                    <Form className="login-form">
                        <Input
                            type="text"
                            name="username"
                            id="username"
                            value="Email or Username"
                            required="required"
                        />
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            value="Password"
                            required="required"
                        />
                        <a href="./login/passwordRecovery">Forgot Password?</a><br />
                        <Button
                            className="primary-button"
                            text="Login now"
                        />
                    </Form>
                </div>
                <h4 className="secondary-text">Don't have an account? <a href="../SignUp">Join free today</a></h4>
            </div>
        </div>
    );
}
export default Login;