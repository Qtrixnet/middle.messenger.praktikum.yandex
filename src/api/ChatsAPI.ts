import BaseAPI from './BaseAPI';
import { IUser } from './UserAPI';

export interface IChatInfo {
    id: number;
    title: string;
    avatar: string;
    unread_count: number;
    last_message: {
        user: IUser;
        time: string;
        content: string;
    };
}

type GetUserResponse = IUser & { role: string }

export class ChatsAPI extends BaseAPI {
  constructor() {
    super('/chats');
  }

  create(title: string) {
    return this.http.post('/', { title });
  }

  delete(id: number): Promise<unknown> {
    return this.http.delete('/', { chatId: id });
  }

  getChats(): Promise<IChatInfo[]> {
    return this.http.get('/');
  }

  getUsers(id: number): Promise<GetUserResponse[]> {
    return this.http.get(`/${id}/users`);
  }

  addUsers(id: number, users: number[]): Promise<unknown> {
    return this.http.put('/users', { users, chatId: id });
  }

  deleteUsers(id: number, users: number[]): Promise<unknown> {
    return this.http.delete('/users', { users, chatId: id });
  }

  async getToken(id: number): Promise<string> {
    const response = await this.http.post<{ token: string }>(`/token/${id}`);

    return response.token;
  }

  update = undefined;
}

export default new ChatsAPI();
