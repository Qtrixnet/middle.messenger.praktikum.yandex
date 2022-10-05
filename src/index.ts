import { Block, renderDOM, registerComponent }  from './core';
import LoginPage from './components/login';

document.addEventListener("DOMContentLoaded", () => {
  renderDOM(new LoginPage({}));
});
