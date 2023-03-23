import Block from '../../core/Block';
import styles from './chats.module.pcss';
import validateForm, {ValidateType} from "../../helpers/validate-form";
import ChatsController from "../../controllers/ChatsController";
import AuthController from "../../controllers/AuthController";
import store from "../../core/Store";

export class Chats extends Block {
  constructor() {
    super();

    this.setProps({
      messageError: '',
      messageValue: '',
      chats: [],
      isPopupOpen: false,

      onMessageInput: (e: InputEvent) => {
        const element = e.target as HTMLInputElement;
        const errorMessage = validateForm([
          {type: ValidateType.Message, value: element.value},
        ])
        this.setProps({
          messageValue: element.value,
          messageError: errorMessage,
        })
      },

      onBlur: (e: FocusEvent) => {
        const element = e.target as HTMLInputElement;
        const errorMessage = validateForm([
          {type: this.props.name, value: element.value},
        ])
        this.setProps({
          messageError: errorMessage
        })
      },

      onSubmit: (e: SubmitEvent) => {
        e.preventDefault();
      },

      onChatCreate: () => {
        store.set('isChatPopupOpen', true);
        this.setProps({
          isPopupOpen: true
        })
      },

      onPopupClose: () => {
        store.set('isChatPopupOpen', false);
        this.setProps({
          isPopupOpen: false
        })
      }
    })
  }

  componentDidMount() {
    AuthController.fetchUser();
    ChatsController.fetchChats().finally(() => {
      this.setProps({
        chats: store.getState().chats,
        isPopupOpen: store.getState().isChatPopupOpen
      })
    })
  }

  render() {
    // language=hbs
    return `
        <section class=${styles.chats}>
            {{{Toolbar}}}
            {{#if chats.length}}
                <main class=${styles.container}>
                    <section class=${styles.list}>
                        <div class=${styles.search_container}>
                            <div class=${styles.search_line}>
                                <input class=${styles.search} type="text" placeholder="Поиск по сообщениям..."/>
                            </div>
                        </div>
                        <ul class=${styles.chats_list}>
                            {{#each chats}}
                                {{{ChatCard
                                        avatar=this.avatar
                                        name=this.title
                                        message=this.last_message
                                        time="1: 38"
                                        notify=this.unread_count
                                }}}
                            {{/each}}
                        </ul>
                        {{{Button text="Создать чат" onClick=onChatCreate className="${styles.create_button}"}}}
                    </section>
                    <section class=${styles.chat}>
                        <header class=${styles.header}>
                            <div class=${styles.header_container}>
                                <h1 class=${styles.title}>Иван Иванов</h1>
                                <span class=${styles.status}></span>
                                <p class=${styles.status_text}>Был в сети 6 минут назад</p>
                            </div>
                            <button class=${styles.options}></button>
                        </header>
                        <div class=${styles.messages}>
                            <ul class=${styles.messages_list}>
                                <li class=${styles.messages_item}>
                                    <p class=${styles.list_text}>Друзья, у меня для вас особенный выпуск
                                        новостей!</p>
                                </li>
                                <li class=${styles.messages_item}>
                                    <p class=${styles.list_text}>У меня для вас особенный выпуск новостей!</p>
                                </li>
                                <li class=${styles.messages_item}>
                                    <img class=${styles.list_image}
                                         src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg"
                                         alt="">
                                </li>
                                <li class="${styles.messages_item} ${styles.messages_item_self}">
                                    <p class=${styles.list_text}>Pellentesque habitant
                                        morbi
                                        tristique!</p>
                                </li>
                                <li class="${styles.messages_item} ${styles.messages_item_self}">
                                    <p class=${styles.list_text}>Duis ac diam nec massa
                                        aliquam
                                        consequat. Curabitur ante neque</p>
                                </li>
                            </ul>
                        </div>
                        <footer class=${styles.footer}>
                            <span class=${styles.footer_error}>${this.props.messageError}</span>
                            <form class=${styles.footer_form} onsubmit="${this.props.onSubmit}">
                                <button class=${styles.footer_attach} type="button"></button>
                                {{{
                                Message
                                        onInput=onMessageInput
                                        onFocus=onMessageFocus
                                        obBlur=onMessageBlur
                                        value=messageValue
                                        error=messageError
                                        ref=messageRef
                                }}}
                                <button class=${styles.footer_send}></button>
                            </form>
                        </footer>
                    </section>
                    {{#if isPopupOpen}}
                        {{{CreateChatPopup handleClose=onPopupClose}}}
                    {{/if}}
                </main>
            {{else}}
                {{{EmptyChats}}}
            {{/if}}
        </section>
    `;
  }
}
