import './styles/FormHeader.scss'
import logoB from '../../../Images/LogoB.svg'
function Login(props) {
    const { title, subtitle } = props;
    return (
        <header className="header-form"> 
            <img src={logoB} alt="LogoB" width="66" height="54"/>   
            <h4 className="subtitle">{subtitle}</h4>
            <h2 className="header-form-child">{title}</h2>
        </header>
    )
}

export default Login