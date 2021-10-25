import Comment from '../../../Images/Feed/post/comment.svg'
import Retweet from '../../../Images/Feed/post/refreshing.svg'
import Like from '../../../Images/Feed/post/heart.svg'
import Delete from '../../../Images/Feed/post/Delete.svg'
import PLogo from '../../../Images/Feed/user.svg'
import './styles/tweet.scss'
import { useState } from 'react'
import { addLikeOrDislike, deleteTweet } from '../../../services/tweetServices'
const Tweet = (props) => {
    const [tweets, setTweets] = useState([]);
    const {user, tweetContent, like, tweetId} = props
    const [likes, setLikes]= useState(false);
    const addLikes = (event) => {
        event.preventDefault();
        addLikeOrDislike(tweetId , likes, JSON.parse(user).token)
          .then((data) => {
              setLikes(!like);
          })
          .catch((err) => {
           
          });
      }
      const deleteTweets = (value) => {
        deleteTweet(tweetId, JSON.parse(user).token)
        .then((data) => {
            if (data.ok) {
            let tweetsFiltered = tweets.filter((item) => item._id !== tweetId);
            setTweets(tweetsFiltered);
            
            } else {
            
            }
        })
      .catch((err) => {
      });
    };
    return (
        <div className="Feed-container">
               <div className="User">
                <img src={PLogo} alt="UserLogo" width="30" height="30"/>
               <h3>{user.name}</h3><h4>@{user.username}</h4>
               </div>
               <h4>{tweetContent}</h4>
               <div className="links">
                    <img src={Comment} alt="Comment" width="30" height="30"/>
                    <img src={Retweet} alt="Retweet" width="30" height="30"/>
                    <img src={Like} alt="Like" width="30" height="30" onClick={addLikes}/>
                    <img src={Delete} alt="Delete" width="30" height="30"onClick={deleteTweets}/>
                </div>
            </div>
    )
};

export default Tweet