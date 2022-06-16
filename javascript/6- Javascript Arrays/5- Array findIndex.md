Array findIndex() Overview

The findIndex() method returns the index of the first element in the array that satisfies the provided callback function. Otherwise, it returns -1, indicating that no element passed the test. 

```js
// function that returns odd number
function isOdd(element) {
  return element % 2 !== 0;
}

// defining an array of integers
let numbers = [2, 8, 1, 3, 4];

// returns the index of the first odd number in the array
let firstOdd = numbers.findIndex(isOdd);

console.log(firstOdd);

// Output: 2
```

***



***
