# The forEach() Overview
The forEach() method executes a provided function for each array element.

```js
let numbers = [1, 3, 4, 9, 8];

// function to compute square of each number
function computeSquare(element) {
  console.log(element * element);
}

// compute square root of each element
numbers.forEach(computeSquare);

/* Output:
1
9 
16
81
64
*/
```

***

### Example 1

```js
function printElements(element, index) {
    console.log('Array Element ' + index + ': ' + element);
}

const prices = [1800, 2000, 3000, , 5000, 500, 8000];

// forEach does not execute for elements without values
// in this case, it skips the third element as it is empty
prices.forEach(printElements);
```

Output

```
Array Element 0: 1800
Array Element 1: 2000
Array Element 2: 3000
Array Element 4: 5000
Array Element 5: 500
Array Element 6: 8000
```

***

### Example 2
Let's create an array with the numbers from 1 to 6 and display in the browser console only the even numbers. Check the code below.

```js
const arr = [1,2,3,4,5,6];

const verifyEvenNum = el => {
if (el % 2 === 0) {
console.log(el);
} 
}

arr.forEach(verifyEvenNum);
// 2
// 4
// 6
```

***

### Example 3
To count the duplicates in an array, declare an empty object variable that will store the count for each value and use the forEach() method to iterate over the array. On each iteration, increment the count for the value by 1 or initialize it to 1 if it hasn't been set already.

```js
const countries = ['Argentina', 'Brazil', 'Argentina', 'Argentina', 'Brazil', 'Portugal'];

const count = {};

countries.forEach(element => {
  count[element] = (count[element] || 0) + 1;
});


console.log(count);
// {Argentina: 3, Brasil: 2, Portugal: 1}
```

* The function we passed to the Array.forEach method gets called with each element in the array.

* For each element we check if the value in already present as a key in the count object. If it is present, we increment it by 1.

* If the value is not yet present, we initialize it to 1.

* The logical OR (||) operator is there to check if the key has not been initialized in the array. If the accessor returns undefined, we initialize the value for the key to 0 + 1.

***
