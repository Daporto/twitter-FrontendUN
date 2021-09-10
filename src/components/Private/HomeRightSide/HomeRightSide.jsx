import Trending from '../Trending/Trending'
import SearchTwitter from '../../common/SearchTwitter/SearchTwitter'

const HomeRightSide = () => {
    return (
        <div className="Trending">
            <SearchTwitter />
            <Trending />
        </div>
    )
};
export default HomeRightSide;