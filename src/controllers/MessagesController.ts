import WSTransport, { WSTransportEvents } from "../utils/WSTransport";
import ChatsController from "./ChatsController";
import store from "../core/Store";

export interface IMessage {
    chat_id: number;
    time: string;
    type: string;
    user_id: number;
    content: string;
    file?: {
        id: number;
        user_id: number;
        path: string;
        filename: string;
        content_type: string;
        content_size: number;
        upload_date: string;
    };
}

export class MessagesController {
    private transports: Map<number, WSTransport> = new Map();

    async connect(id: number, token: string) {
        if (this.transports.has(id)) {
            return;
        }

        const userId = store.getState().user.id;

        const transport = new WSTransport(
            `wss://ya-praktikum.tech/ws/chats/${userId}/${id}/${token}`
        );

        this.transports.set(id, transport);

        await transport.connect();

        this._subscribe(transport, id);
        this.fetchOldMessages(id);
    }

    async sendMessage(id: number, message: string) {
        const transport = this.transports.get(id);

        if (!transport) {
            throw new Error(`Chat ${id} is not connected`);
        }

        transport!.send({
            type: "message",
            content: message,
        });
    }

    fetchOldMessages(id: number) {
        const transport = this.transports.get(id);

        if (!transport) {
            throw new Error(`Chat ${id} is not connected`);
        }

        transport.send({ type: "get old", content: "0" });
    }

    closeAll() {
        Object.values(this.transports).forEach((transport) => transport.close());
    }

    private _getMessagesToAdd(messages: IMessage | IMessage[]): IMessage[] {
        return Array.isArray(messages) ? messages.reverse() : [messages];
    }

    private _onMessage(id: number, messages: IMessage | IMessage[]) {
        const messagesToAdd = this._getMessagesToAdd(messages);
        const currentMessages = store.getState().messages?.[id] ?? [];
        const allMessages = [...currentMessages, ...messagesToAdd];
        store.set(`messages.${id}`, allMessages);
        ChatsController.fetchChats();
    }

    private _onClose(id: number) {
        this.transports.delete(id);
    }

    private _subscribe(transport: WSTransport, id: number) {
        transport.on(WSTransportEvents.Message, (message) =>
            this._onMessage(id, message)
        );
        transport.on(WSTransportEvents.Close, () => this._onClose(id));
    }
}

const messagesController = new MessagesController();

export default messagesController;