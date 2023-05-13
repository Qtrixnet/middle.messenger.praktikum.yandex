import Block from '../../core/Block';
import styles from './button.module.pcss';

export interface ButtonProps {
  text: string;
  onClick: () => void;
  type?: string;
  isSimple?: boolean;
  isDanger?: boolean;
  isDisabled?: boolean;
  className?: string;
  actionType?: 'button' | 'submit';
  isLoading?: boolean;
}

export class Button extends Block {
  static componentName = 'Button';

  constructor({
    text,
    type = '',
    onClick,
    isSimple = false,
    isDanger = false,
    isDisabled = false,
    isLoading = false,
    className = '',
    actionType = 'button',
  }: ButtonProps) {
    super({
      text, type, isSimple, isDanger, isDisabled, isLoading, className, actionType, events: { click: onClick },
    });
  }

  protected render(): string {
    // language=hbs
    return `
        <button class="
            ${styles.button}
            ${this.props.isSimple ? styles.button_simple : ''}
            ${this.props.isDanger ? styles.button_danger : ''}
            ${this.props.className ? this.props.className : ''}
            ${this.props.isLoading ? styles.button_loading : ''}
        "
            ${this.props.isDisabled ? 'disabled' : ''}
            type=${this.props.actionType}
        >
            ${this.props.type ? `<span class="${styles['button-icon']} ${styles['button-icon']}_${this.props.type}"></span>` : ''}
            ${this.props.isLoading ? `<span class="${styles['button-loader']}"></span>` : this.props.text}
        </button>
    `;
  }
}
