### Strings
JavaScript strings are primitive values. JavaScript strings are also immutable. It means that if you process a string, you will always get a new string. The original string doesn’t change.

To create literal strings in JavaScript, you use single quotes or double quotes:

```js
let carName1 = "Volvo XC60";  // Double quotes
let carName2 = 'Volvo XC60';  // Single quotes
```
You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

```js
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';
```

ES6 introduced template literals that allow you to define a string backtick (`) characters:

```js
let fullName = 'Cristiano Ronaldo';
let message = `Hello, ${fullName}`;

console.log(message); // Hello, Cristiano Ronaldo
```