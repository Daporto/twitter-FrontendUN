import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = (props) =>{
    const [user,setUser] = useState({});
    useEffect(()=>{
        const user = localStorage.getItem("user");
        setUser(user);
    }, []);
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
        return user? !!Object.keys(user).length:false;
    }
    return (<AuthContext.Provider value ={{ logIn, logOut, isLogIn, getUser}}>
        {props.children}
    </AuthContext.Provider>);
}

export {AuthContext, AuthProvider};