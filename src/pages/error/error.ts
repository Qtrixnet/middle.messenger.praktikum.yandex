import Block from '../../core/Block';
import './error.css';
import serverError from '../../assets/images/server-error.png';

export class Error extends Block {
  constructor() {
    super();

    this.setProps({
      message: 'Мы уже фиксим',
      image: serverError
    });
  }
  render() {
    // language=hbs
    return `
        <section class="error">
            <div class="error__illustration" style="background-image: url('${this.props.image}')"></div>
            <div class="error__container">
                <h1 class="error__title">${this.props.message}</h1>
                {{{Button text="Вернуться назад"}}}
            </div>
        </section>
    `;
  }
}
