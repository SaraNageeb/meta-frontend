JavaScript Destructuring
The destructuring assignment introduced in ES6 makes it easy to assign array values and object properties to distinct variables. For example,

Before ES6:

// assigning object attributes to variables
const person = {
    name: 'Sara',
    age: 25,
    gender: 'female'    
}

let name = person.name;
let age = person.age;
let gender = person.gender;

console.log(name); // Sara
console.log(age); // 25
console.log(gender); // female
Run Code
From ES6:

// assigning object attributes to variables
const person = {
    name: 'Sara',
    age: 25,
    gender: 'female'    
}

// destructuring assignment
let { name, age, gender } = person;

console.log(name); // Sara
console.log(age); // 25
console.log(gender); // female
Run Code
Note: The order of the name does not matter in object destructuring.

For example, you could write the above program as:

let { age, gender, name } = person;
console.log(name); // Sara
Note: When destructuring objects, you should use the same name for the variable as the corresponding object key.

For example,

let {name1, age, gender} = person;
console.log(name1); // undefined
If you want to assign different variable names for the object key, you can use:

const person = {
    name: 'Sara',
    age: 25,
    gender: 'female'    
}

// destructuring assignment
// using different variable names
let { name: name1, age: age1, gender:gender1 } = person;

console.log(name1); // Sara
console.log(age1); // 25
console.log(gender1); // female
