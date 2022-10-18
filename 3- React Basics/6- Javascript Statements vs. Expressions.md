# Difference between an expression and a statement in JavaScript?

JavaScript distinguishes expressions and statements. An expression is any valid unit of code that resolves to a value. A statement is a unit of code that performs an action. Some examples:

```js
// Statements
let x = 0;
function add(a, b) { return a + b; }
if (true) { console.log('Hi'); }

// Expressions
x;          // Resolves to 0
3 + x;      // Resolves to 3
add(1, 2);  // Resolves to 3
```
***
