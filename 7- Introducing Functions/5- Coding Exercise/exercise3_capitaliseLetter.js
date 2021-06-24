/*
Define a function called capitalize that accepts a string argument and 
returns a new string with the first letter capitalized> (but the rest of the string unchanged)
*/

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

console.log('portugal'); //Portugal
console.log('spain'); // Spain