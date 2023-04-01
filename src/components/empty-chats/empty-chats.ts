import Block from '../../core/Block';
import styles from './empty-chats.module.pcss';

interface IEmptyChats {
  onChatCreate: (e: SubmitEvent) => void;
}

export class EmptyChats extends Block {
  static componentName = 'EmptyChats';
  constructor({onChatCreate}: IEmptyChats) {
    super({events: {submit: onChatCreate}});
  }

  render() {
    // language=hbs
    return `
        <form class=${styles.empty_chats}>
            <div class=${styles.wrapper}>
                <p class=${styles.title}>Создайте чат, чтобы начать общение</p>
                {{{ControlledInput
                        onInput=onChatNameInput
                        type="text"
                        name="chatName"
                        placeholder="Название чата"
                        label="Чат:"
                        color="light"
                        ref="chatInputRef"
                        value=chatNameValue
                        error=chatNameError
                }}}
                {{{Button text="Создать чат" actionType="submit"}}}
            </div>
        </form>
    `;
  }
}
