import Block from '../../core/Block';
import styles from './error.module.pcss';
import serverError from '../../assets/images/server-error.png';

export class Error extends Block {
  static componentName = 'Error';

  constructor() {
    super();

    this.setProps({
      message: 'Мы уже фиксим',
      image: serverError,
    });
  }

  render() {
    // language=hbs
    return `
        <section class=${styles.error}>
            <div class=${styles.illustration} style="background-image: url('${this.props.image}')"></div>
            <div class=${styles.container}>
                <h1 class=${styles.title}>${this.props.message}</h1>
                {{{Button text="Вернуться назад"}}}
            </div>
        </section>
    `;
  }
}
