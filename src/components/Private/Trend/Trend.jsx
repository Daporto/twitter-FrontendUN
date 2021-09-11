const Trend = (props) => {
    const {hashtag, tweets, trendingNumber} = props

    return (
        <div>
            <h4>{trendingNumber}. Trending</h4>
            <h3>{hashtag} </h3>
            <h4>{tweets} Tweets</h4>
        </div>
    )
};

export default Trend