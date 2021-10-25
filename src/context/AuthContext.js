import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = (props) =>{
    const [user,setUser] = useState({});

    const logIn = (user) => {
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
    }
    const logOut = () => {
        setUser({});
        localStorage.removeItem("user");
    }
    const getUser = () => {
        return user;
    }
    const isLogIn = () => {
        const user = localStorage.getItem("user");
        return user? !!Object.keys(user).length:false;
    }
    return (<AuthContext.Provider value ={{ logIn, logOut, isLogIn, getUser}}>
        {props.children}
    </AuthContext.Provider>);
}

export {AuthContext, AuthProvider};