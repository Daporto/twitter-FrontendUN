import './styles/Input.scss'

const Input = (props) => {
    const { type, id, name, value, ...rest } = props;

    return (<div className="div-input">
        <label htmlFor={id} className="label-form form-element">{value}</label><br/>
        <input
            className="form-element"
            type={type}
            id={id}
            name={name}
            placeholder={value}
            {...rest}
        />
    </div>)
};

export default Input;