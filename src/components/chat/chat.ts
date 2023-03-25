import {Block} from "../../core";
import styles from "./chat.module.pcss";

interface ChatProps {
  title: string,
  id: number,
  handleAddUser: () => void,
  handleDeleteUser: () => void,
}

export class Chat extends Block {
  constructor({title, id, handleAddUser, handleDeleteUser}: ChatProps) {
    super({title, id, handleAddUser, handleDeleteUser});

    this.setProps({
      isOptionsOpen: false,

      onOptionsToggle: () => {
        this.setProps({
          isOptionsOpen: !this.props.isOptionsOpen
        })
      },

      onOptionsOpen: () => {
        console.log(123)
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
                    <li class=${styles.messages_item}>
                        <p class=${styles.list_text}>Друзья, у меня для вас особенный выпуск новостей!</p>
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
                        <p class=${styles.list_text}>Pellentesque habitant morbi tristique!</p>
                    </li>
                    <li class="${styles.messages_item} ${styles.messages_item_self}">
                        <p class=${styles.list_text}>Duis ac diam nec massa aliquam consequat. Curabitur ante neque</p>
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
    `
  }
}