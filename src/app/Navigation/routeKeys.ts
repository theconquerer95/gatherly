import { RootStackParamList } from '../types';

export const routeKeys: Record<string, keyof RootStackParamList> = {
  Login: 'Login',
  LoginOTP: 'LoginOTP',
  LoginViaMobile: 'LoginViaMobile',
  SignUp: 'SignUp',
};
