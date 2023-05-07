import API, { IPassword, IUserInfo, UserAPI } from '../api/UserAPI';
import AuthController from './AuthController';

export class UserController {
  private readonly api: UserAPI;

  constructor() {
    this.api = API;
  }

  async updateUser(data: IUserInfo) {
    try {
      await this.api.updateUser(data);
      await AuthController.fetchUser();
    } catch (e: any) {
      console.error(e);
    }
  }

  async updatePassword(data: IPassword) {
    try {
      await this.api.updatePassword(data);
    } catch (e: any) {
      console.error(e.message);
    }
  }

  async updateAvatar(data: FormData) {
    try {
      await this.api.updateAvatar(data);
      await AuthController.fetchUser();
    } catch (e: any) {
      console.error(e.message);
    }
  }
}

export default new UserController();
