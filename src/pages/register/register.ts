import Block from '../../core/Block';
import './register.css';
import {validateForm, ValidateType} from "../../helpers/validateForm";

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
        const loginElement = this.element?.querySelector('input[name="login"]') as HTMLInputElement;
        const emailElement = this.element?.querySelector('input[name="email"]') as HTMLInputElement;
        const firstNameElement = this.element?.querySelector('input[name="first_name"]') as HTMLInputElement;
        const phoneElement = this.element?.querySelector('input[name="phone"]') as HTMLInputElement;
        const secondNameElement = this.element?.querySelector('input[name="second_name"]') as HTMLInputElement;
        const passwordElement = this.element?.querySelector('input[name="password"]') as HTMLInputElement;
        const passwordSecondElement = this.element?.querySelector('input[name="password__second"]') as HTMLInputElement;

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

        if (loginErrorMessage || passwordErrorMessage) {
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
          console.log('форма готова к отправке')
        }
      }
    })
  }

  render() {
    // language=hbs
    return `
        <section class="register">
            <form class="register__form">
                <h2 class="register__title">Регистрация аккаунта</h2>
                <fieldset class="register__fieldset">
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
                    <fieldset class="register__container">
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
                <div class="register__buttons">
                    {{{Button text="Зарегистрироваться" onClick=onRegister}}}
                    <a href="#" class="register__link">Вернуться назад</a>
                </div>
            </form>
        </section>
    `;
  }
}
