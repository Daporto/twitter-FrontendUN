import Form from '../../common/Form/Form'
import Input from '../../common/Input/Input'
import Button from '../../common/Button/Button'
import FormHeader from '../../common/FormHeader/FormHeader'
import './Styles/SignUp.scss'

function SignUp() {
    return (
        <div className="container-total">
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
                />
                <Input
                    type="text"
                    name="username"
                    id="username"
                    value="Username"
                    required="required"
                />
                <Input
                    type="email"
                    name="email"
                    id="email"
                    value="Email"
                    required="required"
                />
                <Input
                    type="password"
                    name="password"
                    id="password"
                    value="Password"
                    required="required"
                />
                <Input
                    type="password"
                    name="passwordConfirmation"
                    id="passwordConfirmation"
                    value="Password Confirmation"
                    required="required"
                />
                <Button
                    className="primary-button"
                    text="SignUp"
                />
            </Form>
            Already have an account? <a href="./Login">Login</a>
        </div>
        </div>
    );
}
export default SignUp;