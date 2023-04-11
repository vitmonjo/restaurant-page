import './style.css';
import Init from './page-structure.js';
import Home from './home.js';

Init();
Home();

const home = document.querySelector('.home');
home.addEventListener('click', () => Home());
