/*
Indexing Arrays

Arrays do not have name/value pairs. Instead, they are indexed with integer values beginning with 0. Here is an example array, assigned to seaCreatures.
 */


let seaCreatures = [
	"octopus",
	"squid",
	"shark",
	"seahorse",
	"starfish",
];

/*
Here is a breakdown of how each item in the seaCreatures array is indexed.

octopus	squid	shark	seahorse	starfish
0	     1	     2	     3	         4
*/


// We can find out how many items are in an array with the length property.
console.log(seaCreatures.length) // 5


// If we want to find out the index number of a specific item in an array, such as seahorse, we can use the indexOf() method.
console.log(seaCreatures.indexOf("seahorse")); // 4

// If an index number is not found, such as for a value that does not exist, the console will return -1.
console.log(seaCreatures.indexOf("cuttlefish")); // -1
