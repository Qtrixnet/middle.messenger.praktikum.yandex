import Block from '../../core/Block';
import './register.css';

console.log(123)

export class Register extends Block {
  render() {
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
                            value="ivanivanov"
                    }}}
                    {{{Input 
                            type="email" 
                            name="email" 
                            placeholder="Электронный адрес" 
                            label="Электронный адрес:" 
                            value="example@gmail.com"
                    }}}
                    {{{Input 
                            type="text" 
                            name="first_name" 
                            placeholder="Имя" 
                            label="Имя:" 
                            value="Иван"
                    }}}
                    {{{Input 
                            type="phone" 
                            name="phone" 
                            placeholder="Номер телефона" 
                            label="Номер телефона:" 
                            value="+79099673030"
                    }}}
                    {{{Input 
                            type="text" 
                            name="second_name" 
                            placeholder="Фамилия" 
                            label="Фамилия:" 
                            value="Иванов"
                    }}}
                    <fieldset class="register__container">
                        <label class="register__label">
                            <span class="register__text">Пароль:</span>
                            <input class="register__input" type="password" placeholder="1234567" name="password"/>
                        </label>
                        <label class="register__label">
                            <span class="register__text">Повторите пароль:</span>
                            <input class="register__input" type="password" placeholder="1234567" name="password__second"/>
                        </label>
                    </fieldset>
                </fieldset>
                <div class="register__buttons">
                    <button class="register__submit-button">Зарегистрироваться</button>
                    <a href="#" class="register__link">Вернуться назад</a>
                </div>
            </form>
        </section>
    `;
  }
}
