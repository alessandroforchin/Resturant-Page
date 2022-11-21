import { homeRender } from "./homepage";
import { menuRender } from "./menu";
import { contactRender } from "./contact";

const content = document.getElementById('content');

homeRender();

document.addEventListener('click', (e) => {
    const target = e.target.innerText;

    if (target === 'Home') homeRender();
    if (target === 'Menu') menuRender();
    if (target === 'Contact') contactRender();
})

export { content }