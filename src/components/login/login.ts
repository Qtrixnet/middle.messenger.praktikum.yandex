import Block from '../../core/Block';
import './login.css';

export class Login extends Block {
  render() {
    // language=hbs
    return `
        <section class="login">
            <form class="login__form">
                <h2 class="login__title">Вход</h2>
                <fieldset class="login__fieldset">
                    {{#each login}}
                        {{> input/input}}
                    {{/each}}
                </fieldset>
                <div class="login__buttons">
                    <a href="../chats/chats.hbs" class="login__submit-button">Войти</a>
                    <a href="../register/register.hbs" class="login__link">Зарегистрироваться</a>
                </div>
            </form>
        </section>

    `;
  }
}
