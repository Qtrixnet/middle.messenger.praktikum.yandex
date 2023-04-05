import Block from '../../core/Block';
import styles from './input-error.module.pcss';

interface InputErrorProps {
  text: string;
}

export class InputError extends Block<InputErrorProps>{
  static componentName = 'InputError';
  render() {
    // language=hbs
    return `
        <span class=${styles.input}>{{#if text}}{{text}}{{/if}}</span>
    `;
  }
}
