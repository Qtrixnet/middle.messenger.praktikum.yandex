import Block from '../../core/Block';
import './toolbar.css';

export class Toolbar extends Block {
  render() {
    // language=hbs
    return `
        <header class="toolbar">
            <img class="toolbar__avatar" src="https://basetop.ru/wp-content/uploads/2021/09/majkl-ili2.jpg"
                 alt="avatar"/>
            <nav class="toolbar__nav">
                <ul class="toolbar__list">
                    <li class="toolbar__list-item">
                        <a href="../../pages/chats/chats.hbs" class="toolbar__button toolbar__button_chats"/>
                    </li>
                    <li class="toolbar__list-item">
                        <a href="../../pages/profile/profile.hbs" class="toolbar__button toolbar__button_profile"/>
                    </li>
                </ul>
            </nav>
        </header>
    `;
  }
}
