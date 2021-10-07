# Templates Literals
JavaScript provides a more intuitive way to work with strings with a feature called "template literals." Template literals not only make your code more usable and readable, but they also enhance how you work with strings.

To create a template literal, instead of single quotes (') or double quotes (") quotes we use the backtick (`) character. This will produce a new string, and we can use it in any way we want.

### Variable Substitutions
Template literals allow variables in strings:

```js
let firstName = "Harry";
let lastName = "Potter";

let text = `Welcome ${firstName}, ${lastName}!`; // Welcome Harry, Potter!
```

***

### Expression Substitution
Template literals allow expressions in strings:

```js
let price = 22;
let tax = 1.50;

let total = `The total prices is ${price * tax}`;

console.log(total); // The total prices is 33
```
***
