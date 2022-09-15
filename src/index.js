import hbs from 'handlebars';
import login from './markup/pages/login/login.tmp';
import data from './mocks';

const template = hbs.compile(login);
const html = template(data);

const rootNode = document.getElementById('root');
rootNode.innerHTML = html;
