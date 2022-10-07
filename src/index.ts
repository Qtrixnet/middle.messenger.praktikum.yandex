import { Block, renderDOM, registerComponent }  from './core';
import LoginPage from './components/login';
import RegisterPage from "./components/register";
import './styles/index.css';


document.addEventListener("DOMContentLoaded", () => {
  renderDOM(new RegisterPage({}));
});
