import Tweets from '../../Tweets/Tweets'
import CreateTweet from '../../CreateTweet/CreateTweet'

const TimeLine = () => {
    return (
        <div className="Feed">
            <CreateTweet/>
            <Tweets/>
        </div>
    )
};
export default TimeLine;