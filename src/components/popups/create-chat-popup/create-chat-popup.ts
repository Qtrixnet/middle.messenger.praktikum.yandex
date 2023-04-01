import Block from '../../../core/Block';
import styles from './create-chat-popup.module.pcss';
import getElement from "../../../utils/getElement";
import ChatsController from "../../../controllers/ChatsController";

interface CreateChatPopupProps {
  handleClose: () => void
}

export class CreateChatPopup extends Block {
  static componentName = 'CreateChatPopup';
  constructor({handleClose}: CreateChatPopupProps) {
    super({handleClose});

    this.setProps({
      onSubmit: (e: Event) => {
        e.preventDefault();
        const inputElement = getElement(this.element, 'chat');

        ChatsController.create(inputElement.value).then(() => {
          handleClose();
          ChatsController.fetchChats();
        })
      },
    })
  }

  protected render(): string {
    // language=hbs
    return `
        <div class=${styles.popup}>
            <div class=${styles.overlay}></div>
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
                        text="Создать"
                        onClick=onSubmit
                }}}
            </form>
        </div>
    `;
  }
}
