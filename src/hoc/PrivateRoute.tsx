import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { RoutersMap } from '../utils/constants';

type PrivateRouteType = {
  children: ReactElement;
};

const PrivateRoute = ({ children }: PrivateRouteType) => {
  const token = sessionStorage.getItem('token');

  return !token ? <Navigate to={RoutersMap.signIn} replace /> : children;
};

export default PrivateRoute;
