import Block from '../../core/Block';
import styles from './chat-footer.module.pcss';

interface IChatFooter {
  onMessageSubmit: (e: InputEvent) => void;
}

export class ChatFooter extends Block {
  static componentName = 'ChatFooter';

  constructor({ onMessageSubmit }: IChatFooter) {
    super({ onMessageSubmit });
  }

  protected render(): string {
    // language=hbs
    return `
        <footer class=${styles.footer}>
            {{{FooterForm title='test-title' onMessageSubmit=onMessageSubmit}}}
        </footer>
    `;
  }
}
