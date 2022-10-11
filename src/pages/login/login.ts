import Block from '../../core/Block';
import './login.css';

export class Login extends Block {
  protected getStateFromProps() {
    this.state = {
      values: {
        login: '',
        password: '',
      },
      errors: {
        login: '',
        password: '',
      },
      onLogin: () => {
        const loginData = {
          login: (this.refs.login.lastElementChild as HTMLInputElement).value,
          password: (this.refs.password.lastElementChild as HTMLInputElement).value
        };

        const nextState = {
          errors: {
            login: '',
            password: '',
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
        <section class="login">
            <form class="login__form">
                <h2 class="login__title">Вход</h2>
                <fieldset class="login__fieldset">
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
                            type="password"
                            name="password"
                            placeholder="Пароль"
                            label="Пароль:"
                            value="${values.password}"
                            error="${errors.password}"
                            ref="password"
                    }}}
                </fieldset>
                <div class="login__buttons">
                    {{{Button text="Войти" onClick=onLogin}}}
                    <a href="../register/register.html" class="login__link">Зарегистрироваться</a>
                </div>
            </form>
        </section>

    `;
  }
}
