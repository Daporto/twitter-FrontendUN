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
import image from  '../../../Images/Feed/tweets/insert-image.svg'
import gif from  '../../../Images/Feed/tweets/insert-gif.svg'
import stats from  '../../../Images/Feed/tweets/insert-stats.svg'
import emoji from  '../../../Images/Feed/tweets/insert-emoji.svg'
import wordsc from  '../../../Images/Feed/tweets/right-words.svg'
import line from  '../../../Images/Feed/tweets/right-line.svg'
import plus from  '../../../Images/Feed/tweets/right-plus.svg'
import Button from '../../common/Button/Button'


function Feed() {
    return (
        <div className="container-total">
        <div className="navigation">
            <img  src={Logo} width="50" height="50"/>
            <div ><img  src={HLogo} width="30" height="30"/><h3><h>Home</h></h3></div>
            <div><img src={ELogo} width="30" height="30"/><h3>Explore</h3></div>
            <div><img src={NLogo} width="30" height="30"/><h3>Notifications</h3></div>
            <div><img src={MLogo} width="30" height="30"/><h3>Messages</h3></div>
            <div><img src={BLogo} width="30" height="30"/><h3>Bookmarks</h3></div>
            <div><img src={LLogo} width="30" height="30"/><h3>List</h3></div>
            <div><img src={PLogo} width="30" height="30"/><h3>Profile</h3></div>
            <div><img src={MoreLogo} width="30" height="30"/><h3>More</h3></div>
            <Button className="primary-button" text="Tweet"/>
        </div>
        <div className="Feed">
           <div className="Feed-insert">
               <h2>Home</h2>
           <div className="Feed-padding">
               <div className="Zone-tweet">
                   <div className="profilepic-tweet"></div>
                    <div className="Insert-post"><input type="text" name="" id="" />
                        <div className="icons-tweet">
                           <div className="left">
                                <img  src={image} width="30" height="30"/>
                                <img  src={gif} width="30" height="30"/>
                                <img  src={stats} width="30" height="30"/>
                                <img  src={emoji} width="30" height="30"/>
                           </div>
                            <div className="right">
                                <img  src={wordsc} width="30" height="30"/>
                                <img  src={line} width="30" height="30"/>
                                <img  src={plus} width="30" height="30"/>
                                <Button className="primary-button" text="Tweet"/>
                            </div>
                        </div>
                    </div>
               </div>
           </div>
        </div>
            <div className="Feed-padding">
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
        </div>
        <div className="Trending">
           <div className="search"><input></input></div>
           <div className="trends">
               <div>
                   <div><h3>Colombian Trends</h3></div>
                   <div><h4>1.Trending
                   <h3>#UniversidadDelNorte</h3>
                   465k tweets</h4>
                   </div>
                   <div><h4>2.Trending
                   <h3>#FacultadDeIngenierias</h3>
                   465k tweets</h4>
                   </div>
                   <div><h4>3.Trending
                   <h3>#IngenieriaDeSistemas</h3>
                   465k tweets</h4>
                   </div>
                   <div><h4>4.Trending
                   <h3>#DepartamentoDeSistemas</h3>
                   465k tweets</h4>
                   </div>
                   <div><h4>5.Trending
                   <h3>#EstudiantesDeIngenieriasUN</h3>
                   465k tweets</h4>
                   </div>
               </div>
           </div>
           <div></div>
        </div>
        
        </div>
    );
}
export default Feed;