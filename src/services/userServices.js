import { post, get } from "./http";

const getUserByUsername = async (username, jwtToken) => {
  const headers = {
    "x-access-token": jwtToken
  };
  const allUsers = await get("/users", headers);
  const userInfo = allUsers.data.find(user => user.username ===username)
  return userInfo;
}

const loginUser = async (username, password) => {
  const user = { username, password };
  const response = await post("/users/login", user);
  const json = response;
  return json;
};

const signUpUser = async (name, username, email, password, passwordConfirmation) => {
  const newUser = { name, username, email, password, passwordConfirmation };
  const response = await post("/users", newUser);
  const json = response;
  return json;
};
export { loginUser, signUpUser, getUserByUsername};