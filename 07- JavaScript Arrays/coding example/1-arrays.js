// Array Creation
const heroes = ['Iron Man', 'Captain America', 'Thor', 'Hulk'];

// Select an Array
console.log(heroes[0]); // Iron Man

// Manipulate an Array
heroes[3] = 'Captain Marvel';
console.log(heroes); // [ 'Iron Man', 'Captain America', 'Thor', 'Captain Marvel' ]

// Remove an Array
// delete heroes[3];
console.log(heroes); // [ 'Iron Man', 'Captain America', 'Thor', <1 empty item> ]

//  If you assign an array to another variable and modify the second variable's array elements, the original array is also modified.
const avengers = heroes;
avengers.push('Ant Man');

console.log(heroes); // [ 'Iron Man', 'Captain America', 'Thor', 'Captain Marvel', 'Ant Man' ]
console.log(avengers); // [ 'Iron Man', 'Captain America', 'Thor', 'Captain Marvel', 'Ant Man' ]

// Clone an Array - ES6 Spread Operator
const newAvengers = [...heroes];
newAvengers.push('Falcon');

console.log(heroes); // [ 'Iron Man', 'Captain America', 'Thor', 'Captain Marvel', 'Ant Man' ]
console.log(newAvengers); // [ 'Iron Man', 'Captain America', 'Thor', 'Captain Marvel', 'Ant Man', 'Falcon']


// Pop - Removes last element and returns the removed item
const removedMember = heroes.pop();

console.log(removedMember); // Ant Man
console.log(heroes); // [ 'Iron Man', 'Captain America', 'Thor', 'Captain Marvel' ]


// Shift - Removes an element from the beginning of an Array and returns the removed item
const removedMember2 = heroes.shift(); 

console.log(removedMember2); // Iron Man
console.log(heroes); // [ 'Captain America', 'Thor', 'Captain Marvel' ]


// Unshift - Adds an element to the beginning of an Array
const newMember = heroes.unshift('Winter Soldier');
const newMember2 = heroes.unshift('Vision');

console.log(heroes); // [ 'Vision', 'Winter Soldier', 'Captain America', 'Thor', 'Captain Marvel' ]


// Push - Adds an element to the the end of an Array
heroes.push('Spider Man');
console.log(heroes); // [ 'Vision', 'Winter Soldier', 'Captain America', 'Thor', 'Captain Marvel', 'Spider Man' ]
