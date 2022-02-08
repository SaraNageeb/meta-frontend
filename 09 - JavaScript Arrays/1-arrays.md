# Arrays
Arrays are lists of ordered, stored data. They can hold items that are of any data type. Arrays are created by using square brackets, with individual elements separated by commas.


```js
// An array containing numbers
const numberArray = [0, 1, 2, 3];

// An array containing different data types
const mixedArray = [1, 'chicken', false];
```

***

### Creating an Array
Using an array literal is the easiest way to create a JavaScript array.

```js
var cars = ['Saab', 'Volvo', 'BMW'];
```
<br>
Spaces and line breaks are not important. A declaration can span multiple lines:
```js
var cars = ['Saab', 'Volvo', 'BMW'];
```

<br>
Using the JavaScript Keyword new is another way to create an array.
```js
var cars = new Array('Saab', 'Volvo', 'BMW');
```

***

### Accessing and modifying array items
JavaScript array elements are arranged by index values, starting at 0:

- Index 0 has the first element.
- Index 1 has the second element.
- Index 2 has the third element.
- …and so on.

Individual elements in the array can be accessed using the array name and the element’s index surrounded by square brackets.

``array[index]``

This code accesses the value of the first element in the cars array:

```js
var cars = ['Saab', 'Volvo', 'BMW'];

console.log(cars[0]);
// Output: Saab
```
Array elements can be changed by accessing the element and assigning a new value to it.

```js
var cars = ['Saab', 'Volvo', 'BMW'];

cars[1] = 'Tesla';

console.log(cars);
// Output: ['Saab', 'Tesla', 'BMW']
```

***