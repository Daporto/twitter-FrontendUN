import Form from '../../common/Form/Form'
import Input from '../../common/Input/Input'
import Button from '../../common/Button/Button'
import FormHeader from '../../common/FormHeader/FormHeader'
import './styles/index.scss'

function Login() {
    return (
        <div className="container-total">
        <div className="container">
            <div className="div-form">
            <FormHeader
                title="Login to your account"
                subtitle="My Twitter"
            />
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
            </div> 
            <h4 className="secondary-text">Don't have an account? <a href="">Join free today</a></h4>
        </div>
        </div>
    );
}
export default Login;