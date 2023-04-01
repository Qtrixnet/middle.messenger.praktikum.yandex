import Block from '../../../core/Block';
import styles from './delete-user-popup.module.pcss';
import getElement from "../../../utils/getElement";
import ChatsController from "../../../controllers/ChatsController";
import store from "../../../core/Store";

interface DeleteUserPopupProps {
  handleClose: () => void
}

export class DeleteUserPopup extends Block {
  static componentName = 'DeleteUserPopup';
  constructor({handleClose}: DeleteUserPopupProps) {
    super({handleClose});

    this.setProps({
      onSubmit: (e: Event) => {
        e.preventDefault();
        const inputElement = getElement(this.element, 'user');

        const id = store.getState().selectedChat;

        ChatsController.deleteUserFromChat(id, Number(inputElement.value)).then(() => {
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
                <h2 class=${styles.title}>Удалить пользователя из чата</h2>
                {{{ControlledInput
                        type="text"
                        name="user"
                        placeholder="id пользователя"
                        label="Пользователь:"
                        color="dark"
                        ref="userInputRef"
                }}}
                {{{Button
                        text="Удалить"
                        onClick=onSubmit
                }}}
            </form>
        </div>
    `;
  }
}
