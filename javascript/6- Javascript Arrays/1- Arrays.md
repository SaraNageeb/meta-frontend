# JavaScript Arrays
An array is an object that can store multiple values at once. For example,

const words = ['hello', 'world', 'welcome'];

Here, ```words``` is an array. The array is storing 3 values.

***

### Create an Array
The easiest way to create an array is by using an array literal []. For example,

```js
const array1 = ["eat", "sleep"];
```

Here are more examples of arrays:

```js
// empty array
const myList = [ ];

// array of numbers
const numberArray = [ 2, 4, 6, 8];

// array of strings
const stringArray = [ 'eat', 'work', 'sleep'];

// array with mixed data types
const newData = ['work', 'exercise', 1, true];
```

You can also store arrays, functions and other objects inside an array. For example,

```js
const newData = [
    {'task1': 'exercise'},
    [1, 2 ,3],
    function hello() { console.log('hello')}
];
```

***

### Access Elements of an Array
You can access elements of an array using indices (0, 1, 2 …). For example,

```js
const myArray = ['h', 'e', 'l', 'l', 'o'];

// first element
console.log(myArray[0]);  // "h"

// second element
console.log(myArray[1]); // "e"
```

![Arrays][arrays]

[arrays]:https://cdn.programiz.com/sites/tutorial2program/files/javascript-array-indexing.png

***

### Add an Element to an Array
You can use the built-in method ```push()``` and ```unshift()``` to add elements to an array.

The ```push()``` method adds an element at the end of the array. For example,

```js
let dailyActivities = ['eat', 'sleep'];

// add an element at the end
dailyActivities.push('exercise');

console.log(dailyActivities); //  ['eat', 'sleep', 'exercise']
```

The ```unshift()``` method adds an element at the beginning of the array. For example,

```js
let dailyActivities = ['eat', 'sleep'];

//add an element at the start
dailyActivities.unshift('work'); 

console.log(dailyActivities); // ['work', 'eat', 'sleep']
```

***

### Change the Elements of an Array
You can also add elements or change the elements by accessing the index value.

```js
let dailyActivities = [ 'eat', 'sleep'];

// this will add the new element 'exercise' at the 2 index
dailyActivities[2] = 'exercise';

// this will update the element at the index 1
dailyActivities[1] = 'work';

console.log(dailyActivities); // ['eat', 'work', 'exercise']
```

Suppose, an array has two elements. If you try to add an element at index 3 (fourth element), the third element will be undefined. For example,

```js
let dailyActivities = [ 'eat', 'sleep'];

// this will add the new element 'exercise' at the 3 index
dailyActivities[3] = 'exercise';

console.log(dailyActivities); // ["eat", "sleep", undefined, "exercise"]
```

***
