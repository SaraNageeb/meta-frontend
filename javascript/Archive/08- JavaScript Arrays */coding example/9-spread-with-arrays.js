/*

Spread with Arrays
Spread can simplify common tasks with arrays. For example, let’s say you have two arrays and want to combine them:

*/

// Create an Array
const tools = ['hammer', 'screwdriver'];
const otherTools = ['wrench', 'saw'];



// Originally you would use concat() to concatenate the two arrays:
// Concatenate tools and otherTools together
const allTools = tools.concat(otherTools);


// Now you can also use spread to unpack the arrays into a new array:
// Unpack the tools Array into the allTools Array
const allTools = [...tools, ...otherTools];

console.log(allTools);


// Running this would give the following:

// Output
["hammer", "screwdriver", "wrench", "saw"]


/*
Spread allows you to make a shallow copy of an array or object, meaning that any top level properties will be cloned, but nested objects will still be passed by reference. For simple arrays or objects, a shallow copy may be all you need.

If you write the same example code but copy the array with spread, the original array will no longer be modified:
*/

// Create an Array
const originalArray = ['one', 'two', 'three']

// Use spread to make a shallow copy
const secondArray = [...originalArray]

// Remove the last item of the second Array
secondArray.pop()

console.log(originalArray); // ["one", "two", "three"]
