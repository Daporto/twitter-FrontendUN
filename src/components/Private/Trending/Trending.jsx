import Trend from '../Trend/Trend'

const Trending = () => {
    return (
        <div className="trends">
            <div><h3>Colombian Trends</h3></div>
            <div>
            <Trend trendingNumber="1" hashtag="#JessieMueller" tweets="456K"/>
            <Trend trendingNumber="1" hashtag="#JessieMueller" tweets="456K"/>
            <Trend trendingNumber="1" hashtag="#JessieMueller" tweets="456K"/>
            <Trend trendingNumber="1" hashtag="#JessieMueller" tweets="456K"/>
            </div>
        </div>
    )
};

export default Trending