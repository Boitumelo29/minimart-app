import React, { createContext, useState } from "react";
import { loginUser } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{

    const [token, setToken] = useState(null);
    const [username, setUsername] = useState(null);

    const login = async (username, password)=>{
        try{
            const token = await loginUser(username,password);
            setToken(token);
            setUsername(username);
        }catch(error){
            console.error('Login failed:', error);
            throw error;
        }
    };
    const logout = async ()=>{
        setToken(null);
        setUsername(null);
    };


        return(
            <AuthContext.Provider value={{token, username, login, logout}}>
                {children}
            </AuthContext.Provider>
        );
};
