const Trend = (props) => {
    const {hashtag, tweets} = props

    return (
        <div>
            <div>{hashtag}</div>
            <div>{tweets} Tweets</div>
        </div>
    )
};

export default Trend