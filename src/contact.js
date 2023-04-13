import Bob from './images/bob_chef.jpg';
import Mana from './images/mana.jpeg';
import Entregador from './images/entregador.jpg';
import Suporte from './images/suporte.jpg';

export default function () {
  const content = document.querySelector('.content');
  const liHome = document.querySelector('.home');
  const liMenu = document.querySelector('.menu');
  const liContact = document.querySelector('.contact');
  liHome.classList.remove('active-li');
  liMenu.classList.remove('active-li');
  liContact.classList.add('active-li');

  const collection = [...content.children];
  collection.forEach((item) => item.remove());

  const firstContact = document.createElement('div');
  const firstInfo = document.createElement('div');
  const firstName = document.createElement('h2');
  const firstPosition = document.createElement('div');
  const firstPhone = document.createElement('div');
  const imgBob = new Image();

  firstName.textContent = 'Bob Susin';
  firstPosition.textContent = 'Chef principal e proprietário';
  firstPhone.textContent = '(91) 3100-2173 / (69) 2161-8736';
  imgBob.src = Bob;

  const secondContact = document.createElement('div');
  const secondInfo = document.createElement('div');
  const secondName = document.createElement('h2');
  const secondPosition = document.createElement('div');
  const secondPhone = document.createElement('div');
  const imgMana = new Image();

  secondName.textContent = 'Mana Gonçalves';
  secondName.textContent = 'Gerente de Plantão';
  secondPhone.textContent = '(22) 3026-1382';
  imgMana.src = Mana;

  const thirdContact = document.createElement('div');
  const thirdInfo = document.createElement('div');
  const thirdName = document.createElement('h2');
  const thirdPosition = document.createElement('div');
  const thirdPhone = document.createElement('div');
  const imgEntregador = new Image();

  thirdName.textContent = 'Claudinho';
  imgEntregador.src = Entregador;

  const fourthContact = document.createElement('div');
  const fourthInfo = document.createElement('div');
  const fourthName = document.createElement('h2');
  const fourthPosition = document.createElement('div');
  const fourthPhone = document.createElement('div');
  const imgSuporte = new Image();

  fourthName.textContent = 'Marcos';
  imgSuporte.src = Suporte;
}
