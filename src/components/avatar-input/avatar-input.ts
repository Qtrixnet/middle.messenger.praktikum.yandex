import Block from '../../core/Block';
import styles from './avatar-input.module.pcss';

export class AvatarInput extends Block {
  static componentName = 'AvatarInput';

  constructor() {
    super();
  }

  render() {
    // language=hbs
    return `
        <label class=${styles.label}>
            Выберите файл на компьютере
            <input class=${styles.input} type="file" name="avatar" id="avatar">
        </label>
    `;
  }
}
