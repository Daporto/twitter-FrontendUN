import './styles/page.scss'

const Page = (props) => {
    const {title} = props
    return (
        <div className="central-container">
            <h2 className="title">{title}</h2>
        </div>
    )
};
export default Page;