import { Block } from '../../core';
import styles from './chat.module.pcss';
import store, { StoreEvents } from '../../core/Store';
import getElement from '../../utils/getElement';
import MessagesController from '../../controllers/MessagesController';

interface ChatProps {
  title: string,
  id: number,
  handleAddUser: () => void,
  handleDeleteUser: () => void,
}

interface Message {
  chat_id: number,
  content: string,
  file: string | null,
  id: number,
  is_read: boolean,
  time: string,
  type: string,
  user_id: number
}

export class Chat extends Block {
  static componentName = 'Chat';

  constructor({
    title, id, handleAddUser, handleDeleteUser,
  }: ChatProps) {
    super({
      title, id, handleAddUser, handleDeleteUser,
    });

    this.setProps({
      isOptionsOpen: false,
      messages: [],
      userId: null,

      onOptionsToggle: () => {
        this.setProps({
          isOptionsOpen: !this.props.isOptionsOpen,
        });
      },

      onOptionsOpen: () => {
        this.setProps({
          isOptionsOpen: true,
        });
      },

      onOptionsClose: () => {
        this.setProps({
          isOptionsOpen: false,
        });
      },

      onMessageSubmit: (e: InputEvent) => {
        e.preventDefault();

        const inputElement = getElement(this.element, 'message');

        const id = store.getState().selectedChat;

        MessagesController.sendMessage(id, inputElement.value);

        inputElement.value = '';
      },
    });
  }

  adaptMessages(messages: Message[]) {
    if (!messages) {
      return [];
    }

    const userId = store.getState().user.id;
    return messages.map((message) => ({
      isMine: message.user_id === userId,
      ...message,
    }));
  }

  scrollToBottom() {
    const messagesList = document.querySelector('#messages');
    if (messagesList) {
      messagesList.scrollTop = messagesList.scrollHeight;
    }
  }

  componentDidMount() {
    super.componentDidMount();

    if (store.getState().messages) {
      this.setProps({
        messages: this.adaptMessages(store.getState().messages[this.props.id]),
        userId: store.getState().user.id,
      });
    }

    store.on(StoreEvents.Updated, () => {
      this.setProps({
        messages: this.adaptMessages(store.getState().messages[this.props.id]),
      });
      this.scrollToBottom();
    });
  }

  render() {
    // language=hbs
    return `
        <section class=${styles.chat}>
            <header class=${styles.header}>
                <div class=${styles.header__container}>
                    <h1 class=${styles.title}>
                        {{{title}}}
                    </h1>
                    <span class=${styles.status}></span>
                    <p class=${styles['status-text']}>Был в сети 6 минут назад</p>
                </div>
                {{{OptionsButton handleClick=onOptionsToggle}}}
                {{#if isOptionsOpen}}
                    {{{Options handleAddUser=handleAddUser handleDeleteUser=handleDeleteUser}}}
                {{/if}}
            </header>
            <div class=${styles.messages}>
                <ul class=${styles['messages-list']} id="messages">

                    {{#each messages}}
                        {{#if isMine}}
                            <li class="${styles['messages-item']} ${styles['messages-item_self']}">
                                <p class=${styles['list-text']}>{{content}}</p>
                            </li>
                        {{else}}
                            <li class=${styles['messages-item']}>
                                <p class=${styles['list-text']}>{{content}}</p>
                            </li>
                        {{/if}}
                    {{/each}}
                </ul>
            </div>
            {{{ChatFooter onMessageSubmit=onMessageSubmit}}}
        </section>
    `;
  }
}
