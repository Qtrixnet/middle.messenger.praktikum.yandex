import './styles/index.pcss';
import {registerComponent} from "./core";
import Router from "./core/Router";
import {Routes} from "./types/types";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Register from "./pages/register";
import Chats from "./pages/chats";
import Input from "./components/input";
import Button from "./components/button";
import ControlledInput from "./components/controlled-input";
import InputError from "./components/input-error";
import Toolbar from "./components/toolbar";
import Link from "./components/link";
import ChangePassword from "./components/change-password";
import AvatarPopup from "./components/popups/avatar-popup";
import CloseButton from "./components/close-button";
import AvatarInput from "./components/avatar-input";
import MessageIcon from "./components/message-icon";
import ProfileIcon from "./components/profile-icon";
import EmptyChats from "./components/empty-chats";
import CreateChatPopup from "./components/popups/create-chat-popup";
import ChatCard from "./components/chat-card";
import Chat from "./components/chat";
import OptionsButton from "./components/options-button";
import Options from "./components/options";
import Option from "./components/option";
import AddUserPopup from "./components/popups/add-user-popup";
import DeleteUserPopup from "./components/popups/delete-user-popup";
import ChatFooter from "./components/chat-footer";
import FooterForm from "./components/footer-form";

const components = [Input, Button, Link, ControlledInput, InputError, Toolbar, ChangePassword, CloseButton, AvatarInput, MessageIcon, ProfileIcon, EmptyChats, AvatarPopup, CreateChatPopup, ChatCard, Chat, OptionsButton, Options, Option, AddUserPopup, DeleteUserPopup, ChatFooter, FooterForm];

// @ts-ignore
components.forEach(component => registerComponent(component))

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
  } catch (e) {
    Router.start();

    if (isProtectedRoute) {
      Router.go(Routes.Index);
    }
  }
});
