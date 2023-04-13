export default function () {
  const contentId = document.querySelector('#content');

  const header = document.createElement('header');
  const background = document.createElement('div');
  const ul = document.createElement('ul');
  const liHome = document.createElement('li');
  const liMenu = document.createElement('li');
  const liContact = document.createElement('li');
  const content = document.createElement('div');
  const footer = document.createElement('footer');

  header.textContent = 'Restaurante do Bobinho';
  liHome.textContent = 'Início';
  liMenu.textContent = 'Cardápio';
  liContact.textContent = 'Contato';
  footer.textContent = 'vitmonjo - 2023';

  header.classList.add('header');
  background.classList.add('background');
  ul.classList.add('tabs');
  liHome.classList.add('active-li');
  liHome.classList.add('home');
  liMenu.classList.add('menu');
  liContact.classList.add('contact');
  content.classList.add('content');
  footer.classList.add('footer');
  /*
  liHome.addEventListener('click', () => {
    const collection = [...content.children];
    collection.forEach((item) => item.remove());
  });

  liMenu.addEventListener('click', () => {
    const collection = [...content.children];
    collection.forEach((item) => item.remove());
  });

  liContact.addEventListener('click', () => {
    const collection = [...content.children];
    collection.forEach((item) => item.remove());
  });
*/
  ul.append(liHome, liMenu, liContact);
  background.append(ul, content);
  contentId.append(header, background, footer);
}
