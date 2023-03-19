import Block from '../../core/Block';
import styles from './chats.module.pcss';
import validateForm, {ValidateType} from "../../helpers/validate-form";
import ChatsController from "../../controllers/ChatsController";

export class Chats extends Block {
  constructor() {
    super();

    this.setProps({
      messageError: '',
      messageValue: '',
      chats: [],

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
      }
    })
  }

  componentDidMount() {
    ChatsController.fetchChats();
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
                            {{{ChatCard
                                    avatar="https://basetop.ru/wp-content/uploads/2021/09/majkl-ili2.jpg"
                                    name="Иван Иванов"
                                    message="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                                    time="1: 38"
                                    notify="8"
                            }}}
                            {{{ChatCard
                                    avatar="https://basetop.ru/wp-content/uploads/2021/09/majkl-ili2.jpg"
                                    name="Илон Маск"
                                    message="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                                    time="1: 38"
                                    notify="9"
                            }}}
                            {{{ChatCard
                                    avatar="https://basetop.ru/wp-content/uploads/2021/09/majkl-ili2.jpg"
                                    name="Станислав"
                                    message="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                                    time="1: 38"
                                    notify="24"
                            }}}
                            {{{ChatCard
                                    avatar="https://basetop.ru/wp-content/uploads/2021/09/majkl-ili2.jpg"
                                    name="Мария"
                                    message="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                                    time="1: 38"
                                    notify="18"
                            }}}
                        </ul>
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
                </main>
            {{else}}
                {{{EmptyChats}}}
            {{/if}}
        </section>
    `;
  }
}
