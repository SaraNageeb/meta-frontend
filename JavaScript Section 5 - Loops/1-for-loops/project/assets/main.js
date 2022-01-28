const elements = [
{tag: 'p', text: 'Iron Man'},
{tag: 'div', text: 'Captain America'},
{tag: 'section', text: 'Hulk'},
{tag: 'footer', text: 'Thor'}
];

const container = document.querySelector('.container');
const div = document.createElement('div');



for(let i= 0; i < elements.length; i++) {
    let {tag, text} = elements[i];
    let tagCreated = document.createElement(tag);
    tagCreated.innerHTML = text;
    div.appendChild(tagCreated);
}
container.appendChild(div);



for(let i= 0; i < elements.length; i++) {
    let {tag, text} = elements[i];
    let tagCreated = document.createElement(tag);
    let textCreated = document.createTextNode(text);
    
    tagCreated.appendChild(textCreated);
    div.appendChild(tagCreated);
}
container.appendChild(div);