# Array includes() Overview
The includes() method checks if an array contains a specified element or not.

```js
// defining an array
let languages = ["JavaScript", "Java", "C"];

// checking whether the array contains 'Java'
let check = languages.includes("Java");

console.log(check); 

// Output: true
```

***

### Example 1: Using includes() method

```js
let languages = ["JavaScript", "Java", "C", "C++"];

// checking whether the array contains 'C'
let check1 = languages.includes("C");

console.log(check1); // true

// checking whether the array contains 'Ruby'
let check2 = languages.includes("Ruby");

console.log(check2); // false
```

Output

```
true
false
```

In the above example, we have used the includes() method to check whether the languages array contains elements 'C' and 'Ruby'.

languages.includes("C") returns true since the array contains 'C' and languages.includes("Ruby") returns false since the array does not contain 'Ruby'.

***
