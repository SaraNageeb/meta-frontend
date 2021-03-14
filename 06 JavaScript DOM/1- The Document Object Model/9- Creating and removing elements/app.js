
const ul = document.querySelector('ul');
// ul.remove(); // it will remove the entire list

const button = document.querySelector('button');

button.addEventListener('click', () => {
  const li = document.createElement('li'); // document.createElement() method creates the HTML element specified by tagName
  li.textContent = 'something new to do';
  //ul.append(li); // The append() method appends a node as the last child of a node.
  ul.prepend(li); // The prepend() method appends a node as the first child of a node.


});

const items = document.querySelectorAll('li');

items.forEach(item => {
  item.addEventListener('click', e => {
    // e.target.style.textDecoration = 'line-through';
    e.target.remove(); // When clicked it remove an item from the list
  });
});