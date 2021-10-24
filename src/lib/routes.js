
import Login from '../components/Public/Login/Login';
import SignUp from '../components/Public/SignUp/SignUp';
import LandingPage from '../components/Public/LandingPage/LandingPage';
import PasswordRecovery from '../components/Public/PasswordRecovery/PasswordRecovery';
import Timeline from '../components/Private/NavigationComponents/Timeline/Timeline';
import Explore from '../components/Private/NavigationComponents/Explore/Explore';
import Notifications from '../components/Private/NavigationComponents/Notifications/Notifications';
import Messages from '../components/Private/NavigationComponents/Messages/Messages';
import Bookmarks from '../components/Private/NavigationComponents/Bookmarks/Bookmarks';
import Lists from '../components/Private/NavigationComponents/Lists/Lists';
import Profile from '../components/Private/NavigationComponents/Profile/Profile';
import More from '../components/Private/NavigationComponents/More/More';
import HomeApp from '../components/Private/Home/Home'

const routes = {
    restricted: [
        {
            title: "Home",
            path: "/home",
            component: () => {return(<HomeApp selectedPath="/home"><Timeline/></HomeApp>)}
        },
        {
            title: "Explore",
            path: "/explore",
            component: () => {return(<HomeApp selectedPath="/explore"><Explore/></HomeApp>)}
        },
        {
            title: "Notifications",
            path: "/notifications",
            component: () => {return(<HomeApp selectedPath="/notifications"><Notifications/></HomeApp>)}
        },
        {
            title: "Messages",
            path: "/messages",
            component: () => {return(<HomeApp selectedPath="/messages"><Messages/></HomeApp>)}
        },
        {
            title: "Bookmarks",
            path: "/bookmarks",
            component: () => {return(<HomeApp selectedPath="/bookmarks"><Bookmarks/></HomeApp>)}
        },
        {
            title: "Lists",
            path: "/lists",
            component: () => {return(<HomeApp selectedPath="/lists"><Lists/></HomeApp>)}
        },
        {
            title: "Profile",
            path: "/profile",
            component: () => {return(<HomeApp selectedPath="/profile"><Profile/></HomeApp>)}
        },
        {
            title: "Show more",
            path: "/more",
            component: () => {return(<HomeApp selectedPath="/more"><More/></HomeApp>)}
        }
    ],
    unrestricted: [
        {
            title: "Landing Page",
            path: "/",
            component: LandingPage,
        },
        {
            title: "Login",
            path: "/login",
            component: Login,
        },
        {
            title: "Password Recovery",
            path: "/login/passwordRecovery",
            component: PasswordRecovery,
        },
        {
            title: "Sign Up",
            path: "/signup",
            component: SignUp,
        }
    ]
}
export default routes;