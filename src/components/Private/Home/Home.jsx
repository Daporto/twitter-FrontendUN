import NavApp from '../NavApp/NavApp'
import { restricted } from '../../../lib/routes'
import HomeRightSide from '../HomeRightSide/HomeRightSide';

const Home = (props) => {
    const { children } = props
    return (
        <div>
            <NavApp />
            {children}
            <HomeRightSide />
        </div>
    )
};
export default Home;