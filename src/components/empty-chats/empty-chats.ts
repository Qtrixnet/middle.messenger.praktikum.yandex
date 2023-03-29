import Block from '../../core/Block';
import styles from './empty-chats.module.pcss';
import chatIcon from '../../assets/images/icons/chats.svg';
import ChatsController from "../../controllers/ChatsController";
import validateForm, {ValidateType} from "../../helpers/validate-form";

export class EmptyChats extends Block {
  constructor() {
    super()

    this.setProps({
      chatNameError: '',
      chatNameValue: '',

      onChatNameInput: (e: InputEvent) => {
        const element = e.target as HTMLInputElement;
        const errorMessage = validateForm([
          {type: ValidateType.Message, value: element.value},
        ])
        this.setChildRefProps('chatInputRef', 'errorRef', {text: errorMessage});
        this.props.chatNameValue = element.value;
      },

      onChatCreate: () => {
        ChatsController.create(this.props.chatNameValue);
      },
    })
  }

  render() {
    // language=hbs
    return `
        <section class=${styles.empty_chats}>
            <p class=${styles.title}>Создайте чат, чтобы начать общение</p>
            <img class=${styles.icon} src=${chatIcon} alt="empty chats" width="120px" height="120px">
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
            {{{Button text="Создать чат" onClick=onChatCreate}}}
        </section>
    `;
  }
}
