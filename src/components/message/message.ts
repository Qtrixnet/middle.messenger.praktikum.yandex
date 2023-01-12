import Block from '../../core/Block';
import styles from './message.module.pcss';

interface MessageProps {
  onInput: () => void;
  onFocus: () => void;
  onBlur: () => void;
  value: string;
}

export class Message extends Block {
  constructor({
                onInput,
                onFocus,
                onBlur,
                ...props
              }: MessageProps) {
    super({
      ...props,
      events: {
        input: onInput,
        focus: onFocus,
        blur: onBlur,
      }
    });
  }

  render() {
    // language=hbs
    return `
        <input
                name="message"
                class=${styles.message}
                type="text"
                placeholder="Написать сообщение..."
                value="{{value}}"
        />
    `;
  }
}
