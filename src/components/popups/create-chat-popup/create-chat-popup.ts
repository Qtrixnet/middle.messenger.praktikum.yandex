import Block from '../../../core/Block';
import styles from './create-chat-popup.module.pcss';
import getElement from '../../../utils/getElement';

interface CreateChatPopupProps {
  handleClose: () => void;
  createChat: (value: string) => Promise<void>;
}

export class CreateChatPopup extends Block {
  static componentName = 'CreateChatPopup';

  constructor({ handleClose, createChat }: CreateChatPopupProps) {
    super({ handleClose, createChat });

    this.setProps({
      isLoading: false,
      onSubmit: (e: Event) => {
        e.preventDefault();

        const inputElement = getElement(this.element, 'chat');

        this.setProps({ isLoading: true });

        createChat(inputElement.value).then(() => {
          handleClose();
          this.setProps({ isLoading: false });
        });
      },
    });
  }

  protected render(): string {
    // language=hbs
    return `
        <div class=${styles.popup}>
            <div class=${styles.overlay}></div>
            
            {{{CreateChatPopupForm 
                    handleClose=handleClose 
                    onSubmit=onSubmit 
                    isLoading=isLoading
            }}}
        </div>
    `;
  }
}
