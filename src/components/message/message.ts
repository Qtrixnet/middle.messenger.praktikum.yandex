import Block from '../../core/Block';
import './message.css';
import {validateForm} from "../../helpers/validateForm";

interface MessageProps {
  onInput: () => void;
  onFocus: () => void;
  onSubmit: () => void;
  error: string;
}

export class Message extends Block {
  constructor(props: MessageProps) {
    super({
      ...props,
      onBlur: (e: FocusEvent) => {
        const element = e.target as HTMLInputElement;

        const errorMessage = validateForm([
          {type: this.props.name, value: element.value},
        ])

        this.refs.errorRef.setProps({
          text: errorMessage
        });
      }
    })
  }

  render() {
    // language=hbs
    return `
        <form class="message" onsubmit="">
            <button class="message__attach" type="button"></button>
            
            <input
                    name="message"
                    class="message__input"
                    type="text"
                    placeholder="Написать сообщение..."
                    value="${this.props.messageValue}"
                    onchange="${this.props.onMessageInput}"
                    onfocus="console.log(123)"
            />
            <button class="message__send-button"></button>
        </form>
    `;
  }
}
