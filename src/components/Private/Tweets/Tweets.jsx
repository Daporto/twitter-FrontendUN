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
            let array = Object.keys(listTweets).map((key) => [Number(key), listTweets[key]]);
            setTweets(array);
        });
    }, [])
    return (
        <div className="Feed-padding">
            {tweets.map((item) => {
                let { content, user, createdAt, likes, _id } = item[1];
                console.log(content);
                console.log(user);
                console.log(createdAt);
                console.log(likes);
                console.log(_id);
              return (
                 <Tweet user={user} tweetContent={content} likes={likes} tweetId={_id} Date={createdAt}/>
                
              )})}
            
        </div>
    )
};

export default Tweets