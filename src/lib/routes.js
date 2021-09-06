
import Login from '../components/Public/Login/Login';
import SignUp from '../components/Public/SignUp/SignUp';
import Home from '../components/Public/Home/Home';
import ForgotPassword from '../components/Public/ForgotPassword/ForgotPassword';

const routes = {
    unrestricted: [
        {
            title: "Home",
            path: "/",
            component: Home,
        },
        {
            title: "Login",
            path: "/login",
            component: Login,
        },
        {
            title: "Sign Up",
            path: "/signup",
            component: SignUp,
        },
        {
            title: "Forgot Password",
            path: "/forgotpassword",
            component: ForgotPassword,
        }
    ]
}
export default routes;