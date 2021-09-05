import logo from './logo.svg';
import '../../../styles/home.css';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <div className="Home-content-left">
       {/*<img src={logo} className="App-logo" alt="logo" /> */}
        </div>
        <div className="Home-content-right">
          <img src="\Twitter-logo1.png"/>
          <h2>
            Welcome to twitter.
          </h2>
            
            <button>Login now</button>
            <h4>Don't have an account? <a href="">Join free today</a></h4>
            <button>Sign Up</button>
          
        </div>
      </header>
    </div>
  );
}

export default Home;
