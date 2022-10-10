import Block from '../../core/Block';
import './profile.css';

export class Profile extends Block {
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
                        {{{Input 
                                type="text" 
                                name="login" 
                                placeholder="Логин" 
                                label="Логин:" 
                                value="ivanivanov" 
                                color="light"
                        }}}
                        {{{Input 
                                type="text" 
                                name="first_name" 
                                placeholder="Имя" 
                                label="Имя:" 
                                value="Иван" 
                                color="light"
                        }}}
                        {{{Input 
                                type="email" 
                                name="email" 
                                placeholder="Электронный адрес" 
                                label="Электронный адрес::" 
                                value="example@gmail.com" 
                                color="light"
                        }}}
                        {{{Input 
                                type="text" 
                                name="second_name" 
                                placeholder="Фамилия" 
                                label="Фамилия:" 
                                value="Иванов" 
                                color="light"
                        }}}
                        {{{Input 
                                type="phone" 
                                name="phone" 
                                placeholder="Телефон" 
                                label="Телефон:" 
                                value="+7123456789" 
                                color="light"
                        }}}
                        {{{Input 
                                type="text" 
                                name="display_name" 
                                placeholder="Имя в чате" 
                                label="Имя в чате:" 
                                value="Иваныч" 
                                color="light"
                        }}}
                    </fieldset>
                    <div class="profile__buttons">
                        <a href="../error/not-found-error.hbs" class="profile__button">
                            <span class="profile__button-icon profile__button-icon_data"></span>
                            Изменить данные
                        </a>
                        <a href="../error/server-error.hbs" class="profile__button">
                            <span class="profile__button-icon profile__button-icon_password"></span>
                            Изменить пароль
                        </a>
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
