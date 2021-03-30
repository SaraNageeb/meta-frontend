// Select the image with class of bulbasaur and store it in a variable.
let bulbasaurImg = document.querySelector('.bulbasaur'); 

// Get the value of the src attribute of an <img> element:
console.log(bulbasaurImg.getAttribute('src'));

// Change the URL of the image:
bulbasaurImg.setAttribute('src', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png');


// Select the image with class of charmander and store it in a variable.
let charmanderImg = document.querySelector('.charmander'); 

// Get the value of the src attribute of an <img> element:
console.log(charmanderImg.getAttribute('src'));

// Change the URL of the image:
charmanderImg.setAttribute('src', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png');

// Select the image with class of squirtle and store it in a variable and change the URL of the image:
let squirtleImg = document.querySelector(".squirtle").src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png';

