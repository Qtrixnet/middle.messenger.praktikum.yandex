import EventBus from '../core/EventBus';

export enum WSTransportEvents {
    Connected = 'connected',
    Error = 'error',
    Message = 'message',
    Close = 'close',
    Open = 'open',
}

export default class WSTransport extends EventBus {
  private socket: WebSocket | null = null;

  private pingInterval: any = 0;

  constructor(private url: string) {
    super();
  }

  public send(data: unknown) {
    if (!this.socket) {
      throw new Error('Socket is not connected');
    }

    this.socket.send(JSON.stringify(data));
  }

  public connect(): Promise<void> {
    this.socket = new WebSocket(this.url);

    this._subscribe(this.socket);

    this._setupPing();

    return new Promise<void>((resolve) => {
      this.on(WSTransportEvents.Connected, () => resolve());
    });
  }

  public close() {
    clearInterval(this.pingInterval);

    this.socket?.close();
  }

  private _setupPing() {
    this.pingInterval = setInterval(() => {
      this.send({ type: 'ping' });
    }, 5000);

    this.on(WSTransportEvents.Close, () => {
      clearInterval(this.pingInterval);

      this.pingInterval = 0;
    });
  }

  private _subscribe(socket: WebSocket) {
    socket.addEventListener(WSTransportEvents.Open, () => {
      this.emit(WSTransportEvents.Connected);
    });
    socket.addEventListener(WSTransportEvents.Close, () => {
      this.emit(WSTransportEvents.Close);
    });

    socket.addEventListener(WSTransportEvents.Error, (e) => {
      this.emit(WSTransportEvents.Error, e);
    });

    socket.addEventListener(WSTransportEvents.Message, (message) => {
      try {
        const data = JSON.parse(message.data);

        if (data?.type === 'pong') {
          return;
        }

        this.emit(WSTransportEvents.Message, data);
      } catch (e) {
        console.log(e);
      }
    });
  }
}
