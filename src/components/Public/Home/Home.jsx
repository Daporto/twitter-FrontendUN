import logoW from '../../../Images/LogoW.svg';
import logoB from '../../../Images/LogoB.svg';
//import '../../../styles/home.scss';
import Button from '../../common/Button/Button';
import './styles/Home.scss'

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
      <div className="Home-content-left">
        <img src={logoW} className="LogoW" alt="logo"/> 
        </div> 
          <div className="Home-content-right">
          <img src={logoB} alt="logo" width="66" height="54"/> 
          <h1>
            Welcome to twitter.
          </h1>

          <Button
            className="white-button"
            text="Login now"
          />
          <h4 className="secondary-color">Don't have an account? <a href="./SignUp">Join free today</a></h4>
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
