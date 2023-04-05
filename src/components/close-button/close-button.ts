import Block from '../../core/Block';
import styles from './close-button.module.pcss';

interface CloseButtonProps {
  onClick: () => void;
  className?: string
}

export class CloseButton extends Block {
  static componentName = 'CloseButton';
  constructor({onClick, className = ''}: CloseButtonProps) {
    super({className, events: {click: onClick}});
  }

  protected render(): string {
    // language=hbs
    return `
        <button class="${styles.close} ${this.props.className}" type="button">
        </button>
    `;
  }
}
