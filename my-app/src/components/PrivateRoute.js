import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { auth } = useContext(AuthContext);
  console.log("auth", auth)
  return auth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
