// const button = document.querySelector('button');

// When the button is clicked, it will log the message to the console
// button.addEventListener('click', () => {
//   console.log('you clicked me');
// });

const items = document.querySelectorAll('li');

items.forEach(item => {
  item.addEventListener('click', e => {
    // console.log('item clicked');
    // console.log(e);
    // console.log(e.target); // More useful to use e.target than item
    // console.log(item);
    e.target.style.textDecoration = 'line-through';
  });
});