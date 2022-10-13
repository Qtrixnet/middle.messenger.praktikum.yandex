import Block from '../../core/Block';
import './login.css';
import {validateForm, ValidateType} from "../../helpers/validateForm";

export class Login extends Block {
  constructor() {
    super();

    this.setProps({
      loginError: '',
      loginValue: '',
      passwordError: '',
      passwordValue: '',
      onLoginFocus: () => console.log('login focus'),
      onLoginInput: (e: InputEvent) => {
        const element = e.target as HTMLInputElement;
        const errorMessage = validateForm([
          {type: ValidateType.Login, value: element.value},
        ])
        // @ts-ignore
        this.refs.loginInputRef.refs.errorRef.setProps({text: errorMessage})
      },
      onPasswordFocus: () => console.log('password focus'),
      onPasswordInput: (e: InputEvent) => {
        const element = e.target as HTMLInputElement;
        const errorMessage = validateForm([
          {type: ValidateType.Password, value: element.value},
        ])
        // @ts-ignore
        this.refs.passwordInputRef.refs.errorRef.setProps({text: errorMessage})
      },
      onLogin: () => {
        const loginElement = this.element?.querySelector('input[name="login"]') as HTMLInputElement;
        const passwordElement = this.element?.querySelector('input[name="password"]') as HTMLInputElement;

        const loginErrorMessage = validateForm([
          {type: ValidateType.Login, value: loginElement.value},
        ])

        const passwordErrorMessage = validateForm([
          {type: ValidateType.Password, value: passwordElement.value},
        ])

        if (loginErrorMessage || passwordErrorMessage) {
          this.setProps({
            passwordError: passwordErrorMessage,
            loginError: loginErrorMessage,
            loginValue: loginElement.value,
            passwordValue: passwordElement.value,
          })
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
                            onInput=onLoginInput
                            onFocus=onLoginFocus
                            type="text"
                            name="login"
                            placeholder="Ваш логин"
                            label="Логин:"
                            color="dark"
                            ref="loginInputRef"
                            error=loginError
                            value=loginValue
                    }}}
                    {{{ControlledInput
                            onInput=onPasswordInput
                            onFocus=onPasswordFocus
                            type="text"
                            name="password"
                            placeholder="Ваш пароль"
                            label="Пароль:"
                            color="dark"
                            ref="passwordInputRef"
                            error=passwordError
                            value=passwordValue
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
