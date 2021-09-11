import { Helmet } from 'react-helmet'

import NavApp from '../NavApp/NavApp'
import HomeRightSide from '../HomeRightSide/HomeRightSide';
import './styles/home.scss'

const Home = (props) => {
    const { children, selectedPath } = props
    return (
        <div className="container-total">
            <Helmet>
                <title>Home</title>
                <meta
                    name="description"
                    content="See and search tweets of all people you are following. Here you can see the top trending topic also"
                />
            </Helmet>
            <NavApp selectedPath={selectedPath}/>
            {children}
            <HomeRightSide />
        </div>
    )
};
export default Home;