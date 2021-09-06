import Form from '../../common/Form/Form'
import Input from '../../common/Input/Input'
import Button from '../../common/Button/Button'

function ForgetPw() {
    return (
        <div>
            <header className="Form-header">
                <h4>My Twitter</h4>
                <h2>Recover your password</h2>
            </header>
            <Form>
                <Input
                    type="text"
                    name="username"
                    id="username"
                    value="Email or Username"
                    required="required"
                />                
                <Button
                    className="primary-button"
                    text="Recover your password"
                />
            </Form>           
            Return to <a href="">Login</a>
        </div>
    );
}
export default ForgetPw;