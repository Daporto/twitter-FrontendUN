import { useState } from 'react'

import Comment from '../../../Images/Feed/post/comment.svg'
import Retweet from '../../../Images/Feed/post/refreshing.svg'
import Like from '../../../Images/Feed/post/heart.svg'
import Delete from '../../../Images/Feed/post/Delete.svg'
import PLogo from '../../../Images/Feed/user.svg'
import './styles/tweet.scss'
import { addLikeOrUnlike, deleteTweet } from '../../../services/tweetServices'
import { successNotification, errorNotification } from '../../../lib/ui/notifications';
const Tweet = (props) => {
    const [tweets, setTweets] = useState([]);
    const { user, tweetContent, like, tweetId } = props
    const [likes, setLikes] = useState(false);
    const userLS = localStorage.getItem("user");
    const userLSjson = JSON.parse(userLS);
    const addLikes = (event) => {
        event.preventDefault();
        addLikeOrUnlike(tweetId, likes, JSON.parse(user).token)
            .then((data) => {
                setLikes(!like);
            })
            .catch((err) => {

            });
    }
    const deleteTweets = (value) => {
        console.log("User",user)
        deleteTweet(tweetId, userLSjson.token)
            .then((data) => {
                console.log("la data:", data)
                if (data.id) {
                    let tweetsFiltered = tweets.filter((item) => item._id !== tweetId);
                    setTweets(tweetsFiltered);
                    successNotification("Operación de eliminado exitosa")
                } else {
                    errorNotification("No autorizado para realizar esta operación")
                }
            })
            .catch((err) => {
                errorNotification("Algo ha salido mal")
            });
    };
    return (
        <div className="Feed-container">
            <div className="User">
                <img src={PLogo} alt="UserLogo" width="30" height="30" />
                <h3>{user.name}</h3><h4>@{user.username}</h4>
            </div>
            <h4>{tweetContent}</h4>
            <div className="links">
                <img src={Comment} alt="Comment" width="30" height="30" />
                <img src={Retweet} alt="Retweet" width="30" height="30" />
                <img src={Like} alt="Like" width="30" height="30" onClick={addLikes} />
                {
                userLSjson.username===user.username?
                <img src={Delete} alt="Delete" width="30" height="30" onClick={deleteTweets} />
                :
                <></>
                }
            </div>
        </div>
    )
};

export default Tweet