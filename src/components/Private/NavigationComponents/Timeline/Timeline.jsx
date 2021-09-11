import Tweets from '../../Tweets/Tweets'
import CreateTweet from '../../CreateTweet/CreateTweet'
import StarsLogo from '../../../../Images/Feed/stars-icon.svg'
import './styles/timeline.scss'

const TimeLine = () => {
    return (
        <div className="Feed">
            <div className="home"><h2>Home</h2><img src={StarsLogo} alt="StarsLogo" width="30" height="30" /></div>
            <CreateTweet/>
            <Tweets/>
        </div>
    )
};
export default TimeLine;