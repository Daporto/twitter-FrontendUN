import { Helmet, HelmetProvider } from 'react-helmet-async';

import NavApp from '../NavApp/NavApp'
import HomeRightSide from '../HomeRightSide/HomeRightSide';
import './styles/home.scss'


const Home = (props) => {

    const { children, selectedPath } = props;
    
    return (
        <HelmetProvider>
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
        </HelmetProvider>
    )
};
export default Home;