/*
 01
Print the value, index, array from a given array
*/

const numbers = [1,2,3,4,5];

numbers.forEach((number,index,array) => {
console.log(`Index: ${index} - ${number} - ${array}`);
})

/*
 02
Calculcate the sum of the numbers from the Array
*/

const numbers = [1,2,3,4,5];
let sum = 0;

numbers.forEach(item => sum += item);
console.log(sum);

/*
 03
Check how many times an item appears in an array
*/

const countries = ['Argentina', 'Brazil', 'Argentina', 'Portugal', 'Brazil'];

// Keep track count of every country
let count = {};


countries.forEach((country) => {
    count[country] = (count[country] || 0) + 1;
})

console.log(count);

