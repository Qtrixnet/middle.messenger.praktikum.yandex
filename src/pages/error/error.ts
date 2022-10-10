import Block from '../../core/Block';
import './error.css';

export class Error extends Block {
  constructor() {
    super();

  }
  render() {
    // language=hbs
    return `
        <section class="error">
            <div class="error__illustration" style="background-image: url('../../assets/images/server-error.png')"></div>
            <div class="error__container">
                <h1 class="error__title">Мы уже фиксим</h1>
                <a href="../profile/profile.hbs" class="error__button">Вернуться назад</a>
            </div>
        </section>
    `;
  }
}
