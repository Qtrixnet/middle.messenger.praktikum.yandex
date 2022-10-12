import Block from '../../core/Block';
import './input.css';

interface InputProps {
  onInput: () => void;
  onFocus: () => void;
  onBlur: () => void;
  type: 'text' | 'password' | 'email';
  placeholder: string;
  value: string;
  color?: string;
  name: string;
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

// constructor({
//   onChange = () => {
//   }, type = 'text', placeholder, error, value, color = 'dark', name
// }: InputProps) {
//   super({type, placeholder, color, value, error, name, events: {input: onChange}});
// }


// render() {
//   // language=hbs
//   return `
//         <label class="input">
//             <span class="input__text">{{placeholder}}</span>
//             <input
//                 autocomplete="off"
//                 class="input__field input__field_{{color}} {{#if error}}input__field_error{{/if}}"
//                 value="{{value}}"
//                 type="{{type}}"
//                 placeholder="{{placeholder}}"
//                 name="{{name}}"
//             />
//         </label>
//     `;
// }
