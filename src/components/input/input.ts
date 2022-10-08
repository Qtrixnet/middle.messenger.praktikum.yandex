import Block from '../../core/Block';
import './input.css';

export class Input extends Block {
  constructor() {
    super();
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
