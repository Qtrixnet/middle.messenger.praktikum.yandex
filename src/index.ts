import { renderDOM, registerComponent }  from './core';
import './styles/index.css';
import Input from './components/input';
import Button from "./components/button";
import ControlledInput from "./components/controlled-input";
import InputError from "./components/input-error";
import {Chats} from "./pages/chats/chats";
import Toolbar from "./components/toolbar";
import ChatCard from "./components/chat-card";

registerComponent(Input);
registerComponent(Button);
registerComponent(ControlledInput);
registerComponent(InputError);
registerComponent(Toolbar)
registerComponent(ChatCard)

document.addEventListener("DOMContentLoaded", () => {
  renderDOM(new Chats());
});
