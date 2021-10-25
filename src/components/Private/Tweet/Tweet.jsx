import { useState } from 'react'
import Comment from '../../../Images/Feed/post/comment.svg'
import Send from '../../../Images/Feed/post/send.svg'
import Retweet from '../../../Images/Feed/post/refreshing.svg'
import Like from '../../../Images/Feed/post/heart.svg'
import Delete from '../../../Images/Feed/post/Delete.svg'
import PLogo from '../../../Images/Feed/user.svg'
import Input from '../../common/Input/Input'
import './styles/tweet.scss'
import { addLikeOrUnlike, createComment, deleteTweet } from '../../../services/tweetServices'
import { successNotification, errorNotification } from '../../../lib/ui/notifications';

const Tweet = (props) => {
    const [tweets, setTweets] = useState([]);
    const { user, tweetContent, likes, tweetId } = props
    const [isLike, setLikes] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [comment, setComment]= useState("");
    const [comments, setComments]= useState([]);
    const userLS = localStorage.getItem("user");
    const userLSjson = JSON.parse(userLS);
    const addLikes = (event) => {

        event.preventDefault();
        addLikeOrUnlike(tweetId, !isLike, userLSjson.token)
            .then((data) => {
                if (data.message === "ok") {
                    !isLike ?
                        successNotification("like was added") :
                        successNotification("like was removed")
                    setLikes(!isLike);
                } else {
                    errorNotification("Algo ha salido mal");
                }
            })
            .catch((err) => {
                errorNotification("Algo ha salido mal");
            });
    }
    const deleteTweets = (value) => {
        console.log("User", user)
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

    const deployComment = (isOpen) => {
        if(!isOpen){
            setIsOpen(true);
            document.getElementById("commentDiv").style.display = "";
        }else{
            document.getElementById("commentDiv").style.display = "none";
            setIsOpen(false);
            }
        return isOpen

    }
    const addComment=(event)=>{
        event.preventDefault();
        if(comment!==""){
            createComment(tweetId, comment, userLSjson.token)
            .then((data) => {
                console.log(data)
                if (data) {
                    let post = data;
                    setComments([post, ...comments]);
                    successNotification("Comentario publicado exitosamente")
                } else {
                    errorNotification("Ha ocurrido un error publicando el comentario")
                }
            })
            .catch((err) => {
                errorNotification("Ha ocurrido un error publicando el comentario")
            });
        }else{
            errorNotification("Campo vacio, por favor rellenar")
        }
    
    }
    return (
        <div className="Feed-container">
            <div className="User">
                <img src={PLogo} alt="UserLogo" width="30" height="30" />
                <h3>{user.name}</h3><h4>@{user.username}</h4>
            </div>
            <h4>{tweetContent}</h4>
            <div className="links">
                <img src={Comment} alt="Comment" width="30" height="30" onClick={deployComment(isOpen)}/>
                <img src={Retweet} alt="Retweet" width="30" height="30" />
                <div  className="likes">
                <img className="likeImage" src={Like} alt="Like" width="30" height="30" onClick={addLikes} />
                <h2>{likes}</h2>
                </div>
                {
                    userLSjson.username === user.username ?
                        <img src={Delete} alt="Delete" width="30" height="30" onClick={deleteTweets} />
                        :
                        <></>
                }
            </div>
            <div className="commentDiv" id="commentDiv">
                    <Input
                        type="text"
                        name="comment"
                        id="comment"
                        placeholder="What do you thing about it?"
                        setState={setComment}
                        state={comment}
                    />
                    <img src={Send} alt="Comment" width="30" height="30" onClick={addComment}/>
                </div>
            
        </div>
    )
};

export default Tweet