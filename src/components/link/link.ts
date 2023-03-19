import Block from '../../core/Block';
import styles from './link.module.pcss';
import Router from "../../core/Router";
import {Routes} from "../../types/types";

interface LinkProps {
  to: string;
  text?: string;
  icon?: '' | Routes.Chats | Routes.Profile;
}

export class Link extends Block {
  constructor({to, text = '', icon = ''}: LinkProps) {
    super({to, text, icon, events: {click: () => this.navigate()}});
  }

  navigate() {
    Router.go(this.props.to);
  }

  protected render(): string {
    const isActive = Router.getCurrentRoute() === this.props.to;
    // language=hbs
    return `
        <span class="
            ${styles.link} 
            ${this.props.icon ? styles.link__icon : ''}
            ${(this.props.icon && isActive) ? styles.link__icon_active : ''}
        ">
            {{#if ${this.props.icon === Routes.Chats}}}
                {{{MessageIcon}}}
            {{else if ${this.props.icon === Routes.Profile}}}
                {{{ProfileIcon}}}
            {{else}}
                {{text}}
            {{/if}}
        </span>
    `;
  }
}
