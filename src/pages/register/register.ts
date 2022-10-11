import Block from '../../core/Block';
import './register.css';

export class Register extends Block {
  protected getStateFromProps() {
    this.state = {
      values: {
        login: '',
        email: '',
        firstName: '',
        phone: '',
        secondName: '',
        password: '',
        secondPassword: '',
      },
      errors: {
        login: '',
        email: '',
        firstName: '',
        phone: '',
        secondName: '',
        password: '',
        secondPassword: '',
      },
      onRegister: () => {
        const loginData = {
          login: (this.refs.login.lastElementChild as HTMLInputElement).value,
          email: (this.refs.email.lastElementChild as HTMLInputElement).value,
          firstName: (this.refs.firstName.lastElementChild as HTMLInputElement).value,
          phone: (this.refs.phone.lastElementChild as HTMLInputElement).value,
          secondName: (this.refs.secondName.lastElementChild as HTMLInputElement).value,
          password: (this.refs.password.lastElementChild as HTMLInputElement).value,
          secondPassword: (this.refs.secondPassword.lastElementChild as HTMLInputElement).value,
        }

        const nextState = {
          errors: {
            login: '',
            email: '',
            firstName: '',
            phone: '',
            secondName: '',
            password: '',
            secondPassword: '',
          },
          values: {...loginData},
        };

        if (!loginData.login) {
          nextState.errors.login = 'Login is required';
        } else if (loginData.login.length < 4) {
          nextState.errors.login = 'Login should contain more than 3 chars';
        }

        if (!loginData.password) {
          nextState.errors.password = 'Password is required';
        }

        this.setState(nextState);

        console.log('action/login', loginData);
      }
    }
  }
  render() {
    const { errors, values } = this.state;
    // language=hbs
    return `
        <section class="register">
            <form class="register__form">
                <h2 class="register__title">Регистрация аккаунта</h2>
                <fieldset class="register__fieldset">
                    {{{Input 
                            type="text" 
                            name="login" 
                            placeholder="Логин" 
                            label="Логин:" 
                            value="${values.login}"
                            error="${errors.login}"
                            ref="login"
                    }}}
                    {{{Input 
                            type="email" 
                            name="email" 
                            placeholder="Электронный адрес" 
                            label="Электронный адрес:"
                            value="${values.email}"
                            error="${errors.email}"
                            ref="email"
                    }}}
                    {{{Input 
                            type="text" 
                            name="first_name" 
                            placeholder="Имя" 
                            label="Имя:"
                            value="${values.firstName}"
                            error="${errors.firstName}"
                            ref="firstName"
                    }}}
                    {{{Input 
                            type="phone" 
                            name="phone" 
                            placeholder="Номер телефона" 
                            label="Номер телефона:"
                            value="${values.phone}"
                            error="${errors.phone}"
                            ref="phone"
                    }}}
                    {{{Input 
                            type="text" 
                            name="second_name" 
                            placeholder="Фамилия" 
                            label="Фамилия:"
                            value="${values.secondName}"
                            error="${errors.secondName}"
                            ref="secondName"
                    }}}
                    <fieldset class="register__container">
                        {{{Input
                                type="password"
                                name="password"
                                placeholder="Пароль"
                                label="Пароль:"
                                value="${values.password}"
                                error="${errors.password}"
                                ref="password"
                        }}}
                        {{{Input
                                type="password"
                                name="password__second"
                                placeholder="Повторите пароль"
                                label="Повторите пароль:"
                                value="${values.secondPassword}"
                                error="${errors.secondPassword}"
                                ref="secondPassword"
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
