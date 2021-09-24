### The Math Object
The JavaScript Math object allows you to perform mathematical tasks on numbers.

All methods and properties can be used without creating a Math object first.

***

### Math.round()
returns the nearest integer:


```js
Math.round(4.9);    // returns 5
Math.round(4.7);    // returns 5
Math.round(4.4);    // returns 4
Math.round(4.2);    // returns 4
Math.round(-4.2);    // returns -4
```

***

### Math.ceil()
returns the value of x rounded up to its nearest integer:

```js
Math.ceil(4.9);     // returns 5
Math.ceil(4.7);     // returns 5
Math.ceil(4.4);     // returns 5
Math.ceil(4.2);     // returns 5
Math.ceil(-4.2);   // returns -4
```

***

### Math.floor()
returns the value of x rounded down to its nearest integer:

```js
Math.floor(4.9);    // returns 4
Math.floor(4.7);    // returns 4
Math.floor(4.4);    // returns 4
Math.floor(4.2);    // returns 4
Math.floor(-4.2);    // returns -5
```

***

### Math.max()

function returns the largest of the zero or more numbers given as input parameters, or NaN if any parameter isn't a number and can't be converted into one.

```js
console.log(Math.max(1, 3, 2));
// expected output: 3

console.log(Math.max(-1, -3, -2));
// expected output: -1

const array1 = [1, 3, 2];

console.log(Math.max(...array1));
// expected output: 3
```

***

### Math.min()

returns the lowest-valued number passed into it, or NaN if any parameter isn't a number and can't be converted into one.

```js
console.log(Math.min(2, 3, 1));
// expected output: 1

console.log(Math.min(-2, -3, -1));
// expected output: -3

const array1 = [2, 3, 1];

console.log(Math.min(...array1));
// expected output: 1
```
***

### Math.random()

returns a random number between 0 (inclusive), and 1 (exclusive):

```js
Math.random();   // returns a random number
```
***

### Create a Random Number

JavaScript lets you create random numbers, which you can use to add variety and surprise in your programs. You generate a random number in JavaScript via a method named Math.random().

```js
// Random generate a number between 1-6
const dieRoll = Math.floor( Math.random() * 6 ) + 1; 
console.log(`You rolled a ${dieRoll}.`);
```