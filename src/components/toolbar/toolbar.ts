import Block from '../../core/Block';
import styles from './toolbar.module.pcss';
import {Routes} from "../../types/types";

export class Toolbar extends Block {
  render() {
    // language=hbs
    return `
        <header class=${styles.toolbar}>
            <img class=${styles.avatar} src="https://basetop.ru/wp-content/uploads/2021/09/majkl-ili2.jpg"
                 alt="avatar"/>
            <nav>
                <ul class=${styles.list}>
                    <li>
                        {{{Link to="${Routes.Chats}" icon="${Routes.Chats}"}}}
                    </li>
                    <li>
                        {{{Link to="${Routes.Profile}" icon="${Routes.Profile}"}}}
                    </li>
                </ul>
            </nav>
        </header>
    `;
  }
}
