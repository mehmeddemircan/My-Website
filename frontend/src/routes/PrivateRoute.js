import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// Custom PrivateRoute component
const PrivateRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.auth);


  if (auth.authenticate) {
  
    return children;
  } else {
    
    return <Navigate to="/login" replace />;
  }
};
export default PrivateRoute;
