import Block from '../../core/Block';
import styles from './option.module.pcss';

interface OptionProps {
  title: string
  type?: 'add' | 'delete',
  handleClick?: () => void,
}

export class Option extends Block {
  constructor({title, type = 'add', handleClick}: OptionProps) {
    super({title, type, events: {click: handleClick}});
  }

  protected render(): string {
    // language=hbs
    return `
        <div class="${styles.option}">
            <span
                    class="
                    ${styles.icon}
                    ${this.props.type === 'add' ? styles.icon_add : styles.icon_delete}
                "
            >
            </span>
            <p class="${styles.text}">
                {{{title}}}
            </p>
        </div>
    `;
  }
}
