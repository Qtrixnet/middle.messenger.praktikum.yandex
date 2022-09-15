import hbs from 'handlebars';
import login from './markup/pages/login/login.tmp';
import register from './markup/pages/register/register.tmp';
import error from './markup/pages/error/error.tmp';
import data from './mocks';

const template = hbs.compile(error);
const html = template(data.errors.serverError);

const rootNode = document.getElementById('root');
rootNode.innerHTML = html;
