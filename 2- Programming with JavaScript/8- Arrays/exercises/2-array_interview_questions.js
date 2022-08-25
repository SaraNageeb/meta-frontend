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

To count the duplicates in an array:

1.Declare an empty object variable that will store the count for each value.
2.Use the forEach() method to iterate over the array.
3.On each iteration, increment the count for the value by 1 or initialize it to 1.


The function we passed to the Array.forEach method gets called with each element in the array.

On each iteration, we check if the current value is already present as a key in the count object. If it is present, we increment it by 1.

If the value is not present, we initialize it to 1.

We used the logical OR (||) operator to check if the key has not been initialized in the array. If the accessor returns undefined, we initialize the value for the key to 0 + 1.
*/

const countries = ['Argentina', 'Brazil', 'Argentina', 'Portugal', 'Brazil'];

// Keep track count of every country
let count = {};


countries.forEach((country) => {
    count[country] = (count[country] || 0) + 1;
})

console.log(count);

