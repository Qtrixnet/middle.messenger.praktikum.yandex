import './styles/index.css';
import Login from "./pages/login";
import Router from "./core/Router";
import {Profile} from "./pages/profile/profile";
import {Register} from "./pages/register/register";
import {Chats} from "./pages/chats/chats";

enum Routes {
  Index = '/',
  Register = '/sign-up',
  Profile = '/settings',
  Chats = '/messenger',
}

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
