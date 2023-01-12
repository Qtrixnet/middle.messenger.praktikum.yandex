import Block from '../../core/Block';
import styles from './login.module.pcss';
import validateForm, {ValidateType} from "../../helpers/validate-form";
import getElement from "../../utils/getElement";
import AuthController from "../../controllers/AuthController";

export class Login extends Block {
  constructor() {
    super();

    this.setProps({
      loginError: '',
      loginValue: '',
      passwordError: '',
      passwordValue: '',
      onLoginInput: (e: InputEvent) => {
        const element = e.target as HTMLInputElement;
        const errorMessage = validateForm([
          {type: ValidateType.Login, value: element.value},
        ])
        // @ts-ignore
        this.refs.loginInputRef.refs.errorRef.setProps({text: errorMessage})
      },
      onPasswordInput: (e: InputEvent) => {
        const element = e.target as HTMLInputElement;
        const errorMessage = validateForm([
          {type: ValidateType.Password, value: element.value},
        ])
        // @ts-ignore
        this.refs.passwordInputRef.refs.errorRef.setProps({text: errorMessage})
      },
      onLogin: () => {
        const loginElement = getElement(this.element, 'login');
        const passwordElement = getElement(this.element, 'password');

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
          const data = {
            login: loginElement.value,
            password: passwordElement.value,
          }

          AuthController.signin(data);
        }
      }
    })
  }

  render() {
    // language=hbs
    return `
        <section class=${styles.login}>
            <form class=${styles.form}>
                <h2 class=${styles.title}>Вход</h2>
                <fieldset class=${styles.fieldset}>
                    {{{ControlledInput
                            onInput=onLoginInput
                            type="text"
                            name="login"
                            placeholder="Ваш логин"
                            label="Логин:"
                            color="dark"
                            ref="loginInputRef"
                            error=loginError
                            value="qtrixnet"
                    }}}
                    {{{ControlledInput
                            onInput=onPasswordInput
                            type="password"
                            name="password"
                            placeholder="Ваш пароль"
                            label="Пароль:"
                            color="dark"
                            ref="passwordInputRef"
                            error=passwordError
                            value="12345678Q"
                    }}}
                </fieldset>
                {{#if error}}
                    <div class=${styles.error}>
                        <span class=${styles.error_icon}></span>
                        <span class=${styles.error_text}>{{error}}</span>
                    </div>
                {{/if}}
                <div class=${styles.buttons}>
                    {{{Button text="Войти" onClick=onLogin}}}
                    {{{Link text="Зарегистрироваться" to="/sign-up"}}}
                </div>
            </form>
        </section>

    `;
  }
}
