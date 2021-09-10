import Tweets from '../../Tweets/Tweets'
import CreateTweet from '../../CreateTweet/CreateTweet'
import './styles/timeline.scss'

const TimeLine = () => {
    return (
        <div className="Feed">
            <h2>Home</h2>
            <CreateTweet/>
            <Tweets/>
        </div>
    )
};
export default TimeLine;