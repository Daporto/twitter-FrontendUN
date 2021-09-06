//import './styles/index.scss'

const Form = ({ children, ...rest }) => <form {...rest}>
    {children}
</form>;

export default Form;