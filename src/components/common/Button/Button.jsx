import './styles/Button.scss';

const Button = (props) => {
    const { className, text, ...rest} = props;
    return (
        <button className={className} {...rest}>{text}</button>
    )
};

export default Button;