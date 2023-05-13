import Block from '../../core/Block';
import styles from './options-button.module.pcss';

interface OptionsButtonProps {
  handleClick: () => void;
}

export class OptionsButton extends Block {
  static componentName = 'OptionsButton';

  constructor({ handleClick }: OptionsButtonProps) {
    super({ events: { click: handleClick } });
  }

  protected render(): string {
    // language=hbs
    return `
        <button class=${styles.button}></button>
    `;
  }
}
