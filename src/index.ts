import { renderDOM, registerComponent }  from './core';
import Toolbar from './components/toolbar';
import Input from './components/input';
import ChatCard from "./components/chat-card";
import './styles/index.css';
import Button from "./components/button";
import Login from "./pages/login";

registerComponent(Input);
registerComponent(Toolbar);
registerComponent(ChatCard);
registerComponent(Button);

document.addEventListener("DOMContentLoaded", () => {
  renderDOM(new Login());
});
