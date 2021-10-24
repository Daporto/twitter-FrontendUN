import { Helmet, HelmetProvider } from 'react-helmet-async';

import Form from '../../common/Form/Form'
import Input from '../../common/Input/Input'
import Button from '../../common/Button/Button'
import FormHeader from '../../common/FormHeader/FormHeader'
import './styles/passwordRecovery.scss'

function PasswordRecovery() {
    return (
        <HelmetProvider>
        <div className="FP">
            <Helmet>
                <title>Password recovery</title>
                <meta
                    name="description"
                    content="You can reset your password entering your email"
                />
            </Helmet>
            <div className="container">
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
            <h4 className="secondary-text">Return to <a href="../Login">Login</a></h4>
            </div>
        </div>
        </HelmetProvider>
    );
}
export default PasswordRecovery;