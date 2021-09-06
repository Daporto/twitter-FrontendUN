import './styles/Button.scss';

const Button = (props) => {
    const { className, text, ...rest } = props;
    return (
        <button className={className}>{text}</button>
    )
};

export default Button;