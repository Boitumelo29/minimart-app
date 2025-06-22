import React, { createContext, useState, useEffect } from "react";
import { signIn, signUp, signOut, getSession, onAuthChange } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState(null);
  const [session, setSession] = useState(null);

  const login = async (email, password) => {
    try {
      const { session, user } = await signIn(email, password);
      setUsername(user?.user_metadata?.displayName || user?.email);
      setSession(session);
      setToken(session?.access_token);
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const logout = async () => {
    await signOut();
    setUsername(null);
    setSession(null);
    setToken(null);
  };

  const signUpUser = async (username, email, password) => {
    try {
      const { session, user } = await signUp(email, password, username);
      setUsername(user?.user_metadata?.displayName || user?.email);
      setSession(session);
      setToken(session?.access_token);
    } catch (error) {
      console.error("Sign up failed", error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const session = await getSession();
        if (session) {
          setSession(session);
          setUsername(
            session.user?.user_metadata?.displayName || session.user?.email
          );
          setToken(session.access_token);
        }
      } catch (error) {
        console.error("Failed to get session:", error);
      }
    };
  
    fetchSession();
  
    const subscription = onAuthChange((session) => {
      setSession(session);
      setUsername(
        session?.user?.user_metadata?.displayName || session?.user?.email || null
      );
      setToken(session?.access_token || null);
    });
  
    return () => subscription.unsubscribe();
  }, []);
  

  return (
    <AuthContext.Provider value={{ token, username, login, logout, signUpUser, session, user: session?.user || null,  }}>
      {children}
    </AuthContext.Provider>
  );
};
