/*
  Slice 
  The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)

  Syntax
  slice()
  slice(start)
  slice(start, end)
*/

const avengers = ['Iron Man', 'Captain America', 'Thor', 'Hulk', 'Hawkeye', 'Black Widow'];

console.log(avengers.slice(0,2)); // [ 'Iron Man', 'Captain America' ]

console.log(avengers.slice(0)); // ['Iron Man', 'Captain America', 'Thor', 'Hulk', 'Hawkeye', 'Black Widow']

console.log(avengers.slice(0, -2)); // [ 'Iron Man', 'Captain America', 'Thor', 'Hulk' ]

/*
The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements 

splice(index)
splice(index, deleteCount)
splice(index, deleteCount, additem1)
splice(index, deleteCount, additem1, addtem2, additemN)
*/

// pop - remove last element of an array
const removed = avengers.splice(5,1); 
console.log(avengers, removed); // [ 'Iron Man', 'Captain America', 'Thor', 'Hulk', 'Hawkeye' ] [ 'Black Widow' ]

const removed1 = avengers.splice(-1,1);
console.log(avengers, removed1); // [ 'Iron Man', 'Captain America', 'Thor', 'Hulk' ] [ 'Hawkeye' ]

const removed2 = avengers.splice(1, Number.MAX_VALUE);
console.log(avengers,removed2); // [ 'Iron Man' ] [ 'Captain America', 'Thor', 'Hulk' ]


// push 
const newMember = avengers.splice(1,0,'Captain America', 'Thor', 'Hulk');
console.log(avengers,newMember); // [ 'Iron Man' ] [ 'Captain America', 'Thor', 'Hulk' ]

// Replacing 
const newMember2 = avengers.splice(0,2,'Spider Man', 'Ant Man',);
console.log(avengers,newMember2); // [ 'Spider Man', 'Ant Man', 'Thor', 'Hulk' ] [ 'Iron Man', 'Captain America' ]



