import React, { createContext, useState } from "react";
import { signIn, signUp, signOut } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(null);
    const [username, setUsername] = useState(null);

    const login = async (email, password) => {
        try {
            const data = await signIn(email, password);
            setUsername(data?.user?.user_metadata?.displayName);
        } catch (error) {
            console.error('Login failed:', error);
            throw error;
        }
    };
    const logout = async () => {
        await signOut();
        setUsername(null);
    };

    const signUpUser = async (username, email, password) => {
        const data = await signUp(email, password, username);
        setUsername(data?.user?.user_metadata?.displayName);
    }


    return (
        <AuthContext.Provider value={{ token, username, login, logout, signUpUser }}>
            {children}
        </AuthContext.Provider>
    );
};
