import Block from '../../core/Block';
import styles from './empty-chats.module.pcss';
import chatIcon from '../../assets/images/icons/chats.svg';

export class EmptyChats extends Block {
  constructor() {
    super()

    this.setProps({
      onChatCreate: () => {
        console.log('Create chat')
      }
    })
  }

  render() {
    // language=hbs
    return `
        <section class=${styles.empty_chats}>
            <p class=${styles.title}>Создайте чат, чтобы начать общение</p>
            <img class=${styles.icon} src=${chatIcon} alt="empty chats" width="120px" height="120px">
            {{{Button text="Создать чат" onClick=onChatCreate}}}
        </section>
    `;
  }
}
