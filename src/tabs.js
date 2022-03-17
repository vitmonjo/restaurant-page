
const tabs = document.createElement('ul');
tabs.classList.add('tabs');

const liHome = document.createElement('li');
liHome.textContent = 'Home'
liHome.setAttribute('data-target', '#home');

const liMenu = document.createElement('li');
liMenu.textContent = 'Menu'
liMenu.setAttribute('data-target', '#menu');

const liContact = document.createElement('li');
liContact.textContent = 'Contact'
liContact.setAttribute('data-target', '#contact');


tabs.append(liHome, liMenu, liContact);

export default {tabs, liHome, liMenu, liContact}