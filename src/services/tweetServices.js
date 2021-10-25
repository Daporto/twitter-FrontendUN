import { post, deleteRequest, get } from "./http";

const createTweet = async (content, jwtToken) => {
    const newTweet = { content };
    const headers = {
        "x-access-token": jwtToken
    };
    const response = await post("/tweets", newTweet, headers);
    return response;
}

const deleteTweet = async (tweetId, jwtToken) => {
    const tweetInfo = { tweetId };
    const headers = {
        "x-access-token": jwtToken
    };
    console.log("TweetInfo,", tweetInfo)
    console.log("headers,", headers)
    const response = await deleteRequest("/tweets", tweetInfo, headers);
    return response;
}

const addLikeOrUnlike = async (tweetId, isLike, jwtToken) => {
    const tweetInfo = {
        tweetId,
        like: isLike ? 1 : 0
    };
    const headers = {
        "x-access-token": jwtToken
    };
    const response = await post("/tweets/likes", tweetInfo, headers);
    return response;
}

const createComment = async (tweetId, comment, jwtToken) => {
    const commentInfo = {
        tweetId,
        comment
    };
    const headers = {
        "x-access-token": jwtToken
    };
    const response = await post("/tweets/comments", commentInfo, headers);
    return response;
}

const getTweetsByUser = async (jwtToken) => {
    const headers = {
        "x-access-token": jwtToken
    };
    const response = await get("/tweets", headers);
    return response
}

export {
    createTweet,
    deleteTweet,
    addLikeOrUnlike,
    createComment,
    getTweetsByUser
}