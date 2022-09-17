export default `
  <section class="login">
    <form class="login__form">
      <h2 class="login__title">Вход</h2>
      <fieldset class="login__fieldset">
        {{#each data}}
            {{> input this}}
        {{/each}}
      </fieldset>
      <div class="login__buttons">
        <button class="login__submit-button">Войти</button>
        <a href="" class="login__link">Зарегистрироваться</a>
      </div>
    </form>
  </section>
`
