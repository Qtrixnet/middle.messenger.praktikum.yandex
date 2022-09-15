import hbs from 'handlebars';
import login from './markup/pages/login/login.tmp';
import register from './markup/pages/register/register.tmp';
import data from './mocks';

const template = hbs.compile(register);
const html = template(data);

const rootNode = document.getElementById('root');
rootNode.innerHTML = html;
