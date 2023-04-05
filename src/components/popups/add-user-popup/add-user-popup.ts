import Block from '../../../core/Block';
import styles from './add-user-popup.module.pcss';
import getElement from "../../../utils/getElement";
import ChatsController from "../../../controllers/ChatsController";
import store from "../../../core/Store";

interface AddUserPopupProps {
  handleClose: () => void
}

export class AddUserPopup extends Block {
  static componentName = 'AddUserPopup';
  constructor({handleClose}: AddUserPopupProps) {
    super({handleClose});

    this.setProps({
      onSubmit: (e: Event) => {
        e.preventDefault();
        const inputElement = getElement(this.element, 'user');
        const id = store.getState().selectedChat;

        ChatsController.addUserToChat(id, Number(inputElement.value)).then(() => {
          handleClose();
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
                <h2 class=${styles.title}>Добавить пользователя в чат</h2>
                {{{ControlledInput
                        type="text"
                        name="user"
                        placeholder="id пользователя"
                        label="Пользователь:"
                        color="dark"
                        ref="userInputRef"
                }}}
                {{{Button
                        text="Добавить"
                        onClick=onSubmit
                }}}
            </form>
        </div>
    `;
  }
}
