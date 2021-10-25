import { useState } from 'react';
import Tweet from '../Tweet/Tweet'
import { getTweetsByUser } from '../../../services/tweetServices';
import { useEffect } from 'react';

const Tweets = () => {
    const [tweets, setTweets] = useState([]);
    useEffect(() => {
        let dataUser = localStorage.getItem("user");
        getTweetsByUser(JSON.parse(dataUser).token).then((data) => {
            let listTweets = data.data;
            console.log(Object.keys(listTweets).map((key) => [Number(key), listTweets[key]]))
            setTweets(Object.keys(listTweets).map((key) => [Number(key), listTweets[key]]));
        });
    }, [])
    return (
        <div className="Feed-padding">
            {tweets.map(( { content, user, likes, _id, updateAt }) =>
            <Tweet user={user} tweetContent={content} likes={likes} tweetId={_id} Date={updateAt}/>) }
            
        </div>
    )
};

export default Tweets