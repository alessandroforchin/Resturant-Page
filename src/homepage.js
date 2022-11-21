import { content } from './index';

function homeRender() {
    const container = document.createElement('div');
    container.classList.add('home-container');

    const navBar = document.createElement('div');
    navBar.classList.add('navigation-container');

    const homeLink = document.createElement('a');
    homeLink.setAttribute('href', '#');
    homeLink.innerText = 'Home';
    const menuLink = document.createElement('a');
    menuLink.setAttribute('href', '#');
    menuLink.innerText = 'Menu';
    const contactLink = document.createElement('a');
    contactLink.setAttribute('href', '#');
    contactLink.innerText = 'Contact';

    navBar.appendChild(homeLink);
    navBar.appendChild(menuLink);
    navBar.appendChild(contactLink);
    container.appendChild(navBar);

    const header = document.createElement('h1');
    header.innerText = 'Beyond Pasta';
    container.appendChild(header);
    header.classList.add('title');

    const footer = document.createElement('div');
    footer.classList.add('footer-container');
    const copyright = document.createElement('p');
    copyright.innerText = 'Copyright 2022';
    const author = document.createElement('a');
    author.setAttribute('href', 'https://github.com/alessandroforchin');
    author.innerText = 'alessandroforchin';

    footer.appendChild(copyright);
    footer.appendChild(author);
    container.appendChild(footer);

    content.appendChild(container);
}

export {homeRender};
