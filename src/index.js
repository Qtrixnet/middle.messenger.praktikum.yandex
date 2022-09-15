import hbs from 'handlebars';
import login from './markup/pages/login/login.tmp';
import register from './markup/pages/register/register.tmp';
import error from './markup/pages/error/error.tmp';
import chats from './markup/pages/chats/chats.tmp';
import data from './mocks';
import './markup/partials/chat-card/chat-card.tmp';
import './markup/partials/toolbar/toolbar.tmp';

const template = hbs.compile(chats);
const html = template(data);

const rootNode = document.getElementById('root');
rootNode.innerHTML = html;
