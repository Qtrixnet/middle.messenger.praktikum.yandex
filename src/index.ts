import { Block, renderDOM, registerComponent }  from './core';
import Login from './components/login';
import Register from './components/register';
import Profile from './components/profile';
import Toolbar from './components/toolbar';
import Chats from './components/chats';
import Input from './components/input';
import './styles/index.css';

registerComponent(Input);
registerComponent(Toolbar)

document.addEventListener("DOMContentLoaded", () => {
  renderDOM(new Login({}));
});
