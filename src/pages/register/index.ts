import {Register} from './register';
import {renderDOM} from "../../core";
console.log('index.ts');
document.addEventListener("DOMContentLoaded", () => {
  console.log('index.ts');
  renderDOM(new Register());
});
