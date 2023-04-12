import './style.css';
import Init from './page-structure.js';
import Home from './home.js';
import Menu from './menu.js';
import Contact from './contact.js';

Init();
Home();

(function () {
  const home = document.querySelector('.home');
  const menu = document.querySelector('.menu');
  const contact = document.querySelector('.contact');

  home.addEventListener('click', () => Home());
  menu.addEventListener('click', () => Menu());
  //contact.addEventListener('click', () => Contact());
})();
