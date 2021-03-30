// querySelector only returns the first match.
// The first li.hot element is then selected and changed.
var el = document.querySelector('li.hot');
console.log(el);
el.className = 'cool';

// querySelectorAll returns a NodeList.
// The third li element is then selected and changed.
var els = document.querySelectorAll('li.hot');
els[1].className = 'cool';

// returns a NodeList 
var els_cool = document.querySelectorAll('li.cool');
console.log(els_cool);

// Loop over each li that has cool class
for(let el_cool of els_cool) {
    console.log(el_cool);
}
