import Block from '../../core/Block';
import './input.css';

interface InputProps {
  isDisabled: boolean;
  onInput: () => void;
  onFocus: () => void;
  onBlur: () => void;
  type: 'text' | 'password' | 'email';
  name: string;
  placeholder: string;
  color: string;
  value: string;
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
                ${this.props.isDisabled ? 'disabled' : 'enabled'}
                class="input input_{{color}}"
                value="{{value}}"
                type="{{type}}"
                placeholder="{{placeholder}}"
                name="{{name}}"
        />
    `;
  }
}
