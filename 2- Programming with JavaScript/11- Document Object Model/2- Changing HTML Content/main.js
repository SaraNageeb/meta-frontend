// Changing HTML Content

// 1- Removing HTML elements
const items = document.querySelector('.items');
console.log(items);

// Remove all list
// items.remove();

// Remove first <li> item
items.firstElementChild.remove();

// Remove last <li> item
items.lastElementChild.remove();

// Update text on 2nd <li> item
items.children[0].textContent = 'Item 1';

items.children[0].innerHTML = '<h1>Item 1</h1>'

// 2. Updating button style
const button = document.querySelector('.btn');
console.log(button);

button.style.backgroundColor = 'red';
button.style.color = 'black';