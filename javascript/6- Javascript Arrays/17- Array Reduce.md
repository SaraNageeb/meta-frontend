# Array Reduce Overview
The array reduce() is a built-in JavaScript method used to apply a function to each element in the array to reduce the array to a single value. The reduce() method accepts two parameters, the total and the current value.

### Example 1: Sum of All Values of Array

```js
const numbers = [1, 2, 3, 4, 5, 6];

function sum_reducer(accumulator, currentValue) {
  return accumulator + currentValue;
}

let sum = numbers.reduce(sum_reducer);
console.log(sum); // 21

// using arrow function
let summation = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(summation); // 21
```

***

