import {registerComponent, renderDOM} from "../../core";
import Button from "../../components/button";
import {Error} from "./error";

registerComponent(Button);

document.addEventListener("DOMContentLoaded", () => {
  renderDOM(new Error());
});
