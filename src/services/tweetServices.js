import { post, deleteRequest } from "./http";

const createTweet = async (content, jwtToken) => {
    
    console.log("content",content);
    console.log("token",jwtToken);
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
    const response = await deleteRequest("/tweets", tweetInfo, headers);
    return response;
}

const addLikeOrDislike = async (tweetId, isLike, jwtToken) => {
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

export {createTweet, deleteTweet, addLikeOrDislike, createComment}