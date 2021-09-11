import Trend from '../Trend/Trend'
import ConfigLogo from '../../../Images/Feed/config-icon.svg'
import './styles/Trending.scss'
const Trending = () => {
    return (
        <div className="trend">
            <div className="trendTitle"><h3>Colombian Trends</h3> <img src={ConfigLogo} alt="SearchLogo" width="30" height="30" /></div>
            <div className="ntrends">
            <Trend trendingNumber="1" hashtag="#JessieMueller" tweets="456K"/>
            <Trend trendingNumber="1" hashtag="#JessieMueller" tweets="456K"/>
            <Trend trendingNumber="1" hashtag="#JessieMueller" tweets="456K"/>
            <Trend trendingNumber="1" hashtag="#JessieMueller" tweets="456K"/>
            </div>
        </div>
    )
};

export default Trending