// import { lazy } from 'react';
import { Landing } from '../Pages/Landing';
import { Login } from '../Pages/Login';

import { routeKeys } from './routeKeys';

// Lazy load screens
// const Login = lazy(() => require('../Pages/Login'));
// const Landing = lazy(() => require('../Pages/Landing'));

export const Route_Config = [
  {
    name: routeKeys.Login,
    component: Login,
  },
  {
    name: routeKeys.Landing,
    component: Landing,
  },
];
