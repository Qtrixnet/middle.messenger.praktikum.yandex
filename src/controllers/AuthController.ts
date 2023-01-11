import API, {AuthAPI} from '../api/AuthAPI';
import store from '../core/Store';
import router from '../core/Router';
import {Routes, SigninData, SignupData} from "../types/types";

export class AuthController {
  private readonly api: AuthAPI;

  constructor() {
    this.api = API;
  }

  async signin(data: SigninData) {
    try {
      await this.api.signin(data);

      await this.fetchUser();

      router.go(Routes.Profile);
    } catch (e: any) {
      console.error(e);
    }
  }

  async signup(data: SignupData) {
    try {
      await this.api.signup(data);

      await this.fetchUser();

      router.go(Routes.Profile);
    } catch (e: any) {
      console.error(e.message);
    }
  }

  async fetchUser() {
    const user = await this.api.read();

    store.set('user', user);
  }

  async logout() {
    try {
      // MessagesController.closeAll();

      await this.api.logout();

      router.go(Routes.Index);
    } catch (e: any) {
      console.error(e.message);
    }
  }
}

export default new AuthController();
