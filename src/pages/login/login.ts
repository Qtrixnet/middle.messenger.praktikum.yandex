import Block from '../../core/Block';
import './login.css';
import {validateForm, ValidateType} from "../../helpers/validateForm";

export class Login extends Block {
  constructor() {
    super();

    this.setProps({
      error: '',
      loginValue: '',
      passwordValue: '',
      onFocus: () => console.log('focus'),
      onBlur: () => console.log('blur'),
      onInput: () => console.log('input'),
      onLogin: () => {
        const loginData = {
          login: (this.refs.login.lastElementChild as HTMLInputElement).value,
          password: (this.refs.password.lastElementChild as HTMLInputElement).value
        };

        const errorMessage = validateForm([
          {type: ValidateType.Login, value: loginData.login},
          {type: ValidateType.Password, value: loginData.password},
        ])

        if (errorMessage) {
          this.setProps({
            error: errorMessage,
            loginValue: loginData.login,
            passwordValue: loginData.password,
          })
          console.log(errorMessage)
        } else {
          console.log('форма готова к отправке')
        }
      }
    })
  }

  render() {

    // language=hbs
    return `
        <section class="login">
            <form class="login__form">
                <h2 class="login__title">Вход</h2>
                <fieldset class="login__fieldset">
                    {{{ControlledInput
                            onInput=onInput
                            onFocus=onFocus
                            onBlur=onBlur
                            type="text"
                            name="login"
                            placeholder="Логин"
                            label="Логин:"
                            value="${this.props.loginValue}"
                            ref="login"
                            error="${this.props.error}"
                            color="dark"
                    }}}
                    {{{Input
                            type="text"
                            name="login"
                            placeholder="Логин"
                            label="Логин:"
                            value="${this.props.loginValue}"
                            ref="login"
                            error="${this.props.error}"
                    }}}
                    {{{Input
                            type="password"
                            name="password"
                            placeholder="Пароль"
                            label="Пароль:"
                            value="${this.props.passwordValue}"
                            ref="password"
                            error="${this.props.error}"
                    }}}
                </fieldset>
                {{#if error}}
                    <div class="login__error">
                        <span class="login__error-icon"></span>
                        <span class="login__error-text">{{error}}</span>
                    </div>
                {{/if}}
                <div class="login__buttons">
                    {{{Button text="Войти" onClick=onLogin}}}
                    <a href="../register/register.html" class="login__link">Зарегистрироваться</a>
                </div>
            </form>
        </section>

    `;
  }
}
