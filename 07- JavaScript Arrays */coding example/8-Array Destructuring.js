/*
Array Destructuring

Array destructuring allows you to create new variables using an array item as a value. Consider this example, an array with the various parts of a date:
*/

const date = ['1970', '12', '01']

// Arrays in JavaScript are guaranteed to preserve their order, so in this case the first index will always be a year, the second will be the month, and so on. Knowing this, you can create variables from the items in the array:


// Create variables from the Array items
const year = date[0]
const month = date[1]
const day = date[2]


// But doing this manually can take up a lot of space in your code. With array destructuring, you can unpack the values from the array in order and assign them to their own variables, like so:

// Destructure Array values into variables
const [year, month, day] = date


// Now log the new variables:
console.log(year)
console.log(month)
console.log(day)

/* 
Output
1970
12
01
*/

// Values can be skipped by leaving the destructuring syntax blank between commas:

// Skip the second item in the array
const [year, , day] = date

console.log(year)
console.log(day)

// Running this will give the value of year and day:

/* 
Output
1970
01
*/