import './Styles/Feed.scss'
import Logo from '../../../Images/LogoB.svg'
import HLogo from '../../../Images/Feed/home.svg'
import ELogo from '../../../Images/Feed/explore.svg'
import NLogo from '../../../Images/Feed/notification.svg'
import MLogo from '../../../Images/Feed/message.svg'
import BLogo from '../../../Images/Feed/bookmark.svg'
import LLogo from '../../../Images/Feed/list.svg'
import PLogo from '../../../Images/Feed/user.svg'
import MoreLogo from '../../../Images/Feed/more.svg'
import Comment from '../../../Images/Feed/post/comment.svg'
import Retweet from '../../../Images/Feed/post/refreshing.svg'
import Like from '../../../Images/Feed/post/heart.svg'
import Upload from '../../../Images/Feed/post/upload.svg'

function Feed() {
    return (
        <div className="container-total">
        <div className="navigation">
            <img src={Logo} width="50" height="50"/>
            <div><img src={HLogo} width="30" height="30"/><h2>Home</h2></div>
            <div><img src={ELogo} width="30" height="30"/><h2>Explore</h2></div>
            <div><img src={NLogo} width="30" height="30"/><h2>Notifications</h2></div>
            <div><img src={MLogo} width="30" height="30"/><h2>Messages</h2></div>
            <div><img src={BLogo} width="30" height="30"/><h2>Bookmarks</h2></div>
            <div><img src={LLogo} width="30" height="30"/><h2>List</h2></div>
            <div><img src={PLogo} width="30" height="30"/><h2>Profile</h2></div>
            <div><img src={MoreLogo} width="30" height="30"/><h2>More</h2></div>
        </div>
        <div className="Feed">
           <div className="Feed-container">
               <div className="User">
                <img src={PLogo} width="30" height="30"/>
               <h3>User</h3><h4>@user</h4>
               </div>
               <h4> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                   incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                   exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                   dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                   Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                    id est laborum.</h4>
               <div className="links">
                    <img src={Comment} width="30" height="30"/>
                    <img src={Retweet} width="30" height="30"/>
                    <img src={Like} width="30" height="30"/>
                    <img src={Upload} width="30" height="30"/>
                </div>
           </div>
        </div>
        <div className="Trending">
           <div className="search"><input></input></div>
           <div className="trends">
               <div>
               </div>
           </div>
           <div></div>
        </div>
        
        </div>
    );
}
export default Feed;