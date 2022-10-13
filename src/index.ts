import { renderDOM, registerComponent }  from './core';
import Toolbar from './components/toolbar';
import Input from './components/input';
import ChatCard from "./components/chat-card";
import './styles/index.css';
import Button from "./components/button";
import ControlledInput from "./components/controlled-input";
import InputError from "./components/input-error";
import Profile from "./pages/profile";


registerComponent(Input);
registerComponent(Toolbar);
registerComponent(ChatCard);
registerComponent(Button);
registerComponent(ControlledInput);
registerComponent(InputError);

document.addEventListener("DOMContentLoaded", () => {
  renderDOM(new Profile());
});
