import Block from '../../core/Block';
import './profile.css';
import validateForm, {ValidateType} from "../../helpers/validate-form";
import getElement from "../../utils/getElement";
import AuthController from "../../controllers/AuthController";
import store from "../../core/Store";
import UserController from "../../controllers/UserController";

export class Profile extends Block {
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
      displayNameError: '',
      displayNameValue: '',
      isFormDisabled: true,
      previousData: {},

      onProfileDataEnabled: () => {
        this.setProps({
          isFormDisabled: false,
          previousData: {
            loginValue: this.props.loginValue,
            emailValue: this.props.emailValue,
            firstNameValue: this.props.firstNameValue,
            phoneValue: this.props.phoneValue,
            secondNameValue: this.props.secondNameValue,
            displayNameValue: this.props.displayNameValue,
          }
        })
      },
      onProfileDataDisabled: () => {
        this.setProps({
          isFormDisabled: true,
          loginValue: this.props.previousData.loginValue,
          emailValue: this.props.previousData.emailValue,
          firstNameValue: this.props.previousData.firstNameValue,
          phoneValue: this.props.previousData.phoneValue,
          secondNameValue: this.props.previousData.secondNameValue,
          displayNameValue: this.props.previousData.displayNameValue,
        })
      },

      onLoginInput: (e: InputEvent) => {
        const element = e.target as HTMLInputElement;
        const errorMessage = validateForm([
          {type: ValidateType.Login, value: element.value},
        ])
        // @ts-ignore
        this.refs.loginInputRef.refs.errorRef.setProps({text: errorMessage})
      },

      onEmailInput: (e: InputEvent) => {
        const element = e.target as HTMLInputElement;
        const errorMessage = validateForm([
          {type: ValidateType.Email, value: element.value},
        ])
        // @ts-ignore
        this.refs.emailInputRef.refs.errorRef.setProps({text: errorMessage})
      },

      onFirstNameInput: (e: InputEvent) => {
        const element = e.target as HTMLInputElement;
        const errorMessage = validateForm([
          {type: ValidateType.FirstName, value: element.value},
        ])
        // @ts-ignore
        this.refs.firstNameInputRef.refs.errorRef.setProps({text: errorMessage})
      },

      onPhoneInput: (e: InputEvent) => {
        const element = e.target as HTMLInputElement;
        const errorMessage = validateForm([
          {type: ValidateType.Phone, value: element.value},
        ])
        // @ts-ignore
        this.refs.phoneInputRef.refs.errorRef.setProps({text: errorMessage})
      },

      onSecondNameInput: (e: InputEvent) => {
        const element = e.target as HTMLInputElement;
        const errorMessage = validateForm([
          {type: ValidateType.SecondName, value: element.value},
        ])
        // @ts-ignore
        this.refs.secondNameInputRef.refs.errorRef.setProps({text: errorMessage})
      },

      onDisplayNameInput: (e: InputEvent) => {
        const element = e.target as HTMLInputElement;
        const errorMessage = validateForm([
          {type: ValidateType.DisplayName, value: element.value},
        ])
        // @ts-ignore
        this.refs.displayNameInputRef.refs.errorRef.setProps({text: errorMessage})
      },

      onLogout: () => {
        AuthController.logout();
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
            login: loginElement.value,
            email: emailElement.value,
            first_name: firstNameElement.value,
            phone: phoneElement.value,
            second_name: secondNameElement.value,
            display_name: displayNameElement.value,
          }

          UserController.updateUser(data);

          this.setProps({isFormDisabled: false})
        }
      }
    })

  }

  async componentDidMount() {
    await AuthController.fetchUser();
    const {user} = store.getState();
    this.setProps({
      loginValue: user.login,
      emailValue: user.email,
      firstNameValue: user.first_name,
      phoneValue: user.phone,
      secondNameValue: user.second_name,
      displayNameValue: user.display_name,
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
                        <h1 class="profile__title">${this.props.firstNameValue} ${this.props.secondNameValue}</h1>
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
                                type="text"
                                name="login"
                                placeholder="Ваш логин"
                                label="Логин:"
                                color="light"
                                ref="loginInputRef"
                                error=loginError
                                value=loginValue
                                isDisabled=isFormDisabled
                        }}}
                        {{{ControlledInput
                                onInput=onFirstNameInput
                                type="text"
                                name="first_name"
                                placeholder="Ваше имя"
                                label="Имя:"
                                color="light"
                                ref="firstNameInputRef"
                                error=firstNameError
                                value=firstNameValue
                                isDisabled=isFormDisabled
                        }}}
                        {{{ControlledInput
                                onInput=onEmailInput
                                type="email"
                                name="email"
                                placeholder="Ваш электронный адрес"
                                label="Электронный адрес:"
                                color="light"
                                ref="emailInputRef"
                                error=emailError
                                value=emailValue
                                isDisabled=isFormDisabled
                        }}}
                        {{{ControlledInput
                                onInput=onSecondNameInput
                                type="text"
                                name="second_name"
                                placeholder="Ваша фамилия"
                                label="Фамилия:"
                                color="light"
                                ref="secondNameInputRef"
                                error=secondNameError
                                value=secondNameValue
                                isDisabled=isFormDisabled
                        }}}
                        {{{ControlledInput
                                onInput=onPhoneInput
                                type="phone"
                                name="phone"
                                placeholder="Ваш номер телефона"
                                label="Номер телефона:"
                                color="light"
                                ref="phoneInputRef"
                                error=phoneError
                                value=phoneValue
                                isDisabled=isFormDisabled
                        }}}
                        {{{ControlledInput
                                onInput=onDisplayNameInput
                                type="text"
                                name="display_name"
                                placeholder="Ваше имя в чате"
                                label="Имя в чате:"
                                color="light"
                                ref="displayNameInputRef"
                                error=displayNameError
                                value=displayNameValue
                                isDisabled=isFormDisabled
                        }}}
                    </fieldset>
                    <div class="profile__buttons">
                        ${this.props.isFormDisabled ? `
                          {{{Button text="Изменить данные" onClick=onProfileDataEnabled}}}
                          {{{Button text="Изменить пароль"}}}            
                        ` : `
                          {{{Button text="Сохранить" onClick=onProfileDataChange}}}
                          {{{Button text="Отменить" onClick=onProfileDataDisabled}}}
                        `}
                    </div>
                    {{{Button
                            text="Выйти"
                            isSimple=true
                            isDanger=true
                            onClick=onLogout
                            type="quit"
                    }}}
                </form>
            </div>
        </section>
    `;
  }
}
