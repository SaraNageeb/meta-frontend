# Array Join Overview
The join() method returns a new string by concatenating all of the elements in an array, separated by a specified separator.

```js
let message = ["JavaScript", "is", "fun."];

// join all elements of array using space
let joinedMessage = message.join(" ");
console.log(joinedMessage);

// Output: JavaScript is fun.
```

***

### Example: Using join() method

```js
var info = ["Terence", 28, "Kathmandu"];

var info_str = info.join(" | ");

// join() does not change the original array
console.log(info); // [ 'Terence', 28, 'Kathmandu' ]

// join() returns the string by joining with separator
console.log(info_str); // Terence | 28 | Kathmandu
```

Here, we can see that the join() method converts all the array elements into a string and separates each element by the specified separator.

