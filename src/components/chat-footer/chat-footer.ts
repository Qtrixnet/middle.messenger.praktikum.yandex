import Block from '../../core/Block';
import styles from './chat-footer.module.pcss';
import store from "../../core/Store";
import MessagesController from "../../controllers/MessagesController";

export class ChatFooter extends Block {
  constructor() {
    super();

    this.setProps({
      onMessageSubmit: (e: InputEvent) => {
        e.preventDefault();
        const id = store.getState().selectedChat;
        const message = document.querySelector('input[name="message"]') as HTMLInputElement;
        MessagesController.sendMessage(id, message?.value || '');
        message.value = '';
      }
    })
  }

  protected render(): string {
    // language=hbs
    return `
        <footer class=${styles.footer}>
            {{{FooterForm title='test-title' onMessageSubmit=onMessageSubmit}}}
        </footer>
    `;
  }
}
