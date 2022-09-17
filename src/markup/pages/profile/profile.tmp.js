export default `
    <section class="profile">
        {{> toolbar}}
        <div class="profile__content">
            <header class="profile__header">
                <img class="profile__avatar" src={{avatar}} alt={{name}}>
                <div class="profile__data">
                    <h1 class="profile__title">{{name}}</h1>
                    <button class="profile__button profile__button_avatar">
                        <span class="profile__button-icon profile__button-icon_avatar"></span>
                        Поменять аватар
                    </button>
                </div>
            </header>
            <form class="profile__form">
                <fieldset class="profile__fieldset">
                    {{#each data}}
                        {{> input this}}
                    {{/each}}
                </fieldset>
                <div class="profile__buttons">
                    <button class="profile__button">
                        <span
                        class="profile__button-icon profile__button-icon_data"></span>
                        Изменить данные
                    </button>
                    <button class="profile__button">
                        <span class="profile__button-icon profile__button-icon_password"></span>
                        Изменить пароль
                    </button>
                </div>
                <button class="profile__button profile__button_quit">
                    <span
                    class="profile__button-icon profile__button-icon_quit"></span>
                    Выйти
                </button>
            </form>
        </div>
    </section>
`
