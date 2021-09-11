import SearchLogo from '../../../Images/Feed/search/search-icon.svg'
import './styles/searchTwitter.scss'
const searchTwitter = (props) => {
    return (
        <div className="search">
            <img src={SearchLogo} alt="SearchLogo" width="30" height="30" />
            <input className="form-element"
                    type="text"
                    id="Search"
                    name="Search"
                    placeholder="Search Twitter"/>
        </div>
    )
};

export default searchTwitter