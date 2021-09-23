### Numbers
Numbers are a primitive data type. They include the set of all integers and floating point numbers.


```js
let amount = 6;
let price = 4.99;
```


### String
Strings are a primitive data type. They are any grouping of characters (letters, spaces, numbers, or symbols) surrounded by single quotes ' or double quotes ".

```js
let city = 'London';
let country = "Norway";
```

### Boolean
Booleans are a primitive data type. They can be either true or false.

```js
let lateToWork = true;
```

### NaN 
JavaScript has the number type that allows you to represent numbers including integer and floating-point numbers. And JavaScript number has a special value called NaN, which stands for Not-a–Number.

```js
var a = '7';
var b = 5;

console.log(a * b); // 35
```

```js
var a = 'apple';
var b = 5;

console.log(a * b); // NaN
```

### Null
Null is a primitive data type. It represents the intentional absence of value. In code, it is represented as null.


```js
let x = null;
```

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