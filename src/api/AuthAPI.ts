import BaseAPI from './BaseAPI';
import {SigninData, SignupData, User} from "../types/types";

export class AuthAPI extends BaseAPI {
  constructor() {
    super('/auth');
  }

  signin(data: SigninData) {
    return this.http.post('/signin', data);
  }

  signup(data: SignupData) {
    return this.http.post('/signup', data);
  }

  getUser(): Promise<User> {
    return this.http.get('/user');
  }

  logout() {
    return this.http.post('/logout');
  }

  create = undefined;
  update = undefined;
  delete = undefined;
}

export const authAPI = new AuthAPI();
