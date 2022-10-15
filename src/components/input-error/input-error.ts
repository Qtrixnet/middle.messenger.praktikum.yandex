import Block from '../../core/Block';
import './input-error.css';

interface InputErrorProps {
  text: string;
}

export class InputError extends Block<InputErrorProps>{
  render() {
    // language=hbs
    return `
        <span class="input-error">{{#if text}}{{text}}{{/if}}</span>
    `;
  }
}
