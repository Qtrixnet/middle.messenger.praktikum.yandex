import {Register} from './register';
import {registerComponent, renderDOM} from "../../core";
import Input from "../../components/input";
import Button from "../../components/button";
import ControlledInput from "../../components/controlled-input";
import InputError from "../../components/input-error";

registerComponent(Input);
registerComponent(Button);
registerComponent(ControlledInput);
registerComponent(InputError);

document.addEventListener("DOMContentLoaded", () => {
  renderDOM(new Register());
});
