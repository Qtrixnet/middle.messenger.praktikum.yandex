import { Block, renderDOM, registerComponent }  from './core';
import Login from './components/login';
import Register from "./components/register";
import Profile from "./components/profile";
import Chats from "./components/chats";
import './styles/index.css';


document.addEventListener("DOMContentLoaded", () => {
  renderDOM(new Chats({}));
});
