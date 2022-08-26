// 1- Selecting HTML elements

// Selecting 'Add User'
const addUserText = document.querySelector('#add-user');
console.log(addUserText);

// Changing 'Add User' text
addUserText.textContent = 'Adding new User'

// 2- Selecting Multiple HTML elements

// Selecting all <li> elements
const allItems = document.querySelectorAll('.item');
console.log(allItems);