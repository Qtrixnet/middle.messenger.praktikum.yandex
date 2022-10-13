import { renderDOM, registerComponent }  from './core';
import './styles/index.css';
import Input from './components/input';
import Button from "./components/button";
import ControlledInput from "./components/controlled-input";
import InputError from "./components/input-error";
import Login from "./pages/login";

registerComponent(Input);
registerComponent(Button);
registerComponent(ControlledInput);
registerComponent(InputError);

document.addEventListener("DOMContentLoaded", () => {
  renderDOM(new Login());
});
