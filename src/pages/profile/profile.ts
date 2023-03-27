import Block from '../../core/Block';
import styles from './profile.module.pcss';
import validateForm, {ValidateType} from "../../helpers/validate-form";
import getElement from "../../utils/getElement";
import AuthController from "../../controllers/AuthController";
import store from "../../core/Store";
import UserController from "../../controllers/UserController";
import baseAvatar from "../../assets/images/avatar.png";

export class Profile extends Block {
  constructor() {
    super();

    this.setProps({
      avatar: '',
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
      oldPasswordError: '',
      oldPasswordValue: '',
      newPasswordError: '',
      newPasswordValue: '',
      isFormDisabled: true,
      isPasswordChanging: false,
      isPopupOpen: false,
      previousData: {},

      avatarPopupOpen: () => {
        this.setProps({
          isPopupOpen: true,
        })
      },

      avatarPopupClose: () => {
        this.setProps({
          isPopupOpen: false,
        })
      },

      onPasswordChangeEnabled: () => {
        this.setProps({
          isPasswordChanging: true,
        })
      },

      onPasswordChangeDisabled: () => {
        this.setProps({
          isPasswordChanging: false,
        })
      },

      onOldPasswordInput: (e: InputEvent) => {
        const element = e.target as HTMLInputElement;
        const errorMessage = validateForm([
          {type: ValidateType.Password, value: element.value},
        ])
        // @ts-ignore
        this.refs.oldPasswordInputRef.refs.errorRef.setProps({text: errorMessage})
      },

      onNewPasswordInput: (e: InputEvent) => {
        const element = e.target as HTMLInputElement;
        const errorMessage = validateForm([
          {type: ValidateType.Password, value: element.value},
        ])
        // @ts-ignore
        this.refs.newPasswordInputRef.refs.errorRef.setProps({text: errorMessage})
      },

      OnNewPasswordSubmit: async () => {
        const oldPasswordElement = getElement(this.element, 'password');
        const newPasswordElement = getElement(this.element, 'password__second');

        const oldPasswordErrorMessage = validateForm([
          {type: ValidateType.Password, value: oldPasswordElement.value},
        ])

        const newPasswordErrorMessage = validateForm([
          {type: ValidateType.Password, value: newPasswordElement.value},
        ])

        if (oldPasswordErrorMessage || newPasswordErrorMessage) {
          this.setProps({
            oldPasswordError: oldPasswordErrorMessage,
            oldPasswordValue: oldPasswordElement.value,
            newPasswordError: newPasswordErrorMessage,
            newPasswordValue: newPasswordElement.value,
          })
        } else {
          const data = {
            oldPassword: oldPasswordElement.value,
            newPassword: newPasswordElement.value,
          }

          await UserController.updatePassword(data);
        }
      },

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
      avatar: user.avatar || '',
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
        <section class=${styles.profile}>
            {{{Toolbar}}}
            <div class=${styles.content}>
                <header class=${styles.header}>
                    <img class=${styles.avatar}
                         src=${Boolean(this.props.avatar) ? `https://ya-praktikum.tech/api/v2/resources${this.props.avatar}` : baseAvatar}
                         alt="avatar">
                    <div class=${styles.data}>
                        <h1 class=${styles.title}>${this.props.firstNameValue} ${this.props.secondNameValue}</h1>
                        {{{Button
                                text="Поменять аватар"
                                isSimple=true
                                onClick=avatarPopupOpen
                                type="avatar"
                        }}}
                    </div>
                </header>
                <form class=${styles.form}>
                    ${this.props.isPasswordChanging ? `{{{ChangePassword
                      handleCancel=onPasswordChangeDisabled
                      onSubmit=OnNewPasswordSubmit
                      oldPasswordValue=oldPasswordValue
                      onOldPasswordInput=onOldPasswordInput
                    }}}` : `
                      <fieldset class=${styles.fieldset}>
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
                    <div class=${styles.buttons}>
                        ${this.props.isFormDisabled ? `
                          {{{Button text="Изменить данные" onClick=onProfileDataEnabled}}}
                          {{{Button text="Изменить пароль" onClick=onPasswordChangeEnabled}}}            
                        ` : `
                          {{{Button text="Сохранить" onClick=onProfileDataChange}}}
                          {{{Button text="Отменить" onClick=onProfileDataDisabled}}}
                        `}
                    </div>
                    `}
                    {{{Button
                            text="Выйти"
                            isSimple=true
                            isDanger=true
                            onClick=onLogout
                            type="quit"
                    }}}
                </form>
            </div>
            {{#if isPopupOpen}}
                {{{AvatarPopup
                        handleClose=avatarPopupClose
                }}}
            {{/if}}
        </section>
    `;
  }
}
