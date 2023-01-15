import Block from '../../core/Block';
import styles from './change-password.module.pcss';

interface ChangePasswordProps {
  handleCancel: () => void,
  onSubmit: () => void,
}

export class ChangePassword extends Block {
  constructor({handleCancel, onSubmit,}: ChangePasswordProps) {
    super({handleCancel, onSubmit});
  }

  protected render(): string {
    // language=hbs
    return `
        <fieldset class="${styles.fieldset}">
            {{{ControlledInput
                    onInput=onOldPasswordInput
                    type="password"
                    name="password"
                    placeholder="Ваш старый пароль"
                    label="Старый пароль:"
                    color="light"
                    ref="oldPasswordInputRef"
                    error=oldPasswordError
                    value=oldPasswordValue
            }}}
            {{{ControlledInput
                    onInput=onNewPasswordInput
                    type="password"
                    name="password__second"
                    placeholder="Ваш новый пароль"
                    label="Новый пароль:"
                    color="light"
                    ref="newPasswordInputRef"
                    error=newPasswordError
                    value=newPasswordValue
            }}}
            <div class="${styles.buttons}">
                {{{Button text="Сохранить" onClick=onSubmit}}}
                {{{Button text="Отменить" isSimple=true onClick=handleCancel}}}
            </div>
        </fieldset>
    `;
  }
}
