function Login(props) {
    const { title, subtitle } = props;
    return (
        <header>
            <h4>{subtitle}</h4>
            <h2>{title}</h2>
        </header>
    )
}

export default Login