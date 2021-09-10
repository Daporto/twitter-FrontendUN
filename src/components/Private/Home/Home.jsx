import NavApp from '../NavApp/NavApp'
import HomeRightSide from '../HomeRightSide/HomeRightSide';
import './styles/home.scss'

const Home = (props) => {
    const { children } = props
    return (
        <div className="container-total">
            <NavApp />
            {children}
            <HomeRightSide />
        </div>
    )
};
export default Home;