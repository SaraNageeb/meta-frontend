/*
Removing an Item from an Array

When we want to remove a specific item from an array, we use the splice() method. In the seaCreatures array, we accidentally created an undefined array item earlier, so let’s remove that now.
 */

let seaCreatures = [
    'dragonfish',
    'octopus',
    'squid',
    'shark',
    'seahorse',
    'starfish',
    'whale',
     ,
    'pufferfish',
    'lobster'
];

seaCreatures.splice(7, 1);
console.log(seaCreatures); // [ 'dragonfish', 'octopus', 'squid', 'shark', 'seahorse', 'starfish', 'whale', 'pufferfish', 'lobster' ]

/*
In the splice() method, the first parameter stands for the index number to be removed (in this case, 7), and the second parameter is how many items should be removed. We put 1, signifying that only one item will be removed.

The splice() method will change the original variable. If you would like the original variable to remain unchanged, use slice() and assign the result to a new variable. Here we will assign two variables, one that uses slice() to store the seaCreatures array from the first element until whale[7]

Slice 
The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)

Syntax
slice()
slice(start)
slice(start, end)
*/

let firstArray = seaCreatures.slice(0, 7);


console.log(firstArray); // [ 'dragonfish', 'octopus', 'squid', 'shark', 'seahorse', 'starfish', 'whale']

// Notice that when calling the seaCreatures variable, the items in the array remain unchanged.


// The pop() method will remove the last item in an array.
// Remove the last item from the seaCreatures array
seaCreatures.pop();

console.log(seaCreatures); // [ 'dragonfish', 'octopus', 'squid', 'shark', 'seahorse', 'starfish', 'whale', 'pufferfish' ]
// lobster has been removed as the last item of the array. 



// In order to remove the first item of the array, we will use the shift() method.
// Remove the first item from the seaCreatures array
seaCreatures.shift();

console.log(seaCreatures); //[ 'octopus', 'squid', 'shark', 'seahorse', 'starfish', 'whale', 'pufferfish' ]

// By using pop() and shift(), we can remove items from the beginning and the end of arrays. Using pop() is preferred wherever possible, as the rest of the items in the array retain their original index numbers.

