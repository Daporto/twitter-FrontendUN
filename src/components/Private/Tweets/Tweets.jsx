import { useState } from 'react';
import Tweet from '../Tweet/Tweet'
import { getTweetsByUser } from '../../../services/tweetServices';
import { useEffect } from 'react';

const Tweets = () => {
    let [tweets, setTweets] = useState([]);
    useEffect(() => {
        let dataUser = localStorage.getItem("user");
        getTweetsByUser(JSON.parse(dataUser).token).then((data) => {
            let listTweets = data.data;
            setTweets(listTweets);
        }, []);
    })
    return (
        <div className="Feed-padding">
            {
                tweets.map(({ content, user, likes, _id, createdAt }) =>
                    <Tweet key={_id} user={user} tweetContent={content} like={likes} tweetId={_id} Date={createdAt} />
                )
            }
        </div>
    )
};

export default Tweets