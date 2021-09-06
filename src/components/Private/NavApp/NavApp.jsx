import { Link } from 'react-router-dom';
import routes from '../../../lib/routes'
import './styles/navApp.scss'

const NavApp = () => {
    const { restricted } = routes;

    return (
        <div className="navigation">
            <nav>
                <ul>
                    {
                        restricted.map(({ path, title }) =>
                            <div>
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