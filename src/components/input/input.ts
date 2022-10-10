import Block from '../../core/Block';
import './input.css';

interface InputProps {
  onChange?: () => void;
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
  value?: string;
  error?: string;
}

export class Input extends Block {
  constructor({onChange = () => {}, type = 'text', error, placeholder, value}: InputProps) {
    super({type, placeholder, value, error, events: {input: onChange}});
  }

  render() {
    // language=hbs
    return `
        <label class="input">
            <span class="input__text">{{placeholder}}</span>
            <input
                    class="input__field input__field_{{color}}"
                    value={{value}}
                    type={{type}}
                    placeholder={{placeholder}}
                    name={{name}}
            />
        </label>
    `;
  }
}
