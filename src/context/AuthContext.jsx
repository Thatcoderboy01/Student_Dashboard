// src/context/AuthContext.jsx

import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config"; // ✅ make sure this file exports initialized `auth`

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("AuthContext: Checking Firebase auth state...");

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("AuthContext: Auth state changed →", currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      console.log("AuthContext: Cleaning up listener.");
      unsubscribe();
    };
  }, []);

  if (loading) {
    return <div className="text-center mt-20 text-gray-500">Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};
