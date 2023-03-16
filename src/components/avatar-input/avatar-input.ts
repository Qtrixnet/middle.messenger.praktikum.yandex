import Block from '../../core/Block';
import styles from './avatar-input.module.pcss';

interface AvatarInputProps {
  onChange: () => void
}

export class AvatarInput extends Block {
  constructor({onChange}: AvatarInputProps) {
    super({
      events: {change: onChange}
    });
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
