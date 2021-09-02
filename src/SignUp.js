import './SignUp.css';
function SignUp() {
    return (
        <div className="SignUp">
            <header className="SignUp-header"> 
            <h4>My Twitter
            <h2>Create your account</h2>
            Name<br/>
            <input></input><br/>
            Username<br/>
            <input></input><br/>
            Email<br/>
            <input></input><br/>
            Password<br/>
            <input></input><br/>
            Password Confirmation<br/>
            <input></input>
            <br/>
            <button>
                SignUp
            </button><br/>
            Already have an account? <a href="">Login</a></h4>
            </header>
        </div>
    );
}
export default SignUp;