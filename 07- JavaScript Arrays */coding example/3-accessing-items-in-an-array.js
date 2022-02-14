/**
Accessing Items in an Array
An item in a JavaScript array is accessed by referring to the index number of the item in square brackets.
*/


let seaCreatures = [
	"octopus",
	"squid",
	"shark",
	"seahorse",
	"starfish",
]

// An item in a JavaScript array is accessed by referring to the index number of the item in square brackets.
console.log(seaCreatures[1]); // squid
    


// We know 0 will always output the first item in an array. We can also find the last item in an array by performing an operation on the length property and applying that as the new index number.
const lastIndex = seaCreatures.length - 1;
console.log(seaCreatures[lastIndex]); // starfish



//Attempting to access an item that doesn’t exist will return undefined.
console.log(seaCreatures[10]); // undefined

    
// In order to access items in a nested array, you would add another index number to correspond to the inner array.
let nestedArray = [
	[
		"salmon",
		"halibut",
	],
	[
		"coral",
		"reef",
	]
];

console.log(nestedArray[1][0]); // coral

