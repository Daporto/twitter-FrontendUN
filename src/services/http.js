const httpApi = process.env.REACT_APP_HTTP_API;

const get = (endpoint) =>{
    return fetch(`${httpApi}${endpoint}`);
};

const post = async (endpoint, data)=>{
    const response = await fetch(`${httpApi}${endpoint}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers:{
            'Content-Type' : 'application/json'
        }
    });
    return response.json();
};

export { get, post};