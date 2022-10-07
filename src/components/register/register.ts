import Block from '../../core/Block';
import './register.css';

export class Register extends Block {
  render() {
    // language=hbs
    return `
        <section class="register">
            <form class="register__form">
                <h2 class="register__title">Регистрация аккаунта</h2>
                <fieldset class="register__fieldset">
                    {{#each register}}
                        {{> input/input}}
                    {{/each}}
                    <fieldset class="register__container">
                        <label class="register__label">
                            <span class="register__text">Пароль:</span>
                            <input class="register__input" type="password" placeholder="1234567" name="password"/>
                        </label>
                        <label class="register__label">
                            <span class="register__text">Повторите пароль:</span>
                            <input class="register__input" type="password" placeholder="1234567" name="password__second"/>
                        </label>
                    </fieldset>
                </fieldset>
                <div class="register__buttons">
                    <button class="register__submit-button">Зарегистрироваться</button>
                    <a href="../index/index.hbs" class="register__link">Вернуться назад</a>
                </div>
            </form>
        </section>
    `;
  }
}