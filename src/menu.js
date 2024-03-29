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

  const collection = [...content.children];
  collection.forEach((item) => item.remove());

  const firstGroup = document.createElement('h2');
  firstGroup.textContent = 'Pratos Principais';

  const recipeCard1 = document.createElement('div');
  const recipeInfo1 = document.createElement('div');
  const name1 = document.createElement('h3');
  const desc1 = document.createElement('div');

  name1.textContent = 'Pastel';
  desc1.textContent =
    'Bob descobriu essa iguaria quando sua vovó esqueceu um pastel em cima da mesa, neste momento foi amor a primeira mordida.';
  const imgPastel = new Image();
  imgPastel.src = Pastel;
  recipeCard1.classList.add('recipe-card');
  recipeInfo1.classList.add('recipe-info');
  recipeInfo1.append(name1, desc1);
  recipeCard1.append(imgPastel, recipeInfo1);

  const recipeCard2 = document.createElement('div');
  const recipeInfo2 = document.createElement('div');
  const name2 = document.createElement('h3');
  const desc2 = document.createElement('div');

  name2.textContent = 'Cenoura Refogada';
  desc2.textContent =
    'Desde pequeno Bob possui uma ligação muito forte com cenoura picada em rodelas, ultimamente tem preferido ela ralada em suas refeições pessoais mas faz de acordo com o gosto de cada cliente.';
  const imgCenoura = new Image();
  imgCenoura.src = Cenoura;
  recipeCard2.classList.add('recipe-card');
  recipeInfo2.classList.add('recipe-info');
  recipeInfo2.append(name2, desc2);
  recipeCard2.append(imgCenoura, recipeInfo2);

  const recipeCard3 = document.createElement('div');
  const recipeInfo3 = document.createElement('div');
  const name3 = document.createElement('h3');
  const desc3 = document.createElement('div');

  name3.textContent = 'Iscas de Frango';
  desc3.textContent =
    'Bob aprendeu essa receita com sua vovó, ela nunca separa um pedaço pra ele mas seu vovô sempre dá um jeitinho';
  const imgIscas = new Image();
  imgIscas.src = Iscas;
  recipeInfo3.classList.add('recipe-info');
  recipeCard3.classList.add('recipe-card');
  recipeInfo3.append(name3, desc3);
  recipeCard3.append(imgIscas, recipeInfo3);

  const secondGroup = document.createElement('h2');
  secondGroup.textContent = 'Sobremesas';

  const recipeCard4 = document.createElement('div');
  const recipeInfo4 = document.createElement('div');
  const name4 = document.createElement('h3');
  const desc4 = document.createElement('div');

  name4.textContent = 'Sorvete de Baunilha';
  desc4.textContent =
    'Bob aprendeu sua receita de Sorvete em uma viagem realizada a China, onde a sobremesa foi inventada.';
  const imgSorvete = new Image();
  imgSorvete.src = Sorvete;
  recipeInfo4.classList.add('recipe-info');
  recipeCard4.classList.add('recipe-card');
  recipeInfo4.append(name4, desc4);
  recipeCard4.append(imgSorvete, recipeInfo4);

  const recipeCard5 = document.createElement('div');
  const recipeInfo5 = document.createElement('div');
  const name5 = document.createElement('h3');
  const desc5 = document.createElement('div');

  name5.textContent = 'Uva Congelada';
  desc5.textContent =
    'Bob desenvolveu um apreço pela fruta graças à sua irmã de criação, a Mana. Ela sempre deixa uvas cairem "acidentalmente" para que ele possa comer.';
  const imgUva = new Image();
  imgUva.src = Uva;
  recipeInfo5.classList.add('recipe-info');
  recipeCard5.classList.add('recipe-card');
  recipeInfo5.append(name5, desc5);
  recipeCard5.append(imgUva, recipeInfo5);

  const recipeCard6 = document.createElement('div');
  const recipeInfo6 = document.createElement('div');
  const name6 = document.createElement('h3');
  const desc6 = document.createElement('div');

  name6.textContent = 'Bolo de Chocolate';
  desc6.textContent =
    'Bob decidiu aprender a fazer um bolo de chocolate após comer um bolo feito por sua vovó que estava duro como pedra, há males que vem para o bem.';
  const imgBolo = new Image();
  imgBolo.src = Bolo;
  recipeInfo6.classList.add('recipe-info');
  recipeCard6.classList.add('recipe-card');
  recipeInfo6.append(name6, desc6);
  recipeCard6.append(imgBolo, recipeInfo6);

  const thirdGroup = document.createElement('h2');
  thirdGroup.textContent = 'Bebidas';

  const recipeCard7 = document.createElement('div');
  const recipeInfo7 = document.createElement('div');
  const name7 = document.createElement('h3');
  const desc7 = document.createElement('div');

  name7.textContent = 'Caipirinha';
  desc7.textContent =
    'Esse drink foi um presente dado por seu vovô, que é apaixonado pela bebida. Bob costuma fazê-la nos finais de semana.';
  const imgCaipirinha = new Image();
  imgCaipirinha.src = Caipirinha;
  recipeInfo7.classList.add('recipe-info');
  recipeCard7.classList.add('recipe-card');
  recipeInfo7.append(name7, desc7);
  recipeCard7.append(imgCaipirinha, recipeInfo7);

  const recipeCard8 = document.createElement('div');
  const recipeInfo8 = document.createElement('div');
  const name8 = document.createElement('h3');
  const desc8 = document.createElement('div');

  name8.textContent = 'Suco Vegano';
  desc8.textContent =
    'Inspirado por Narcisa Tamborindeguy, Bob desenvolveu um suco vegano com vegetais e frutas de capacidade antioxidante.';
  const imgSuco = new Image();
  imgSuco.src = Suco;
  recipeInfo8.classList.add('recipe-info');
  recipeCard8.classList.add('recipe-card');
  recipeInfo8.append(name8, desc8);
  recipeCard8.append(imgSuco, recipeInfo8);

  const recipeCard9 = document.createElement('div');
  const recipeInfo9 = document.createElement('div');
  const name9 = document.createElement('h3');
  const desc9 = document.createElement('div');

  name9.textContent = 'Vinho da Casa';
  desc9.textContent =
    'Para agradar sua titia, Bob também planta uvas e fabrica o próprio vinho, apenas ele pode esmagar as uvas com as patas.';
  const imgVinho = new Image();
  imgVinho.src = Vinho;
  recipeInfo9.classList.add('recipe-info');
  recipeCard9.classList.add('recipe-card');
  recipeInfo9.append(name9, desc9);
  recipeCard9.append(imgVinho, recipeInfo9);

  content.append(firstGroup, recipeCard1, recipeCard2, recipeCard3);
  content.append(secondGroup, recipeCard4, recipeCard5, recipeCard6);
  content.append(thirdGroup, recipeCard7, recipeCard8, recipeCard9);
}
