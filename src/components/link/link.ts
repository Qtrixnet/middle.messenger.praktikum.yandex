import Block from '../../core/Block';
import styles from './link.module.pcss';
import Router from "../../core/Router";

interface LinkProps {
  to: string;
  text: string;
}

export class Link extends Block {
  constructor({to, text}: LinkProps) {
    super({to, text, events: {click: () => this.navigate()}});
  }

  navigate() {
    Router.go(this.props.to);
  }

  protected render(): string {
    // language=hbs
    return `
        <span class=${styles.link}>{{text}}</span>
    `;
  }
}
