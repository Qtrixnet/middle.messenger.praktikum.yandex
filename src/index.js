import hbs from 'handlebars';
import login from './markup/pages/login/login.tmp';
import register from './markup/pages/register/register.tmp';
import error from './markup/pages/error/error.tmp';
import chats from './markup/pages/chats/chats.tmp';
import profile from './markup/pages/profile/profile.tmp';
import data from './mocks';
import './markup/partials/chat-card/chat-card.tmp';
import './markup/partials/toolbar/toolbar.tmp';
import './markup/partials/input/input.tmp';

const pages = [
  {
    id: 'login',
    templateString: login,
    data: data.login
  },
  {
    id: 'register',
    templateString: register,
    data: data.register
  },
  {
    id: 'chats',
    templateString: chats,
    data: data
  },
  {
    id: 'profile',
    templateString: profile,
    data: data.profile
  },
  {
    id: 'not-found-error',
    templateString: error,
    data: data.errors.notFoundError
  },
  {
    id: 'server-error',
    templateString: error,
    data: data.errors.serverError
  }
]

const innerTemplate = (id, templateString, data = {}) => {
  const template = hbs.compile(templateString);
  const html = template(data);
  const rootNode = document.getElementById(id);
  rootNode.innerHTML = html;
}

pages.forEach(page => innerTemplate(page.id, page.templateString, page.data))
