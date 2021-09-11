import { Link } from 'react-router-dom';
import routes from '../../../lib/routes'
import './styles/navApp.scss'
import Logo from '../../../Images/LogoB.svg'
import HLogo from '../../../Images/Feed/home.svg'
import ELogo from '../../../Images/Feed/explore.svg'
import NLogo from '../../../Images/Feed/notification.svg'
import MLogo from '../../../Images/Feed/message.svg'
import BLogo from '../../../Images/Feed/bookmark.svg'
import LLogo from '../../../Images/Feed/list.svg'
import PLogo from '../../../Images/Feed/user.svg'
import MoreLogo from '../../../Images/Feed/more.svg'
import Button from '../../common/Button/Button'

const NavApp = (props) => {
    //const {selectedPath} = props;
    const { restricted } = routes;
    const icons = [HLogo, ELogo, NLogo, MLogo, BLogo, LLogo, PLogo, MoreLogo]
    return (
        <div className="navigation">
            <nav>
                <img src={Logo} alt="LogoTwHome" width="50" height="50" />
                <ul>
                    {
                        restricted.map(({ path, title }, index) =>
                            <div>
                                <img src={icons[index]} alt={title} width="30" height="30" />
                            <li key={"nav-item-"+index.toString()}>
                                    <h2>
                                        <Link to={path}>{title}</Link>
                                    </h2>
                                </li>
                            </div>)
                    }
                </ul>
                <Button className="primary-button" text="Tweet"/>
            </nav>
        </div>
    );
}

export default NavApp;