// Get the inner text of the first <p> element:
const para = document.querySelector('p');
console.log(para.innerText);
// Change the text of the first <p> element 
para.innerText = 'Javascript is fun';

// Append to the text
// para.innerText += ' not all times';

// Get the inner text of all <p> element:
const paras = document.querySelectorAll('p');
console.log(paras.innerText);

// Changing the text of several <p> element at once with forEach
paras.forEach(para => {
    console.log(para.innerText);
    para.innerText += '  new text added';
});


// Get the HTML content of a class:
const content = document.querySelector('.content');
console.log(content.innerHTML);
console.log(content.innerText); // See the difference between innerHTML and innerText

// Change the HTML content of one element:
content.innerHTML = '<h3>I was update to a h3</h3>'

// Appeding <h4> and <p> to the content class
content.innerHTML += '<h4>I was update to a h4</h4>'

const people = ['mario', 'luigi', 'yoshi'];

people.forEach(person => {
content.innerHTML += `<p>${person}</p>`;
});

/*
The innerText property returns just the text, without spacing and inner element tags.
The innerHTML property returns the text, including all spacing and inner element tags.
The textContent property returns the text with spacing, but without inner element tags.
*/
