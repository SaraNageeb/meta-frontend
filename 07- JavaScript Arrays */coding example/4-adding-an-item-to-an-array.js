/*

Adding an Item to an Array

In our seaCreatures variable we had five items, which consisted of the indices from 0 to 4. If we want to add a new item to the array, we can assign a value to the next index.
 
 */

let seaCreatures = [
	"octopus",
	"squid",
	"shark",
	"seahorse",
	"starfish",
];

seaCreatures[5] = "whale";
console.log(seaCreatures); // [ 'octopus', 'squid', 'shark', 'seahorse', 'starfish', 'whale' ]


// If we add an item and accidentally skip an index, it will create an undefined item in the array.
seaCreatures[7] = "pufferfish";
console.log(seaCreatures); // [ 'octopus', 'squid', 'shark', 'seahorse', 'starfish', 'whale', <1 empty item>, 'pufferfish' ]


// Issues like that can be avoided by using the push() method, which adds an item to the end of an array.
// Append lobster to the end of the seaCreatures array
seaCreatures.push("lobster");

console.log(seaCreatures); // [ 'octopus', 'squid', 'shark', 'seahorse', 'starfish', , 'whale', 'pufferfish', 'lobster' ]


// On the other end of the spectrum, the unshift() method will add an item to the beginning of an array.
// Append dragonfish to the beginning of the seaCreatures array
seaCreatures.unshift("dragonfish");

console.log(seaCreatures); // [ 'dragonfish', 'octopus', 'squid', 'shark', 'seahorse', 'starfish', 'whale', , 'pufferfish', 'lobster' ]


// Between push() and unshift() you will be able to apend items to the beginning and end of an array.
