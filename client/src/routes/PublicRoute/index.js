import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "src/providers/AuthProvider";

const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? <Navigate to="/chat" /> : children;
};

export default PublicRoute;
