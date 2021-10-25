import { post } from "./http";

const createTweet = async (content, jwtToken) => {
    const newTweet = { content };
    const headers = {
        "x-access-token": jwtToken
    };
    const response = await post("/tweets", newTweet, headers);
    return response;
}

export {createTweet}