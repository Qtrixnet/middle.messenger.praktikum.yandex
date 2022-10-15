import Block from '../../core/Block';
import './profile.css';
import {validateForm, ValidateType} from "../../helpers/validateForm";
import getElement from "../../utils/getElement";

export class Profile extends Block {
  constructor() {
    super();

    this.setProps({
      loginError: '',
      loginValue: 'ivanivanov',
      emailError: '',
      emailValue: 'example@gmail.com',
      firstNameError: '',
      firstNameValue: 'Иван',
      phoneError: '',
      phoneValue: '+7123456789',
      secondNameError: '',
      secondNameValue: 'Иванов',
      displayNameError: '',
      displayNameValue: 'Иваныч',

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

      onDisplayNameFocus: () => console.log('display_name focus'),
      onDisplayNameInput: (e: InputEvent) => {
        const element = e.target as HTMLInputElement;
        const errorMessage = validateForm([
          {type: ValidateType.DisplayName, value: element.value},
        ])
        // @ts-ignore
        this.refs.displayNameInputRef.refs.errorRef.setProps({text: errorMessage})
      },

      onProfileDataChange: () => {
        const loginElement = getElement(this.element, 'login');
        const emailElement = getElement(this.element, 'email');
        const firstNameElement = getElement(this.element, 'first_name');
        const phoneElement = getElement(this.element, 'phone');
        const secondNameElement = getElement(this.element, 'second_name');
        const displayNameElement = getElement(this.element, 'display_name');

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

        const displayNameErrorMessage = validateForm([
          {type: ValidateType.Password, value: displayNameElement.value},
        ])

        if (loginErrorMessage || emailErrorMessage || firstNameErrorMessage || phoneErrorMessage || secondNameErrorMessage || displayNameErrorMessage) {
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
            displayNameError: displayNameErrorMessage,
            displayNameValue: displayNameElement.value,
          })
        } else {
          const data = {
            loginValue: loginElement.value,
            emailValue: emailElement.value,
            firstNameValue: firstNameElement.value,
            phoneValue: phoneElement.value,
            secondNameValue: secondNameElement.value,
            displayNameValue: displayNameElement.value,
          }
          console.log(data)
        }
      }
    })

  }

  render() {
    // language=hbs
    return `
        <section class="profile">
            {{{Toolbar}}}
            <div class="profile__content">
                <header class="profile__header">
                    <img class="profile__avatar" src="https://basetop.ru/wp-content/uploads/2021/09/majkl-ili2.jpg"
                         alt="avatar">
                    <div class="profile__data">
                        <h1 class="profile__title">Иван Иванов</h1>
                        <button class="profile__button profile__button_avatar">
                            <span class="profile__button-icon profile__button-icon_avatar"></span>
                            Поменять аватар
                        </button>
                    </div>
                </header>
                <form class="profile__form">
                    <fieldset class="profile__fieldset">
                        {{{ControlledInput
                                onInput=onLoginInput
                                onFocus=onLoginFocus
                                type="text"
                                name="login"
                                placeholder="Ваш логин"
                                label="Логин:"
                                color="light"
                                ref="loginInputRef"
                                error=loginError
                                value=loginValue
                        }}}
                        {{{ControlledInput
                                onInput=onFirstNameInput
                                onFocus=onFirstNameFocus
                                type="text"
                                name="first_name"
                                placeholder="Ваше имя"
                                label="Имя:"
                                color="light"
                                ref="firstNameInputRef"
                                error=firstNameError
                                value=firstNameValue
                        }}}
                        {{{ControlledInput
                                onInput=onEmailInput
                                onFocus=onEmailFocus
                                type="email"
                                name="email"
                                placeholder="Ваш электронный адрес"
                                label="Электронный адрес:"
                                color="light"
                                ref="emailInputRef"
                                error=emailError
                                value=emailValue
                        }}}
                        {{{ControlledInput
                                onInput=onSecondNameInput
                                onFocus=onSecondNameFocus
                                type="text"
                                name="second_name"
                                placeholder="Ваша фамилия"
                                label="Фамилия:"
                                color="light"
                                ref="secondNameInputRef"
                                error=secondNameError
                                value=secondNameValue
                        }}}
                        {{{ControlledInput
                                onInput=onPhoneInput
                                onFocus=onPhoneFocus
                                type="phone"
                                name="phone"
                                placeholder="Ваш номер телефона"
                                label="Номер телефона:"
                                color="light"
                                ref="phoneInputRef"
                                error=phoneError
                                value=phoneValue
                        }}}
                        {{{ControlledInput
                                onInput=onDisplayNameInput
                                onFocus=onDisplayNameFocus
                                type="text"
                                name="display_name"
                                placeholder="Ваше имя в чате"
                                label="Имя в чате:"
                                color="light"
                                ref="displayNameInputRef"
                                error=displayNameError
                                value=displayNameValue
                        }}}
                    </fieldset>
                    <div class="profile__buttons">
                        {{{Button text="Изменить данные" onClick=onProfileDataChange}}}
                        {{{Button text="Изменить пароль"}}}
                    </div>
                    <button class="profile__button profile__button_quit">
                        <span class="profile__button-icon profile__button-icon_quit"></span>
                        Выйти
                    </button>
                </form>
            </div>
        </section>
    `;
  }
}
