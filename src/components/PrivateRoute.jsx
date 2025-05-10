import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  console.log("PrivateRoute: Checking user authentication..."); // Debugging line

  if (!user) {
    console.log("PrivateRoute: User is not authenticated. Redirecting to /login."); // Debugging line
    return <Navigate to="/login" replace />;
  }

  console.log("PrivateRoute: User is authenticated. Rendering children."); // Debugging line

  return children;
};

export default PrivateRoute;