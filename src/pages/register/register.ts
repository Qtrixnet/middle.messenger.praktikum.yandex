import Block from '../../core/Block';
import styles from './register.module.pcss';
import getElement from "../../utils/getElement";
import validateForm, {ValidateType} from "../../helpers/validate-form";
import AuthController from "../../controllers/AuthController";

export class Register extends Block {
  constructor() {
    super();

    this.setProps({
      loginError: '',
      loginValue: '',
      emailError: '',
      emailValue: '',
      firstNameError: '',
      firstNameValue: '',
      phoneError: '',
      phoneValue: '',
      secondNameError: '',
      secondNameValue: '',
      passwordError: '',
      passwordValue: '',
      secondPasswordError: '',
      secondPasswordValue: '',

      onLoginFocus: () => console.log('login focus'),
      onLoginInput: (e: InputEvent) => {
        const element = e.target as HTMLInputElement;
        const errorMessage = validateForm([
          {type: ValidateType.Login, value: element.value},
        ])
        // @ts-ignore
        this.refs.loginInputRef.refs.errorRef.setProps({text: errorMessage})
      },

      onEmailFocus: () => console.log('email focus'),
      onEmailInput: (e: InputEvent) => {
        const element = e.target as HTMLInputElement;
        const errorMessage = validateForm([
          {type: ValidateType.Email, value: element.value},
        ])
        // @ts-ignore
        this.refs.emailInputRef.refs.errorRef.setProps({text: errorMessage})
      },

      onFirstNameFocus: () => console.log('first_name focus'),
      onFirstNameInput: (e: InputEvent) => {
        const element = e.target as HTMLInputElement;
        const errorMessage = validateForm([
          {type: ValidateType.FirstName, value: element.value},
        ])
        // @ts-ignore
        this.refs.firstNameInputRef.refs.errorRef.setProps({text: errorMessage})
      },

      onPhoneFocus: () => console.log('phone focus'),
      onPhoneInput: (e: InputEvent) => {
        const element = e.target as HTMLInputElement;
        const errorMessage = validateForm([
          {type: ValidateType.Phone, value: element.value},
        ])
        // @ts-ignore
        this.refs.phoneInputRef.refs.errorRef.setProps({text: errorMessage})
      },

      onSecondNameFocus: () => console.log('second_name focus'),
      onSecondNameInput: (e: InputEvent) => {
        const element = e.target as HTMLInputElement;
        const errorMessage = validateForm([
          {type: ValidateType.SecondName, value: element.value},
        ])
        // @ts-ignore
        this.refs.secondNameInputRef.refs.errorRef.setProps({text: errorMessage})
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

      onSecondPasswordFocus: () => console.log('password__second focus'),
      onSecondPasswordInput: (e: InputEvent) => {
        const element = e.target as HTMLInputElement;
        const errorMessage = validateForm([
          {type: ValidateType.SecondPassword, value: element.value},
        ])
        // @ts-ignore
        this.refs.secondPasswordInputRef.refs.errorRef.setProps({text: errorMessage})
      },

      onRegister: () => {
        const loginElement = getElement(this.element, 'login');
        const emailElement = getElement(this.element, 'email');
        const firstNameElement = getElement(this.element, 'first_name');
        const phoneElement = getElement(this.element, 'phone');
        const secondNameElement = getElement(this.element, 'second_name');
        const passwordElement = getElement(this.element, 'password');
        const passwordSecondElement = getElement(this.element, 'password__second');

        const loginErrorMessage = validateForm([
          {type: ValidateType.Login, value: loginElement.value},
        ])

        const emailErrorMessage = validateForm([
          {type: ValidateType.Email, value: emailElement.value},
        ])

        const firstNameErrorMessage = validateForm([
          {type: ValidateType.FirstName, value: firstNameElement.value},
        ])

        const phoneErrorMessage = validateForm([
          {type: ValidateType.Phone, value: phoneElement.value},
        ])

        const secondNameErrorMessage = validateForm([
          {type: ValidateType.SecondName, value: secondNameElement.value},
        ])

        const passwordErrorMessage = validateForm([
          {type: ValidateType.Password, value: passwordElement.value},
        ])

        const secondPasswordErrorMessage = validateForm([
          {type: ValidateType.SecondPassword, value: passwordSecondElement.value},
        ])

        if (loginErrorMessage || emailErrorMessage || firstNameErrorMessage || phoneErrorMessage || secondNameErrorMessage || passwordErrorMessage || secondPasswordErrorMessage) {
          this.setProps({
            loginError: loginErrorMessage,
            loginValue: loginElement.value,
            emailError: emailErrorMessage,
            emailValue: emailElement.value,
            firstNameError: firstNameErrorMessage,
            firstNameValue: firstNameElement.value,
            phoneError: phoneErrorMessage,
            phoneValue: phoneElement.value,
            secondNameError: secondNameErrorMessage,
            secondNameValue: secondNameElement.value,
            passwordError: passwordErrorMessage,
            passwordValue: passwordElement.value,
            secondPasswordError: secondPasswordErrorMessage,
            secondPasswordValue: passwordSecondElement.value,
          })
        } else {
          const data = {
            first_name: firstNameElement.value,
            second_name: secondNameElement.value,
            login: loginElement.value,
            email: emailElement.value,
            phone: phoneElement.value,
            password: passwordElement.value,
          }

          AuthController.signup(data);
        }
      }
    })
  }

  render() {
    // language=hbs
    return `
        <section class=${styles.register}>
            <form class=${styles.form}>
                <h2 class=${styles.title}>Регистрация аккаунта</h2>
                <fieldset class=${styles.fieldset}>
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
                            onInput=onEmailInput
                            onFocus=onEmailFocus
                            type="email"
                            name="email"
                            placeholder="Ваш электронный адрес"
                            label="Электронный адрес:"
                            color="dark"
                            ref="emailInputRef"
                            error=emailError
                            value=emailValue
                    }}}
                    {{{ControlledInput
                            onInput=onFirstNameInput
                            onFocus=onFirstNameFocus
                            type="text"
                            name="first_name"
                            placeholder="Ваше имя"
                            label="Имя:"
                            color="dark"
                            ref="firstNameInputRef"
                            error=firstNameError
                            value=firstNameValue
                    }}}
                    {{{ControlledInput
                            onInput=onPhoneInput
                            onFocus=onPhoneFocus
                            type="phone"
                            name="phone"
                            placeholder="Ваш номер телефона"
                            label="Номер телефона:"
                            color="dark"
                            ref="phoneInputRef"
                            error=phoneError
                            value=phoneValue
                    }}}
                    {{{ControlledInput
                            onInput=onSecondNameInput
                            onFocus=onSecondNameFocus
                            type="text"
                            name="second_name"
                            placeholder="Ваша фамилия"
                            label="Фамилия:"
                            color="dark"
                            ref="secondNameInputRef"
                            error=secondNameError
                            value=secondNameValue
                    }}}
                    <fieldset class=${styles.container}>
                        {{{ControlledInput
                                onInput=onPasswordInput
                                onFocus=onPasswordFocus
                                type="password"
                                name="password"
                                placeholder="Ваш пароль"
                                label="Пароль:"
                                color="dark"
                                ref="passwordInputRef"
                                error=passwordError
                                value=passwordValue
                        }}}
                        {{{ControlledInput
                                onInput=onSecondPasswordInput
                                onFocus=onSecondPasswordFocus
                                type="password"
                                name="password__second"
                                placeholder="Повторите пароль"
                                label="Повторите пароль:"
                                color="dark"
                                ref="secondPasswordInputRef"
                                error=secondPasswordError
                                value=secondPasswordValue
                        }}}
                    </fieldset>
                </fieldset>
                <div class=${styles.buttons}>
                    {{{Button text="Зарегистрироваться" onClick=onRegister}}}
                    {{{Link text="Вернуться назад" to="/"}}}
                </div>
            </form>
        </section>
    `;
  }
}
