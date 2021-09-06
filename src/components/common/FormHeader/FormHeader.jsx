import './styles/index.scss'

function Login(props) {
    const { title, subtitle } = props;
    return (
        <header className="header-form">
            <h4 className="subtitle">{subtitle}</h4>
            <h2 className="header-form-child">{title}</h2>
        </header>
    )
}

export default Login