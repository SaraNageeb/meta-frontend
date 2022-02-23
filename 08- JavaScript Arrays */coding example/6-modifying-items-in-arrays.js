/*
Modifying Items in Arrays
We can overwrite any value in an array by assigning a new value using the assignment operator, just like we would with a regular variable.

The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements 

splice(index)
splice(index, deleteCount)
splice(index, deleteCount, additem1)
splice(index, deleteCount, additem1, addtem2, additemN)
*/

let seaCreatures = [ 
'octopus',
'squid',
'shark',
'seahorse',
'starfish',
'whale',
'pufferfish' 
];

// Assign manatee to the first item in the seaCreatures array
seaCreatures[0] = "manatee";

seaCreatures; //[ 'manatee', 'squid', 'shark', 'seahorse', 'starfish', 'whale', 'pufferfish' ]

// Another way to modify a value is using the splice() method with a new parameter. If we wanted to change the value of seahorse, which is the item at index 3, we could remove it and add a new item in its place.

// Replace seahorse with sea lion using splice method
seaCreatures.splice(3, 1, "sea lion");

seaCreatures(); // [ 'manatee', 'squid', 'shark', 'sea lion', 'starfish', 'whale', 'pufferfish' ]

// In the above example, we removed seahorse from the array, and pushed a new value into index 3.

