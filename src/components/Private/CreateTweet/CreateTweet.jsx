import { useState } from 'react';
import galery from '../../../Images/Feed/tweets/insert-image.svg'
import gif from '../../../Images/Feed/tweets/insert-gif.svg'
import stats from '../../../Images/Feed/tweets/insert-stats.svg'
import emoji from '../../../Images/Feed/tweets/insert-emoji.svg'
import wordsc from '../../../Images/Feed/tweets/right-words.svg'
import line from '../../../Images/Feed/tweets/right-line.svg'
import plus from '../../../Images/Feed/tweets/right-plus.svg'
import Button from '../../common/Button/Button'
import Input from '../../common/Input/Input'
import './styles/createTweet.scss'
import { createTweet } from '../../../services/tweetServices'
import { successNotification, errorNotification } from '../../../lib/ui/notifications';

const CreateTweet = () => {
    const [content, setContent] = useState("");
    const [tweets, setTweets] = useState([]);
    const user = localStorage.getItem("user");
    const tweetCreation = (event) => {
        event.preventDefault();
        createTweet(content, JSON.parse(user).token)
            .then((data) => {
                if (data._id) {
                    let tweet = data;
                    tweet.user = JSON.parse(user);
                    setTweets([tweet, ...tweets]);
                    successNotification("Tweet publicado exitosamente")
                } else {
                    errorNotification("Ha ocurrido un error publicando el tweet")
                }
            })
            .catch((err) => {
                errorNotification("Ha ocurrido un error publicando el tweet")
            });
    }
    return (
        <div className="Feed-insert">

            <div className="Feed-padding">
                <div className="Zone-tweet">
                    <div className="profilepic-tweet"></div>
                    <div className="Insert-post">
                        <Input className="form-element"
                            type="text"
                            id="InsertTw"
                            name="InsertTw"
                            placeholder="What’s happening"
                            setState={setContent}
                            state={content}
                        />
                        <div className="icons-tweet">
                            <div className="left">
                                <img src={galery} alt="galery" width="30" height="30" />
                                <img src={gif} alt="gif" width="30" height="30" />
                                <img src={stats} alt="stats" width="30" height="30" />
                                <img src={emoji} alt="emoji" width="30" height="30" />
                            </div>
                            <div className="right">
                                <img src={wordsc} alt="wordsc" width="30" height="30" />
                                <img src={line} alt="line" width="30" height="30" />
                                <img src={plus} alt="plus" width="30" height="30" />
                                <Button className="primary-button" text="Tweet" onClick={tweetCreation} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CreateTweet;