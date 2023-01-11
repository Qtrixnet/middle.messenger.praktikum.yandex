import Router from "../core/Router";

export type Indexed<T = any> = {
  [key in string]: T;
};

export enum Routes {
  Index = '/',
  Register = '/sign-up',
  Profile = '/settings',
  Chats = '/messenger',
}

export interface PropsWithRouter {
  router: typeof Router;
}

export interface SigninData {
  login: string;
  password: string;
}

export interface SignupData {
  first_name: string,
  second_name: string,
  login: string,
  email: string,
  phone: string,
  password: string,
}

export interface User {
  id: number;
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
  avatar: string;
}
