// // Homepage
// function render() {
//     const homeContainer = document.createElement('div').classList.add('homepage-container');

//     // Header
//     const header = document.createElement('div').classList.add('header-container');
//     const title = document.createElement('h1').innerText('Los Pollos Hermanos');
    
//     homeContainer.appendChild(header);
//     header.appendChild(title);

//     $content.appendChild(homeContainer);
// }

// export {render as renderHome};

import { $content, createHtmlElement } from "./index";

function render() {
    const $main = document.createElement("main");

    const $bienvenidos = createHtmlElement(
        "p",
        null,
        ["cursive", "golden"],
        "Bienvenidos"
    );
    $main.appendChild($bienvenidos);

    $content.appendChild($main);
}

export { render as renderHome };