import Block from '../../core/Block';
import './input.css';

interface InputProps {
  onChange: () => void;
  type: 'text' | 'password' | 'email';
  placeholder: string;
  value: string;
  error: string;
  color?: string;
  name: string;
}

export class Input extends Block {
  constructor({onChange = () => {}, type = 'text', error, placeholder, value, color = 'dark', name}: InputProps) {
    super({type, placeholder, color, value, error, name, events: {input: onChange}});
  }

  render() {
    // language=hbs
    return `
        <label class="input">
            <span class="input__text">{{placeholder}}{{#if error}} - {{error}}{{/if}}</span>
            <input
                autocomplete="off"
                class="input__field input__field_{{color}}"
                value="{{value}}"
                type="{{type}}"
                placeholder="{{placeholder}}"
                name="{{name}}"
            />
        </label>
    `;
  }
}
