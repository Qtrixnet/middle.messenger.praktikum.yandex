import Block from '../../core/Block';
import './login.css';

export class Login extends Block {
  constructor() {
    super();
  }

  render() {
    // language=hbs
    return `
        <section class="login">
            <form class="login__form">
                <h2 class="login__title">Вход</h2>
                <fieldset class="login__fieldset">
                    {{{Input
                            type="text"
                            name="login"
                            placeholder="Логин"
                            label="Логин:"
                            value="login"
                    }}}
                    {{{Input
                            type="password"
                            name="password"
                            placeholder="Пароль"
                            label="Пароль:"
                            value="123456578"
                    }}}
                </fieldset>
                <div class="login__buttons">
                    <a href="#" class="login__submit-button">Войти</a>
                    <a href="../register/register.html" class="login__link">Зарегистрироваться</a>
                </div>
            </form>
        </section>

    `;
  }
}
