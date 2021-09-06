import { Link } from 'react-router-dom';
import routes from '../../../lib/routes'

const NavApp = () => {
    const { restricted } = routes;

    return (
        <nav>
            <ul>
                {
                    restricted.map(({ path, title }) =>
                        <li><Link to={path}>{title}</Link></li>)
                }
            </ul>
        </nav>
    );
}

export default NavApp;