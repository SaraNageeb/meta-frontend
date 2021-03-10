// get the first <a> element in the document:
const link = document.querySelector('a');

// Console log the url
console.log(link.getAttribute('href'));

// Setting the href attribute to https://www.bbc.co.uk
link.setAttribute('href', 'https://www.bbc.co.uk')

// Setting the text to BBC UK
link.innerText = 'BBC UK';

// get the first <p> element in the document
const msg = document.querySelector('p');

// console log the class for msg
console.log(msg.getAttribute('class')); // expected result: error

// set the class to success
msg.setAttribute('error', 'success');

// setting the style to green
msg.setAttribute('style', 'color:green');


// Updating CSS styles properties

const title = document.querySelector('h1');

// It's not recommended to use this example, because it will overide
// title.setAtribute('style', 'margin: 50px;');


// setting the margin 
title.style.margin = '50px';

// setting the color 
title.style.color = 'green';

// setting the font size
title.style.fontSize = '100px';

// deleting a style
title.style.margin = '';