Array Destructuring
You can also perform array destructuring in a similar way. For example,

const arrValue = ['one', 'two', 'three'];

// destructuring assignment in arrays
const [x, y, z] = arrValue;

console.log(x); // one
console.log(y); // two
console.log(z); // three
Run Code
Assign Default Values
You can assign the default values for variables while using destructuring. For example,

let arrValue = [10];

// assigning default value 5 and 7
let [x = 5,  y = 7] = arrValue;

console.log(x); // 10
console.log(y); // 7
Run Code
In the above program, arrValue has only one element. Hence,

the x variable will be 10
the y variable takes the default value 7
In object destructuring, you can pass default values in a similar way. For example,

const person = {
    name: 'Jack',
}

// assign default value 26 to age if undefined
const { name, age = 26} = person;

console.log(name); // Jack
console.log(age); // 26
Run Code
Swapping Variables
In this example, two variables are swapped using the destructuring assignment syntax.

// program to swap variables

let x = 4;
let y = 7;

// swapping variables
[x, y] = [y, x];

console.log(x); // 7
console.log(y); // 4
Run Code
Skip Items
You can skip unwanted items in an array without assigning them to local variables. For example,

const arrValue = ['one', 'two', 'three'];

// destructuring assignment in arrays
const [x, , z] = arrValue;

console.log(x); // one
console.log(z); // three
Run Code
In the above program, the second element is omitted by using the comma separator ,.

Assign Remaining Elements to a Single Variable
You can assign the remaining elements of an array to a variable using the spread syntax .... For example,

const arrValue = ['one', 'two', 'three', 'four'];

// destructuring assignment in arrays
// assigning remaining elements to y
const [x, ...y] = arrValue;

console.log(x); // one
console.log(y); // ["two", "three", "four"]
