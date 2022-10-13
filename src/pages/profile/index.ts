import {registerComponent, renderDOM} from "../../core";
import Input from "../../components/input";
import Button from "../../components/button";
import ControlledInput from "../../components/controlled-input";
import InputError from "../../components/input-error";
import {Register} from "../register/register";
import Toolbar from "../../components/toolbar";

registerComponent(Input);
registerComponent(Button);
registerComponent(ControlledInput);
registerComponent(InputError);
registerComponent(Toolbar);

document.addEventListener("DOMContentLoaded", () => {
  renderDOM(new Register());
});
