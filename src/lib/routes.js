
import Login from '../components/Public/Login/Login';
import SignUp from '../components/Public/SignUp/SignUp';
import Home from '../components/Public/Home/Home';
import ForgotPassword from '../components/Public/ForgotPassword/ForgotPassword';
import Timeline from '../components/Private/NavigationComponents/Timeline/Timeline';
import Explore from '../components/Private/NavigationComponents/Explore/Explore';
import Notifications from '../components/Private/NavigationComponents/Notifications/Notifications';
import Messages from '../components/Private/NavigationComponents/Messages/Messages';
import Bookmarks from '../components/Private/NavigationComponents/Bookmarks/Bookmarks';
import Lists from '../components/Private/NavigationComponents/Lists/Lists';
import Profile from '../components/Private/NavigationComponents/Profile/Profile';
import More from '../components/Private/NavigationComponents/More/More';
import HomeApp from '../components/Private/Home/Home'
import Feed from '../components/Public/Feed/Feed';

const routes = {
    restricted: [
        {
            title: "Home",
            path: "/home",
            component: () => {return(<HomeApp><Timeline/></HomeApp>)}
        },
        {
            title: "Explore",
            path: "/home/explore",
            component: () => {return(<HomeApp><Explore/></HomeApp>)}
        },
        {
            title: "Notifications",
            path: "/home/notifications",
            component: () => {return(<HomeApp><Notifications/></HomeApp>)}
        },
        {
            title: "Messages",
            path: "/home/messages",
            component: () => {return(<HomeApp><Messages/></HomeApp>)}
        },
        {
            title: "Bookmarks",
            path: "/home/bookmarks",
            component: () => {return(<HomeApp><Bookmarks/></HomeApp>)}
        },
        {
            title: "Lists",
            path: "/home/lists",
            component: () => {return(<HomeApp><Lists/></HomeApp>)}
        },
        {
            title: "Profile",
            path: "/home/profile",
            component: () => {return(<HomeApp><Profile/></HomeApp>)}
        },
        {
            title: "More",
            path: "/home/more",
            component: () => {return(<HomeApp><More/></HomeApp>)}
        }
    ],
    unrestricted: [
        {
            title: "Home",
            path: "/",
            component: Home,
        },
        {
            title: "Login",
            path: "/login",
            component: Login,
        },
        {
            title: "Sign Up",
            path: "/signup",
            component: SignUp,
        },
        {
            title: "Forgot Password",
            path: "/forgotpassword",
            component: ForgotPassword,
        },
        {
            title: "Feed",
            path: "/feed",
            component: Feed,
        }
    ]
}
export default routes;