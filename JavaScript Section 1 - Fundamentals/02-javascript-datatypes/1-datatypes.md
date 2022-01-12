# JavaScript Data Types
JavaScript variables can hold different data types: numbers, strings, objects and more.

***

## String
Strings are a primitive data type. They are any grouping of characters (letters, spaces, numbers, or symbols) surrounded by single quotes ' or double quotes ".

```js
let city = 'London';
let country = "England";
```
***

## typeof
You can use the typeof operator to find the data type of a JavaScript variable.

```js
typeof "London"               // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'Peter', age:23} // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" *
typeof null                   // Returns "object"
```

***

## Numbers
Numbers are a primitive data type. They include the set of all integers and floating point numbers.

```js
let amount = 5;
let price = 4.99;
```

***

### NaN 
In JavaScript, NaN (Not a Number) indicates that the value is not a number.

Performing arithmetic operations (except + ) to numeric value with string results in NaN. For example:

```js
var a = '7';
var b = 5;

console.log(a * b); // 35
```

```js
var a = 'apple';
var b = 5;

console.log(a + b); // NaN
```

```js
var a = '7';
var b = 5;

console.log(a + b); // 75
```

***

## Boolean
Booleans are a primitive data type. They can be either true or false.

```js
let lateToWork = true;
```

***

## Null
Null is a primitive data type. It represents the intentional absence of value. In code, it is represented as null.

```js
let x = null;
```

***

### Undefined vs. Undeclared Variables
It’s important to distinguish between undefined and undeclared variables.

An undefined variable is a variable that has been declared. Because we have not assigned it a value, the variable used the undefined as its initial value.

In contrast, an undeclared variable is the variable that has not been declared.

See the following example:

```js
var message;

console.log(message); // undefined
console.log(counter); // ReferenceError: counter is not defined
```
In this example, the message variable is declared but not initialized therefore its value is undefined whereas the counter variable has not been declared hence accessing it causes a ReferenceError.

***
