import { post } from "./http";

const login = async (username, password) => {
  const user = { username, password };
  const response = await post("/users/login", user);
  const json = response; 
  return json;
};
export {login};