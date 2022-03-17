
// Home
const homePanel = document.createElement('div');
homePanel.classList.add('panel');

const homeTitle = document.createElement('p');
homeTitle.textContent = 'Content for Home tab...';

const homeContent = document.createElement('p');
homeContent.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id nunc porta urna ornare rhoncus. Ut convallis ante at.';


homePanel.append(homeTitle, homeContent);


// Menu
const menuPanel = document.createElement('div');
menuPanel.classList.add('panel');

const menuTitle = document.createElement('p');
menuTitle.textContent = 'Content for Menu tab...';

const menuContent = document.createElement('p');
menuContent.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id nunc porta urna ornare rhoncus. Ut convallis ante at.';

menuPanel.append(menuTitle, menuContent);


// Contact
const contactPanel = document.createElement('div');
contactPanel.classList.add('panel');

const contactTitle = document.createElement('p');
contactTitle.textContent = 'Content for Contact tab...';

const contactContent = document.createElement('p');
contactContent.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id nunc porta urna ornare rhoncus. Ut convallis ante at.';

contactPanel.append(contactTitle, contactContent);

export default { homePanel, menuPanel, contactPanel };

