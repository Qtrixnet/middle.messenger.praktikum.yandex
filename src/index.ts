import './styles/index.pcss';
import {registerComponent} from "./core";
import Router from "./core/Router";
import Login from "./pages/login";
import {Profile} from "./pages/profile/profile";
import {Register} from "./pages/register/register";
import {Chats} from "./pages/chats/chats";
import Input from "./components/input";
import Button from "./components/button";
import ControlledInput from "./components/controlled-input";
import InputError from "./components/input-error";
import Toolbar from "./components/toolbar";
import Link from "./components/link";
import {Routes} from "./types/types";
import ChangePassword from "./components/change-password";
import AvatarPopup from "./components/avatar-popup";
import CloseButton from "./components/close-button";
import AvatarInput from "./components/avatar-input";
import MessageIcon from "./components/message-icon";
import ProfileIcon from "./components/profile-icon";
import EmptyChats from "./components/empty-chats";

registerComponent(Input);
registerComponent(Button);
registerComponent(Link);
registerComponent(ControlledInput);
registerComponent(InputError);
registerComponent(Toolbar);
registerComponent(ChangePassword);
registerComponent(AvatarPopup);
registerComponent(CloseButton);
registerComponent(AvatarInput);
registerComponent(MessageIcon);
registerComponent(ProfileIcon);
registerComponent(EmptyChats);

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
