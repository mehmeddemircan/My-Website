import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// Custom PrivateRoute component
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token')
  const { loading } = useSelector((state) => state.auth);


  if (token) {
  
    return children;
  } else {
    
    return <Navigate to="/login" replace />;
  }
};
export default PrivateRoute;
