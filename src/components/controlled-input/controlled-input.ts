import Block from '../../core/Block';
import './controlled-input.css';
import validateForm from "../../helpers/validate-form";

interface ControlledInputProps {
  isDisabled?: boolean;
  onInput: () => void;
  onFocus: () => void;
  type: 'text' | 'password' | 'email';
  name: string;
  placeholder: string;
  label: string;
  color?: string;
  error: string;
}

export class ControlledInput extends Block {
  constructor(props: ControlledInputProps) {
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
        <label class="controlled-input">
            <span class="controlled-input__label">{{label}}</span>
            {{{Input
                    isDisabled=isDisabled
                    onInput=onInput
                    onFocus=onFocus
                    onBlur=onBlur
                    type=type
                    name=name
                    placeholder=placeholder
                    color=color
                    value=value
            }}}
            {{{InputError ref="errorRef" text=error}}}
        </label>
    `;
  }
}
