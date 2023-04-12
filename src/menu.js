import Pastel from './images/pastel.jpeg';
import Cenoura from './images/cenoura.jpg';
import Iscas from './images/iscas.jpeg';
import Sorvete from './images/sorvete.jpg';
import Uva from './images/uva.jpeg';
import Bolo from './images/bolo.jpg';
import Caipirinha from './images/caipirinha.jpg';
import Suco from './images/suco.jpg';
import Vinho from './images/vinho.jpg';

export default function () {
  const content = document.querySelector('.content');
  const liHome = document.querySelector('.home');
  const liMenu = document.querySelector('.menu');
  const liContact = document.querySelector('.contact');
  liHome.classList.remove('active-li');
  liMenu.classList.add('active-li');
  liContact.classList.remove('active-li');

  const firstGroup = document.createElement('h2');
  firstGroup.textContent = 'Pratos Principais';

  const recipeCard1 = document.createElement('div');
  const name1 = document.createElement('h3');

  name1.textContent = 'Pastel';
  const imgPastel = new Image();
  imgPastel.src = Pastel;
  recipeCard1.append(imgPastel, name1);

  const recipeCard2 = document.createElement('div');
  const name2 = document.createElement('h3');

  name2.textContent = 'Cenoura Refogada';
  const imgCenoura = new Image();
  imgCenoura.src = Cenoura;
  recipeCard2.append(imgCenoura, name2);

  const recipeCard3 = document.createElement('div');
  const name3 = document.createElement('h3');

  name3.textContent = 'Iscas de Frango';
  const imgIscas = new Image();
  imgIscas.src = Iscas;
  recipeCard3.append(imgIscas, name3);

  const secondGroup = document.createElement('h2');
  secondGroup.textContent = 'Sobremesas';

  const recipeCard4 = document.createElement('div');
  const name4 = document.createElement('h3');

  name4.textContent = 'Sorvete de Baunilha';
  const imgSorvete = new Image();
  imgSorvete.src = Sorvete;
  recipeCard4.append(imgSorvete, name4);

  const recipeCard5 = document.createElement('div');
  const name5 = document.createElement('h3');

  name5.textContent = 'Uva Congelada';
  const imgUva = new Image();
  imgUva.src = Uva;
  recipeCard5.append(imgUva, name5);

  const recipeCard6 = document.createElement('div');
  const name6 = document.createElement('h3');

  name6.textContent = 'Bolo de Chocolate';
  const imgBolo = new Image();
  imgBolo.src = Bolo;
  recipeCard6.append(imgBolo, name6);

  const thirdGroup = document.createElement('h2');
  thirdGroup.textContent = 'Bebidas';

  const recipeCard7 = document.createElement('div');
  const name7 = document.createElement('h3');

  name7.textContent = 'Caipirinha';
  const imgCaipirinha = new Image();
  imgCaipirinha.src = Caipirinha;
  recipeCard7.append(imgCaipirinha, name7);

  const recipeCard8 = document.createElement('div');
  const name8 = document.createElement('h3');

  name8.textContent = 'Suco Vegano';
  const imgSuco = new Image();
  imgSuco.src = Suco;
  recipeCard8.append(imgSuco, name8);

  const recipeCard9 = document.createElement('div');
  const name9 = document.createElement('h3');

  name9.textContent = 'Vinho da Casa';
  const imgVinho = new Image();
  imgVinho.src = Vinho;
  recipeCard9.append(imgVinho, name9);

  content.append(firstGroup, recipeCard1, recipeCard2, recipeCard3);
  content.append(secondGroup, recipeCard4, recipeCard5, recipeCard6);
  content.append(thirdGroup, recipeCard7, recipeCard8, recipeCard9);
}
