import React from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  verificado: React.ReactNode; 
  isAuthenticated: boolean; 
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ verificado, isAuthenticated }) => {
  return isAuthenticated ? verificado : <Navigate to="/login" />;
};

export default PrivateRoute;
