export default `
  <section class="register">
    <form class="register__form">
      <h2 class="register__title">Регистрация аккаунта</h2>
      <fieldset class="register__fieldset">
        <label class="register__label">
          <span class="register__text">Логин:</span>
          <input class="register__input" type="text" placeholder="ivanivanov"/>
        </label>
        <label class="register__label">
          <span class="register__text">Электронный адрес:</span>
          <input class="register__input" type="text" placeholder="example@gmail.com"/>
        </label>
        <label class="register__label">
          <span class="register__text">Имя:</span>
          <input class="register__input" type="text" placeholder="Иван"/>
        </label>
        <label class="register__label">
          <span class="register__text">Номер телефона:</span>
          <input class="register__input" type="text" placeholder="+7 (909) 967 30 30"/>
        </label>
        <label class="register__label">
          <span class="register__text">Фамилия:</span>
          <input class="register__input" type="text" placeholder="Иванов"/>
        </label>
        <fieldset class="register__container">
          <label class="register__label">
            <span class="register__text">Пароль:</span>
            <input class="register__input" type="password" placeholder="1234567"/>
          </label>
          <label class="register__label">
            <span class="register__text">Повторите пароль:</span>
            <input class="register__input" type="password" placeholder="1234567"/>
          </label>
        </fieldset>
      </fieldset>
      <div class="register__buttons">
        <button class="register__submit-button">Зарегистрироваться</button>
        <a href="#" class="register__link">Вернуться назад</a>
      </div>
    </form>
  </section>
`
