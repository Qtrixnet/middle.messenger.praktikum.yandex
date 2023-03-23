import Block from '../../core/Block';
import styles from './chat-card.module.pcss';
import baseAvatar from '../../assets/images/avatar.png';

interface ChatCardProps {
  avatar: string;
  name: string;
  message: string;
  time: string;
  notify: string;
}

export class ChatCard extends Block {
  constructor(props: ChatCardProps) {
    super(props);
  }

  render() {
    // language=hbs
    return `
        <li class=${styles.chatCard}>
            <img class=${styles.avatar} src=${this.props.avatar ? this.props.avatar : baseAvatar} alt={{name}}>
            <div class=${styles.container}>
                <h2 class=${styles.title}>{{name}}</h2>
                <p class=${styles.text}>{{message}}</p>
            </div>
            <div class=${styles.container}>
                <time class=${styles.time}>{{time}}</time>
                {{#if notify}}
                    <div class=${styles.notify}>{{notify}}</div>
                {{/if}}
            </div>
        </li>

    `;
  }
}
