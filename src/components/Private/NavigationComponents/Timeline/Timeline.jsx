import StarsLogo from '../../../../Images/Feed/stars-icon.svg'
import './styles/timeline.scss'
import React, { lazy, Suspense } from 'react';
const CreateTweet  = lazy(() => import('../../CreateTweet/CreateTweet'));
const Tweets  = lazy(() => import('../../Tweets/Tweets'));
const renderLoader = () => <p>Loading</p>;
const TimeLine = () => {
    return (
        <Suspense fallback={renderLoader()}>
       <div className="Feed">
            <div className="home"><h2>Home</h2><img src={StarsLogo} alt="StarsLogo" width="30" height="30" /></div>
            <CreateTweet/>
            <Tweets/>
        </div>
         </Suspense>
    )
};
export default TimeLine;