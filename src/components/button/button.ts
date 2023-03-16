import Block from '../../core/Block';
import styles from './button.module.pcss';

interface ButtonProps {
  text: string;
  onClick: () => void;
  type?: string;
  isSimple?: boolean;
  isDanger?: boolean;
  isDisabled?: boolean;
}

export class Button extends Block {
  constructor({text, type, onClick, isSimple = false, isDanger = false, isDisabled = false}: ButtonProps) {
    super({text, type, isSimple, isDanger, isDisabled, events: {click: onClick}});
  }

  protected render(): string {
    // language=hbs
    return `
        <button class="
            ${styles.button}
            ${this.props.isSimple ? styles.button_simple : ''}
            ${this.props.isDanger ? styles.button_danger : ''}
        "
         ${this.props.isDisabled ? 'disabled' : ''}
         type="button"
        >
            ${Boolean(this.props.type) ? `<span class="${styles.buttonIcon} ${styles.buttonIcon}_${this.props.type}"></span>` : ''}
            {{text}}
        </button>
    `;
  }
}
