import { Block, renderDOM, registerComponent }  from './core';
import Login from './pages/login';
import Register from './pages/register';
import Profile from './pages/profile';
import Toolbar from './components/toolbar';
import Chats from './pages/chats';
import Input from './components/input';
import ChatCard from "./components/chat-card";
import './styles/index.css';

registerComponent(Input);
registerComponent(Toolbar);
registerComponent(ChatCard);

document.addEventListener("DOMContentLoaded", () => {
  renderDOM(new Chats());
});
