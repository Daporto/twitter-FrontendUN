import { useState } from 'react';
import { useEffect } from 'react';

import { getUserByUsername } from '../../../../services/userServices';
import './profile.scss'

const Profile = () => {
    const [userProfile, setUserProfile] = useState({});
    useEffect(() => {
        let dataUser = localStorage.getItem("user");
        let username = JSON.parse(dataUser).username;
        let token = JSON.parse(dataUser).token;
        getUserByUsername(username,token).then((data) => {
            setUserProfile(data);
        }, []);
    })

    return (
        <div className="central-container">
            <div className="internal-container">
            <h2 className="title">Profile</h2>
            <div><p><b>Name: </b> {userProfile.name}</p></div>
            <div><p><b>Username: </b> {userProfile.username}</p></div>
            <div><p><b>Creation Date: </b> {userProfile.createdAt}</p></div>
            </div>
        </div>
    )
};
export default Profile;