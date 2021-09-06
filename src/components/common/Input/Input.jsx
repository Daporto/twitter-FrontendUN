import './styles/index.scss'

const Input = (props) => {
    const { type, id, name, value, ...rest } = props;

    return (<div>
        <label htmlFor={id} className="label-form">{value}</label><br/>        
        <input
            type={type}
            id={id}
            name={name}
            placeholder={value}
            {...rest}
        />
    </div>)
};

export default Input;