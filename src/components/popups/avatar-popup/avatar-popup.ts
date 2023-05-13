import Block from '../../../core/Block';
import styles from './avatar-popup.module.pcss';
import UserController from '../../../controllers/UserController';

interface AvatarPopupProps {
  handleClose: () => void
}

export class AvatarPopup extends Block {
  static componentName = 'AvatarPopup';

  constructor({ handleClose }: AvatarPopupProps) {
    super({ handleClose });

    this.setProps({
      onSubmit: (e: Event) => {
        e.preventDefault();
        const formData = new FormData();
        const input = document.querySelector('#avatar') as HTMLInputElement;

        if (input && input.files && input.files.length > 0) {
          formData.append('avatar', input.files[0]);
          UserController.updateAvatar(formData);
          handleClose();
        }
      },
    });
  }

  protected render(): string {
    // language=hbs
    return `
        <div class=${styles.popup}>
            <div class=${styles.overlay}></div>
            <form class=${styles.content}>
                {{{CloseButton onClick=handleClose}}}
                <h2 class=${styles.title}>Загрузите файл</h2>
                {{{AvatarInput}}}
                {{{Button
                        text="Сохранить"
                        onClick=onSubmit
                }}}
            </form>
        </div>
    `;
  }
}
