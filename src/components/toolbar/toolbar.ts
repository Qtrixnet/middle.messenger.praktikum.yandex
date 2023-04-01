import Block from '../../core/Block';
import styles from './toolbar.module.pcss';
import {Routes} from "../../types/types";
import store from "../../core/Store";
import baseAvatar from "../../assets/images/avatar.png";

export class Toolbar extends Block {
  static componentName = 'Toolbar';
  constructor() {
    super();
  }

  componentDidMount() {
    const {user} = store.getState();
    if (user) {
      this.setProps({avatar: user.avatar});
    }
  }

  render() {
    // language=hbs
    return `
        <header class=${styles.toolbar}>
            <img class=${styles.avatar}
                 src=${Boolean(this.props.avatar) ? `https://ya-praktikum.tech/api/v2/resources${this.props.avatar}` : baseAvatar}
                 alt="avatar">
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
