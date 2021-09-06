import Form from '../../common/Form/Form'
import Input from '../../common/Input/Input'
import Button from '../../common/Button/Button'

function Login() {
    return (
        <div className="Form">
         <header className="Form-header">   
            <h4>My Twitter</h4>
            <h2>Login to your account</h2>
            </header>

            <Form>
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
                <a href="">Forgot Password?</a><br/>
                <Button
                    className="primary-button"
                    text="Login now"
                />
            </Form>
            Don't have an account? <a href="">Join free today</a>
        </div>
    );
}
export default Login;