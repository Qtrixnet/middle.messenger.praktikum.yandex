import Block from '../../core/Block';
import styles from './options.module.pcss';

interface OptionsProps {
  handleAddUser: () => void,
  handleDeleteUser: () => void,
}

export class Options extends Block {
  constructor({handleAddUser, handleDeleteUser}: OptionsProps) {
    super({handleAddUser, handleDeleteUser});
  }

  protected render(): string {
    // language=hbs
    return `
        <div class="${styles.options}">
            {{{Option title="Добавить пользователя" type="add" handleClick=handleAddUser}}}
            {{{Option title="Удалить пользователя" type="delete" handleClick=handleDeleteUser}}}
        </div>
    `;
  }
}
