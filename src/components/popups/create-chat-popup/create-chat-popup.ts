import Block from '../../../core/Block';
import styles from './create-chat-popup.module.pcss';
import validateForm, {ValidateType} from "../../../helpers/validate-form";
import getElement from "../../../utils/getElement";
import ChatsController from "../../../controllers/ChatsController";

interface CreateChatPopupProps {
  handleClose: () => void
}

export class CreateChatPopup extends Block {
  constructor({handleClose}: CreateChatPopupProps) {
    super({handleClose});

    this.setProps({
      loginError: '',
      loginValue: '',

      onChatInput: (e: InputEvent) => {
        const element = e.target as HTMLInputElement;
        const errorMessage = validateForm([
          {type: ValidateType.Message, value: element.value},
        ])
        // @ts-ignore
        this.refs.chatInputRef.refs.errorRef.setProps({text: errorMessage})
      },

      onSubmit: (e: Event) => {
        e.preventDefault();
        const loginElement = getElement(this.element, 'chat');
        const loginErrorMessage = validateForm([
          {type: ValidateType.Login, value: loginElement.value},
        ])

        if(loginErrorMessage) {
          this.setProps({
            loginError: loginErrorMessage,
            loginValue: loginElement.value
          })
        } else {
          ChatsController.create(loginElement.value).then(() => {
            handleClose();
          })
        }
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
                        onInput=onChatInput
                        type="text"
                        name="chat"
                        placeholder="Название чата"
                        label="чат:"
                        color="dark"
                        ref="chatInputRef"
                        error=loginError
                        value=loginValue
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
