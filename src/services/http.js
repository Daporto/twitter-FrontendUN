const httpApi = process.env.REACT_APP_HTTP_API;

const get = (endpoint) =>{
    return fetch(`${httpApi}${endpoint}`);
};

const post = async (endpoint, data, headers = {})=>{
    const response = await fetch(`${httpApi}${endpoint}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers:{
            'Content-Type' : 'application/json',
            ...headers
        }
    });
    return response.json();
};

const deleteRequest = async (endpoint, data, headers = {})=>{
    const response = await fetch(`${httpApi}${endpoint}`, {
        method: "DELETE",
        body: JSON.stringify(data),
        headers:{
            'Content-Type' : 'application/json',
            ...headers
        }
    });
    return response.json();
};

export { get, post, deleteRequest};