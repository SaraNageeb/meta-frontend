### Array slice() Overview
The ```slice()``` method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

**Example**

```js
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]

console.log(animals.slice());
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
```

#### Example 1: Return a portion of an existing array

```js
const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
const citrus = fruits.slice(1, 3);

// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']
```

#### Example 2: JavaScript slice() method

```js
let languages = ["JavaScript", "Python", "C", "C++", "Java"];

// slicing the array (from start to end)
let new_arr = languages.slice();
console.log(new_arr); // [ 'JavaScript', 'Python', 'C', 'C++', 'Java' ]

// slicing from the third element
let new_arr1 = languages.slice(2);
console.log(new_arr1); // [ 'C', 'C++', 'Java' ]

// slicing from the second element to fourth element
let new_arr2 = languages.slice(1, 4);
console.log(new_arr2); // [ 'Python', 'C', 'C++' ]

//Output

// [ 'JavaScript', 'Python', 'C', 'C++', 'Java' ]
// [ 'C', 'C++', 'Java' ]
// [ 'Python', 'C', 'C++' ]
```

***

### Array splice() Overview
The ```splice()``` method returns an array by changing (adding/removing) its elements in place.

**Example**

```js
let prime_numbers = [2, 3, 5, 7, 9, 11];

// replace 1 element from index 4 by 13
let removedElement = prime_numbers.splice(4, 1, 13);
console.log(removedElement);
console.log(prime_numbers);

// Output: [ 9 ]
//         [ 2, 3, 5, 7, 13, 11 ]
```

**splice() Parameters**

The ```splice()``` method takes in:

* ```start``` - The index from where the array is changed.
* ```deleteCount (optional)``` - The number of items to remove from ```start```.
* ```item1, ..., itemN (optional)``` - The elements to add to the ```start``` index. If not specified, ```splice()``` will only remove elements from the array.

**Note:** The ```splice()``` method changes the original array.

#### Example 1: Using splice() method

```js
let languages = ["JavaScript", "Python", "Java", "Lua"];

// replacing "Java" & "Lua" with "C" & "C++"
let removed = languages.splice(2, 2, "C", "C++");
console.log(removed); // [ 'Java', 'Lua' ]
console.log(languages); // [ 'JavaScript', 'Python', 'C', 'C++' ]

// adding elements without deleting existing elements
let removed1 = languages.splice(1, 0, "Java", "Lua");
console.log(removed1); // []
console.log(languages); // [ 'JavaScript', 'Java', 'Lua', 'Python', 'C', 'C++' ]

// removing 3 elements
let removed2 = languages.splice(2, 3);
console.log(removed2); // [ 'Lua', 'Python', 'C' ]
console.log(languages); // [ 'JavaScript', 'Java', 'C++' ]
```

Output

```
[ 'Java', 'Lua' ]
[ 'JavaScript', 'Python', 'C', 'C++' ]
[]
[ 'JavaScript', 'Java', 'Lua', 'Python', 'C', 'C++' ]
[ 'Lua', 'Python', 'C' ]
[ 'JavaScript', 'Java', 'C++' ]
```
