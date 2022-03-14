# Function scope
A function in JavaScript defines a scope for variables declared using var, let and const.

Let’s declare a var variable within a function body:

```js
function run() {
  // "run" function scope
  var message = 'Run, Forrest, Run!';
  console.log(message); // 'Run, Forrest, Run!'
}

run();
console.log(message); // throws ReferenceError
```

run() function body creates a scope. The variable message is accessible inside of the function scope, but inaccessible outside.

Same way, a function body creates a scope for let, const and even function declarations.

**The variable is visible only within the function.**

```js
function run() {
  // "run" function scope
  const two = 2;
  let count = 0;
  function run2() {}
  console.log(two);   // 2
  console.log(count); // 0
  console.log(run2);  // function
}
run();
console.log(two);   // throws ReferenceError
console.log(count); // throws ReferenceError
console.log(run2);  // throws ReferenceError
```
