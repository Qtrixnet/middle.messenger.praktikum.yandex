import Block from '../../core/Block';
import './controlled-input.css';

interface ControlledInputProps {
  onInput: () => void;
  onFocus: () => void;
  onBlur: () => void;
  type: 'text' | 'password' | 'email';
  placeholder: string;
  value: string;
  color?: string;
  name: string;
  error: string;
  label: string;
}

export class ControlledInput extends Block {
  constructor({
                onInput,
                onFocus,
                onBlur,
                ...props
              }: ControlledInputProps) {
    super({
      ...props,
      events: {
        input: onInput,
        focus: onFocus,
        blur: onBlur,
      }
    })
  }

  render() {
    console.log(this.props)
    // language=hbs
    return `
        <label class="controlled-input">
            <span class="controlled-input__label">{{label}}</span>
            {{{InputError text=error}}}
            {{{Input
                    onInput=${this.props.onInput}
                    onFocus=${this.props.onFocus}
                    onBlur=${this.props.onBlur}
                    type=type
                    placeholder=placeholder
                    value=value
                    color=color
                    name=name
                    error=error
                    ref=login
            }}}
        </label>
    `;
  }
}
