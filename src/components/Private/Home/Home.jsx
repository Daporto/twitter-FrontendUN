import { Helmet, HelmetProvider } from 'react-helmet-async';

import NavApp from '../NavApp/NavApp'
import HomeRightSide from '../HomeRightSide/HomeRightSide';
import './styles/home.scss'
import { AuthContext } from '../../../context/AuthContext';
import { useContext } from 'react';
import { useHistory } from 'react-router'

const Home = (props) => {
    const {isLogIn} =useContext(AuthContext);
    const Auth = isLogIn();
    const history = useHistory();
    if(!Auth){
        history.push("/");
    };
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