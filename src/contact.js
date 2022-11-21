import { content } from './index';

function contactRender() {
    const container = document.createElement('div');
    container.classList.add('menu-container');

    // Navigation bar
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

    // Contact & Location
    const contact = document.createElement('div');
    contact.classList.add('contact-container');
    container.appendChild(contact);

        //contact
        const contactDetails = document.createElement('div');
        contactDetails.classList.add('details-container');
        contact.appendChild(contactDetails); 

        const contactTitle = document.createElement('h3');
        contactTitle.innerText = 'Contact: '
        contactDetails.appendChild(contactTitle);
        const contactList = document.createElement('ul');
        contactDetails.appendChild(contactList);
        const telephone = document.createElement('li');
        telephone.innerText = 'Phone number: +39 3450967954'
        const email = document.createElement('li');
        email.innerText = 'Email: odin.project@gmail.com'
        contactList.appendChild(telephone);
        contactList.appendChild(email);


        //location
        const location = document.createElement('div');
        location.classList.add('location-container');
        contact.appendChild(location);

        const locationTitle = document.createElement('h3');
        locationTitle.innerText = 'Location: ';
        location.appendChild(locationTitle);
        const address = document.createElement('p');
        address.innerText = '45 Alexander Road, London, E95 4VZ';
        location.appendChild(address);

    // Footer
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

export { contactRender };