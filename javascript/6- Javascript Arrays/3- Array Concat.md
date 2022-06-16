# Array Concat
The concat() method returns a new array by merging two or more values/arrays.

***

### Example 1: Using concat() method

```js
var languages1 = ["JavaScript", "Python", "Java"];
var languages2 = ["C", "C++"];

// concatenating two arrays
var new_arr = languages1.concat(languages2);
console.log(new_arr); // [ 'JavaScript', 'Python', 'Java', 'C', 'C++' ]

// concatenating a value and array
var new_arr1 = languages2.concat("Lua", languages1);
console.log(new_arr1); // [ 'C', 'C++', 'Lua', 'JavaScript', 'Python', 'Java' ]
```

Output

```
[ 'JavaScript', 'Python', 'Java', 'C', 'C++' ]
[ 'C', 'C++', 'Lua', 'JavaScript', 'Python', 'Java' ]
```
***
