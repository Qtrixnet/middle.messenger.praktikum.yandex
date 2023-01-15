import './styles/index.pcss';
import Login from "./pages/login";
import Router from "./core/Router";
import {Profile} from "./pages/profile/profile";
import {Register} from "./pages/register/register";
import {Chats} from "./pages/chats/chats";
import {registerComponent} from "./core";
import Input from "./components/input";
import Button from "./components/button";
import ControlledInput from "./components/controlled-input";
import InputError from "./components/input-error";
import Toolbar from "./components/toolbar";
import Link from "./components/link";
import {Routes} from "./types/types";
import ChangePassword from "./components/change-password";

registerComponent(Input);
registerComponent(Button);
registerComponent(Link);
registerComponent(ControlledInput);
registerComponent(InputError);
registerComponent(Toolbar);
registerComponent(ChangePassword);

document.addEventListener("DOMContentLoaded", () => {
  Router
    .use(Routes.Index, Login)
    .use(Routes.Register, Register)
    .use(Routes.Profile, Profile)
    .use(Routes.Chats, Chats)

  let isProtectedRoute = true;

  switch (window.location.pathname) {
    case Routes.Index:
    case Routes.Register:
      isProtectedRoute = false;
      break
  }

  try {
    Router.start();
  } catch(e) {
    Router.start();

    if(isProtectedRoute) {
      Router.go(Routes.Index);
    }
  }
});
