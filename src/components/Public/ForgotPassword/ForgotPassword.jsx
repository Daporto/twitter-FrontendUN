import Form from '../../common/Form/Form'
import Input from '../../common/Input/Input'
import Button from '../../common/Button/Button'
import FormHeader from '../../common/FormHeader/FormHeader'

function ForgetPw() {
    return (
        <div>
            <FormHeader
                title="Recover your password"
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