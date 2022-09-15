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

const template = hbs.compile(profile);
const html = template(data.profile);

const rootNode = document.getElementById('root');
rootNode.innerHTML = html;
