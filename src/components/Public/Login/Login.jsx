import '../../../styles/login.css';
function Login() {
    return (
        <div className="Login">
         <header className="Login-header">   
            <h4>My Twitter
            <h2>Login to your account</h2>
            Email or Username<br/>
            <input></input><br/>
            Password<br/>
            <input></input><br/>
            <a href="">Forgot Password?</a><br/>
            <button>
                Login now
            </button><br/>
            Don't have an account? <a href="">Join free today</a></h4>
        </header>
        </div>
    );
}
export default Login;