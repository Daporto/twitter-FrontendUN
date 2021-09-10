import { Link } from 'react-router-dom';
import routes from '../../../lib/routes'
import './styles/navApp.scss'
import HLogo from '../../../Images/Feed/home.svg'
import ELogo from '../../../Images/Feed/explore.svg'
import NLogo from '../../../Images/Feed/notification.svg'
import MLogo from '../../../Images/Feed/message.svg'
import BLogo from '../../../Images/Feed/bookmark.svg'
import LLogo from '../../../Images/Feed/list.svg'
import PLogo from '../../../Images/Feed/user.svg'
import MoreLogo from '../../../Images/Feed/more.svg'

const NavApp = () => {
    const { restricted } = routes;
    const icons = [HLogo,ELogo,NLogo,MLogo,BLogo,LLogo,PLogo,MoreLogo]
    return (
        <div className="navigation">
            <nav>
                <ul>
                    {
                        restricted.map(({ path, title }, index) =>
                            <div>
                                <img src={icons[index]} width="30" height="30"/>
                                <li>
                                    <h2>
                                        <Link to={path}>{title}</Link>
                                    </h2>
                                </li>
                            </div>)
                    }
                </ul>
            </nav>
        </div>
    );
}

export default NavApp;