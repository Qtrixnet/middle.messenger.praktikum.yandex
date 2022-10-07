import Block from '../../core/Block';
import './chats.css';

export class Chats extends Block {
  render() {
    // language=hbs
    return `
        <section class="chats">
            <main class="chats-container">
                <section class="chats-list">
                    <div class="chats-list__search-container">
                        <div class="chats-list__search-line">
                            <input class="chats-list__search" type="text" placeholder="Поиск по сообщениям..."/>
                        </div>
                    </div>
                    <ul class="chats-list__list">
                        {{#each chats}}
                            {{> chat-card/chat-card this}}
                        {{/each}}
                    </ul>
                </section>
                <section class="chat">
                    <header class="chat__header">
                        <div class="chat__header-container">
                            <h1 class="chat__title">Иван Иванов</h1>
                            <span class="chat__status"></span>
                            <p class="chat__status-text">Был в сети 6 минут назад</p>
                        </div>
                        <button class="chat__options"></button>
                    </header>
                    <div class="chat__messages">
                        <ul class="chat__messages-list">
                            <li class="chat__messages-list-item">
                                <p class="chat__messages-list-text">Друзья, у меня для вас особенный выпуск новостей!</p>
                            </li>
                            <li class="chat__messages-list-item">
                                <p class="chat__messages-list-text">У меня для вас особенный выпуск новостей!</p>
                            </li>
                            <li class="chat__messages-list-item">
                                <img class="chat__messages-list-image"
                                     src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg" alt="">
                            </li>
                            <li class="chat__messages-list-item chat__messages-list-item_self">
                                <p class="chat__messages-list-text chat__messages-list-text_self">Pellentesque habitant morbi
                                    tristique!</p>
                            </li>
                            <li class="chat__messages-list-item chat__messages-list-item_self">
                                <p class="chat__messages-list-text chat__messages-list-text_self">Duis ac diam nec massa aliquam
                                    consequat. Curabitur ante neque</p>
                            </li>
                        </ul>
                    </div>
                    <footer class="chat__footer">
                        <div class="chat__footer-container">
                            <button class="chat__attach"></button>
                            <input class="chat__input" type="text" placeholder="Написать сообщение..."/>
                            <button class="chat__send-button"></button>
                        </div>
                    </footer>
                </section>
            </main>
        </section>
    `;
  }
}
