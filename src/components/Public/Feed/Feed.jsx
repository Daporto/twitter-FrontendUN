import './Styles/Feed.scss'
import HLogo from '../../../Images/Feed/home.svg'
import ELogo from '../../../Images/Feed/explore.svg'
import NLogo from '../../../Images/Feed/notification.svg'
import MLogo from '../../../Images/Feed/message.svg'
import BLogo from '../../../Images/Feed/bookmark.svg'
import LLogo from '../../../Images/Feed/list.svg'
import PLogo from '../../../Images/Feed/home.svg'
import MoreLogo from '../../../Images/Feed/more.svg'

function Feed() {
    return (
        <div className="container-total">
        <div className="navigation">
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
           
        </div>
        <div className="Trending">
           <div></div>
           <div></div>
           <div></div>
        </div>
        
        </div>
    );
}
export default Feed;