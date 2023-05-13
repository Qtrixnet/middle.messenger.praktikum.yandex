import Block from '../../core/Block';
import styles from './register.module.pcss';
import getElement from '../../utils/getElement';
import validateForm, { ValidateType } from '../../helpers/validate-form';
import AuthController from '../../controllers/AuthController';

export class Register extends Block {
  static componentName = 'Register';

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

      onLoginInput: (e: InputEvent) => {
        const element = e.target as HTMLInputElement;
        const errorMessage = validateForm([
          { type: ValidateType.Login, value: element.value },
        ]);
        this.setChildRefProps('loginInputRef', 'errorRef', { text: errorMessage });
      },

      onEmailInput: (e: InputEvent) => {
        const element = e.target as HTMLInputElement;
        const errorMessage = validateForm([
          { type: ValidateType.Email, value: element.value },
        ]);
        this.setChildRefProps('emailInputRef', 'errorRef', { text: errorMessage });
      },

      onFirstNameInput: (e: InputEvent) => {
        const element = e.target as HTMLInputElement;
        const errorMessage = validateForm([
          { type: ValidateType.FirstName, value: element.value },
        ]);
        this.setChildRefProps('firstNameInputRef', 'errorRef', { text: errorMessage });
      },

      onPhoneInput: (e: InputEvent) => {
        const element = e.target as HTMLInputElement;
        const errorMessage = validateForm([
          { type: ValidateType.Phone, value: element.value },
        ]);
        this.setChildRefProps('phoneInputRef', 'errorRef', { text: errorMessage });
      },

      onSecondNameInput: (e: InputEvent) => {
        const element = e.target as HTMLInputElement;
        const errorMessage = validateForm([
          { type: ValidateType.SecondName, value: element.value },
        ]);
        this.setChildRefProps('secondNameInputRef', 'errorRef', { text: errorMessage });
      },

      onPasswordInput: (e: InputEvent) => {
        const element = e.target as HTMLInputElement;
        const errorMessage = validateForm([
          { type: ValidateType.Password, value: element.value },
        ]);
        this.setChildRefProps('passwordInputRef', 'errorRef', { text: errorMessage });
      },

      onSecondPasswordInput: (e: InputEvent) => {
        const element = e.target as HTMLInputElement;
        const errorMessage = validateForm([
          { type: ValidateType.SecondPassword, value: element.value },
        ]);
        this.setChildRefProps('secondPasswordInputRef', 'errorRef', { text: errorMessage });
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
          { type: ValidateType.Login, value: loginElement.value },
        ]);

        const emailErrorMessage = validateForm([
          { type: ValidateType.Email, value: emailElement.value },
        ]);

        const firstNameErrorMessage = validateForm([
          { type: ValidateType.FirstName, value: firstNameElement.value },
        ]);

        const phoneErrorMessage = validateForm([
          { type: ValidateType.Phone, value: phoneElement.value },
        ]);

        const secondNameErrorMessage = validateForm([
          { type: ValidateType.SecondName, value: secondNameElement.value },
        ]);

        const passwordErrorMessage = validateForm([
          { type: ValidateType.Password, value: passwordElement.value },
        ]);

        const secondPasswordErrorMessage = validateForm([
          { type: ValidateType.SecondPassword, value: passwordSecondElement.value },
        ]);

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
          });
        } else {
          const data = {
            first_name: firstNameElement.value,
            second_name: secondNameElement.value,
            login: loginElement.value,
            email: emailElement.value,
            phone: phoneElement.value,
            password: passwordElement.value,
          };

          AuthController.signup(data);
        }
      },
    });
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
