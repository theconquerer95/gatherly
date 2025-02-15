// import { lazy } from 'react';
import { Landing } from '../Pages/Landing';
import { Login } from '../Pages/Login';
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
    name: routeKeys.Landing,
    component: Landing,
  },
];
