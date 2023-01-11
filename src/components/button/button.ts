import Block from '../../core/Block';
import './button.css';

interface ButtonProps {
  text: string;
  onClick: () => void;
  type?: string;
  isSimple?: boolean;
  isDanger?: boolean;
}

export class Button extends Block {
  constructor({text, type, onClick, isSimple = false, isDanger = false}: ButtonProps) {
    super({text, type, isSimple, isDanger, events: {click: onClick}});
  }

  protected render(): string {
    // language=hbs
    return `
        <button class="
            button 
            ${this.props.isSimple ? 'button_simple' : ''}
            ${this.props.isDanger ? 'button_danger' : ''}
        " type="button">
            ${Boolean(this.props.type) ? `<span class="button__icon button__icon_${this.props.type}"></span>` : ''}
            {{text}}
        </button>
    `;
  }
}
