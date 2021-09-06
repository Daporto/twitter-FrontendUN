import logo from './logo.svg';
//import '../../../styles/home.scss';
import Button from '../../common/Button/Button';
import './styles/index.scss'

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <div className="Home-content-left">
          {/*<img src={logo} className="App-logo" alt="logo" /> */}
        </div>
        <div className="Home-content-right">
          <img src="\Twitter-logo1.png" />
          <h1>
            Welcome to twitter.
          </h1>

          <Button
            className="white-button"
            text="Login now"
          />
          <h4>Don't have an account? <a href="">Join free today</a></h4>
          <Button
            className="white-button"
            text="Sign Up"
          />
        </div>
      </header>
    </div>
  );
}

export default Home;
