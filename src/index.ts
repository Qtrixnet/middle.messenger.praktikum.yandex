import { renderDOM, registerComponent }  from './core';
import Toolbar from './components/toolbar';
import Input from './components/input';
import ChatCard from "./components/chat-card";
import './styles/index.css';
import Button from "./components/button";
import ControlledInput from "./components/controlled-input";
import InputError from "./components/input-error";
import {Message} from "./components/message/message";
import Login from "./pages/login";

registerComponent(Input);
registerComponent(Toolbar);
registerComponent(ChatCard);
registerComponent(Button);
registerComponent(ControlledInput);
registerComponent(InputError);
registerComponent(Message);

document.addEventListener("DOMContentLoaded", () => {
  renderDOM(new Login());
});
