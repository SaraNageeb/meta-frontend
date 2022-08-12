# JavaScript Number Methods
Here is a list of built-in number methods in JavaScript.

| Method                        | Description                                                           |
|-------------------------------|-----------------------------------------------------------------------|
| isNaN()                       | determines whether the passed value is NaN                            |
| isFinite()                    | determines whether the passed value is a finite number                |
| isInteger()                   | determines whether the passed value is an integer                     |
| isSafeInteger()               | determines whether the passed value is a safe integer                 |
| parseFloat(string)            | converts the numeric floating string to floating-point number         |
| parseInt(string, [radix])     | converts the numeric string to integer                                |
| toExponential(fractionDigits) | returns a string value for a number in exponential notation           |
| toFixed(digits)               | returns a string value for a number in fixed-point notation           |
| toPrecision()                 | returns a string value for a number to a specified precision          |
| toString([radix])             | returns a string value in a specified radix(base)                     |
| valueof()                     | returns the numbers value                                             |
| toLocaleString()              | returns a string with a language sensitive representation of a number |

***

## Example

```js
// check if a is integer
const a = 12;
console.log(Number.isInteger(a)); // true

// check if b is NaN
const b = NaN;
console.log(Number.isNaN(b)); // true

// display upto two decimal point
const d = 5.1234;
console.log(d.toFixed(2)); // 5.12
```

***

## JavaScript Number() Function
The Number() function is used to convert various data types to numbers. For example,

```js
const a = '23'; // string
const b = true; // boolean

//converting to number
const result1 = Number(a);
const result2 = Number(b);

console.log(result1); // 23
console.log(result2); // 1
```
***
