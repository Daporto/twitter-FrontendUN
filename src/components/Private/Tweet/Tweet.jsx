import Comment from '../../../Images/Feed/post/comment.svg'
import Retweet from '../../../Images/Feed/post/refreshing.svg'
import Like from '../../../Images/Feed/post/heart.svg'
import Upload from '../../../Images/Feed/post/upload.svg'
import PLogo from '../../../Images/Feed/user.svg'

const Tweet = (props) => {
    const {user, tweetContent} = props

    return (
        <div className="Feed-container">
               <div className="User">
                <img src={PLogo} width="30" height="30"/>
               <h3>{user}</h3><h4>@{user}</h4>
               </div>
               <h4>{tweetContent}</h4>
               <div className="links">
                    <img src={Comment} alt="Comment" width="30" height="30"/>
                    <img src={Retweet} alt="Retweet" width="30" height="30"/>
                    <img src={Like} alt="Like" width="30" height="30"/>
                    <img src={Upload} alt="Upload" width="30" height="30"/>
                </div>
            </div>
    )
};

export default Tweet