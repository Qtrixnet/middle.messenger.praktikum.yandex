import Block from '../../core/Block';
import styles from './close-button.module.pcss';

interface CloseButtonProps {
  onClick: () => void;
}

export class CloseButton extends Block {
  constructor({onClick}: CloseButtonProps) {
    super({events: {click: onClick}});
  }

  protected render(): string {
    // language=hbs
    return `
        <button class=${styles.close} type="button">
        </button>
    `;
  }
}
