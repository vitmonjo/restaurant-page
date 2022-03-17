
import header from './header.js';
import main from './main.js';
import footer from './footer.js';
const { tabs, liHome, liMenu, liContact } = require('./tabs.js').default;
const { homePanel, menuPanel, contactPanel } = require('./tabs-content.js').default;

main.append(tabs);

liHome.addEventListener('click', () => {
    if (main.childNodes[1]) {
        main.removeChild(main.childNodes[1]);
    }
    main.append(homePanel);
})

liMenu.addEventListener('click', () => {
    if (main.childNodes[1]) {
        main.removeChild(main.childNodes[1]);
    }
    main.append(menuPanel);
})

liContact.addEventListener('click', () => {
    if (main.childNodes[1]) {
        main.removeChild(main.childNodes[1]);
    }
    main.append(contactPanel);
})

const content = document.querySelector('#content');
content.append(header, main, footer);
