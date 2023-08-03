"use client"
import { createContext, useState } from "react";

export const AuthContext = createContext();


export const AppProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [roles, setRoles] = useState([]);

  const login = (newToken, newRoles) => {
    setToken(newToken);
    setRoles(newRoles);
  };

  const logout = () => {
    setToken("");
    setRoles([]);
  };

  return (
    <AuthContext.Provider value={{ token, roles, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};