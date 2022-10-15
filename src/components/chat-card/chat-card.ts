import Block from '../../core/Block';
import './chat-card.css';

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
        <li class="chat-card">
            <img class="chat-card__avatar" src={{avatar}} alt={{name}}>
            <div class="chat-card__container">
                <h2 class="chat-card__title">{{name}}</h2>
                <p class="chat-card__text">{{message}}</p>
            </div>
            <div class="chat-card__container">
                <time class="chat-card__time">{{time}}</time>
                <div class="chat-card__notify">{{notify}}</div>
            </div>
        </li>

    `;
  }
}
