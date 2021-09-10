import createTweet from '../../CreateTweet/CreateTweet'
import Tweets from '../../Tweets/Tweets'

const TimeLine = () => {
    return (
        <div className="container-total">
            <createTweet/>
            <Tweets/>
        </div>
    )
};
export default TimeLine;