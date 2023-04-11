import Bob from './bob_chef.jpg';

export default function () {
  const content = document.querySelector('.content');

  const intro = document.createElement('h2');
  const introText = document.createElement('div');
  const history = document.createElement('h2');
  const historyText = document.createElement('div');
  const structure = document.createElement('h2');
  const structureText = document.createElement('div');

  const bobinho = new Image();

  intro.textContent = 'Proposta';
  introText.textContent =
    'O Restaurante do Bobinho © foi criado através do sonho de Bob Susin com o propósito de unificar uma série de receitas deliciosas em apenas um estabelecimento. Bob viu uma oportunidade de mercado no norte de Florianópolis e a agarrou sem pensar duas vezes.';
  history.textContent = 'História';
  historyText.textContent =
    'Bob Susin, ou Bobinho (apelido dado por seu avô) começou pequeno, suas primeiras vendas foram realizadas no boca a boca, realizava entregas de porta em porta, no entanto sua vida mudou após ter começado a vender pratos típicos da ilha na praia, para turistas do mundo inteiro. Com um novo rendimento estabelecido, Bob decide então investir no seu próprio restaurante, buscando centralizar a clientela que já o conhecia e tinha apreço pelo seu produto.';
  structure.textContent = 'Espaço';
  structureText.textContent =
    'O Restaurante conta com 200m² e 20 mesas com capacidade para até 4 pessoas. Está localizado na área nobre do bairro Ingleses e mantém um padrão alto de qualidade em todas as suas etapas.';
  bobinho.src = Bob;
  bobinho.classList.add('bob-chef');

  content.append(
    intro,
    introText,
    history,
    historyText,
    structure,
    structureText,
    bobinho
  );
}
