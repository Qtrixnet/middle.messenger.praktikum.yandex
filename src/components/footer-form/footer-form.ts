import Block from '../../core/Block';
import styles from './footer-form.module.pcss';
import validateForm, { ValidateType } from '../../helpers/validate-form';

interface FooterFormProps {
  onMessageSubmit: () => void;
}

export class FooterForm extends Block {
  static componentName = 'FooterForm';

  constructor({ onMessageSubmit }: FooterFormProps) {
    super({ events: { submit: onMessageSubmit } });

    this.setProps({
      messageError: '',
      messageValue: '',

      onMessageInput: (e: InputEvent) => {
        const element = e.target as HTMLInputElement;
        const errorMessage = validateForm([
          { type: ValidateType.Message, value: element.value },
        ]);
        this.setChildRefProps('messageRef', 'errorRef', { text: errorMessage });
      },
    });
  }

  protected render(): string {
    // language=hbs
    return `
        <form class=${styles['footer-form']}>
            <button class=${styles['footer-attach']} type="button"></button>
            <div class=${styles['footer-wrapper']}>
                {{{ControlledInput
                        onInput=onMessageInput
                        type="text"
                        name="message"
                        placeholder="Напишите что нибудь..."
                        color="light"
                        ref="messageRef"
                        error=messageError
                        value=messageValue
                }}}
            </div>
            <button class=${styles['footer-send']}></button>
        </form>
    `;
  }
}
