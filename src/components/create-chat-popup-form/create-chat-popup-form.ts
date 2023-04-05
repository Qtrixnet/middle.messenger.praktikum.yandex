import Block from '../../core/Block';
import styles from './create-chat-popup-form.module.pcss';

interface ICreateChatPopupForm {
  handleClose: () => void;
  onSubmit: (e: Event) => void;
  isLoading: boolean;
}

export class CreateChatPopupForm extends Block {
  static componentName = 'CreateChatPopupForm';
  constructor({handleClose, onSubmit, isLoading}: ICreateChatPopupForm) {
    super({handleClose, isLoading, events: {submit: onSubmit}});
  }

  render() {
    // language=hbs
    return `
        <form class=${styles.content}>
            {{{CloseButton onClick=handleClose}}}
            <h2 class=${styles.title}>Создать чат</h2>
            {{{ControlledInput
                    type="text"
                    name="chat"
                    placeholder="Название чата"
                    label="чат:"
                    color="dark"
                    ref="chatInputRef"
            }}}
            {{{Button
                    isLoading=isLoading
                    text="Создать"
                    actionType="submit"
            }}}
        </form>
    `;
  }
}
