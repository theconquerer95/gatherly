// import { lazy } from 'react';
import { Login } from '../Pages/Login';
import { LoginOTP } from '../Pages/LoginOTP';
import { LoginViaMobile } from '../Pages/LoginViaMobile';
import { SignUp } from '../Pages/SignUp';
import { RootStackParamList } from '../types';

import { routeKeys } from './routeKeys';
// Lazy load screens
// const Login = lazy(() => require('../Pages/Login'));
// const Landing = lazy(() => require('../Pages/Landing'));

type RouteConfigType = {
  name: keyof RootStackParamList;
  component: React.ComponentType<any>;
};

export const Route_Config: RouteConfigType[] = [
  {
    name: routeKeys.Login,
    component: Login,
  },
  {
    name: routeKeys.LoginOTP,
    component: LoginOTP,
  },
  {
    name: routeKeys.LoginViaMobile,
    component: LoginViaMobile,
  },
  {
    name: routeKeys.SignUp,
    component: SignUp,
  },
];
