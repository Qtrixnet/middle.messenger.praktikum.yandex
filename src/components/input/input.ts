import Block from '../../core/Block';
import './input.css';

interface InputProps {
  onInput: () => void;
  onFocus: () => void;
  onBlur: () => void;
  type: 'text' | 'password' | 'email';
  name: string;
  placeholder: string;
  color: string;
  value: string;
  error: string;
}

export class Input extends Block {
  constructor({
                onInput,
                onFocus,
                onBlur,
                ...props
              }: InputProps) {
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
                class="input input_{{color}} {{#if error}}input_error{{/if}}"
                value="{{value}}"
                type="{{type}}"
                placeholder="{{placeholder}}"
                name="{{name}}"
        />
    `;
  }
}
