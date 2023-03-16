import BaseAPI from "./BaseAPI";

export interface IUserInfo {
  login: string,
  email: string,
  first_name: string,
  phone: string,
  second_name: string,
  display_name: string,
}

export interface IUser {
  id: number;
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
  avatar: string;
}

export interface IPassword {
  oldPassword: string;
  newPassword: string;
}

export class UserAPI extends BaseAPI {
  constructor() {
    super("/user");
  }

  headers: Record<string, string> = { "Content-Type": "application/json" };

  updateUser(data: IUserInfo) {
    return this.http.put("/profile", data);
  }

  updatePassword(data: IPassword) {
    return this.http.put("/password", data);
  }

  updateAvatar(data: FormData) {
    return this.http.put("/profile/avatar", data);
  }

  create = undefined;
  read = undefined;
  update = undefined;
  delete = undefined;
}

export default new UserAPI();
