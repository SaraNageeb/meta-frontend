# Strings
JavaScript strings are primitive values. JavaScript strings are also immutable. It means that if you process a string, you will always get a new string. The original string doesn’t change.

To create literal strings in JavaScript, you use single quotes or double quotes:

```js
let ironMan = "Tony Stark";  // Double quotes
let captainAmerica = 'Steve Rogers';  // Single quotes
```
You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

```js
let answer1 = "It's alright";
let answer2 = "He is called 'Hulk'";
let answer3 = 'He is called "Thor"';
```

ES6 introduced template literals that allow you to define a string backtick (`) characters:

```js
let fullName = 'Bruce Wayne';
let message = `Hello, ${fullName}`;

console.log(message); // Hello, Bruce Wayne
```

***