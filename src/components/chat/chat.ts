import {Block} from "../../core";
import styles from "./chat.module.pcss";
import store from "../../core/Store";

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
  constructor({title, id, handleAddUser, handleDeleteUser}: ChatProps) {
    super({title, id, handleAddUser, handleDeleteUser});

    this.setProps({
      isOptionsOpen: false,
      messages: [],
      userId: null,

      onOptionsToggle: () => {
        this.setProps({
          isOptionsOpen: !this.props.isOptionsOpen
        })
      },

      onOptionsOpen: () => {
        this.setProps({
          isOptionsOpen: true
        })
      },

      onOptionsClose: () => {
        this.setProps({
          isOptionsOpen: false
        })
      },
    })
  }

  adaptMessages(messages: Message[]) {
    if (!messages) {
      return []
    }

    const userId = store.getState().user.id
    return messages.map((message) => {
      return {
        isMine: message.user_id === userId,
        ...message
      }
    })
  }

  componentDidMount() {
    super.componentDidMount();

    if (store.getState().messages) {
      this.setProps({
        messages: this.adaptMessages(store.getState().messages[this.props.id]),
        userId: store.getState().user.id
      })
    }
  }

  render() {
    // language=hbs
    return `
        <section class=${styles.chat}>
            <header class=${styles.header}>
                <div class=${styles.header_container}>
                    <h1 class=${styles.title}>
                        {{{title}}}
                    </h1>
                    <span class=${styles.status}></span>
                    <p class=${styles.status_text}>Был в сети 6 минут назад</p>
                </div>
                {{{OptionsButton handleClick=onOptionsToggle}}}
                {{#if isOptionsOpen}}
                    {{{Options handleAddUser=handleAddUser handleDeleteUser=handleDeleteUser}}}
                {{/if}}
            </header>
            <div class=${styles.messages}>
                <ul class=${styles.messages_list}>

                    {{#each messages}}
                        {{#if isMine}}
                            <li class="${styles.messages_item} ${styles.messages_item_self}">
                                <p class=${styles.list_text}>{{content}}</p>
                            </li>
                        {{else}}
                            <li class=${styles.messages_item}>
                                <p class=${styles.list_text}>{{content}}</p>
                            </li>
                        {{/if}}
                    {{/each}}
                </ul>
            </div>
            {{{ChatFooter}}}
        </section>
    `
  }
}