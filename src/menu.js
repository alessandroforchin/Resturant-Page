import { content } from './index';

function menuRender() {
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

    // Recipes
    const recipes = document.createElement('div');
    recipes.classList.add('recipes-container');
    container.appendChild(recipes);

    function Recipe(img, name, ingredients) {
        this.img = img
        this.name = name
        this.ingredients = ingredients
        this.display = () => {
            const recipeBox = document.createElement('div');
            recipeBox.classList.add('recipe-box');
            recipes.appendChild(recipeBox);

            const recipeImg = document.createElement('img');
            recipeImg.setAttribute('src', `${img}`);
            recipeBox.appendChild(recipeImg);
            const recipeName = document.createElement('h3');
            recipeName.innerText = `${name}`;
            recipeBox.appendChild(recipeName);
            const recipeIngredients = document.createElement('p');
            recipeIngredients.innerText = `${ingredients}`;
            recipeBox.appendChild(recipeIngredients);
        }
    }

    const recipe_1 = new Recipe('https://pngimg.com/uploads/spaghetti/spaghetti_PNG80.png', 'Spaghetti Aglio e Olio', 'Spaghetti, olive oil, garlic, black pepper, finely grated Parmigiano-Reggiano cheese.');
    recipe_1.display();
    const recipe_2 = new Recipe('https://www.freepnglogos.com/uploads/pasta-png/pasta-spaghetti-with-pesto-verde-recipe-oetker-9.png', 'Pasta al pesto', 'Pasta, olive oil, onion, pesto, salt, grated Parmesan cheese.');
    recipe_2.display();
    const recipe_3 = new Recipe('https://png-library.net/images/12-125933_spaghetti-png-spaghetti-fruits-de-mer-png.png', 'Shrimp Scampi with Pasta', 'Pasta, butter, extra-virgin olive oil, shrimp, garlic, white wine, lemon juice.');
    recipe_3.display();
    const recipe_4 = new Recipe('http://www.pngmart.com/files/5/Lasagna-Transparent-Background.png', 'Lasagna', 'Meat, onion, garlic, tomato, sugar, spices, cheese, egg.');
    recipe_4.display();

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

export { menuRender };