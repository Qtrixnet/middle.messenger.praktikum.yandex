import Block from '../../core/Block';
import styles from './toolbar.module.pcss';

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
                        <a href="#" class="${styles.button} ${styles.button_chats}"></a>
                    </li>
                    <li>
                        <a href="#" class="${styles.button} ${styles.button_profile}"></a>
                    </li>
                </ul>
            </nav>
        </header>
    `;
  }
}
