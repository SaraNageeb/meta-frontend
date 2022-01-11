# The let keywords was introduced in ES6 (2015)
The let keyword was introduced in ES6 (2015).

**The let keyword allows you to declare a variable with block scope.**

```js
var x = 10;
// Here x is 10
{
  let x = 2;
  // Here x is 2
}
// Here x is 10
```

**Variables defined with let cannot be Redeclared.**

```js
let x = "John Doe";

let x = 0;

// SyntaxError: 'x' has already been declared
```

**let can be updated but not re-declared.**

Just like var, a variable declared with let can be updated within its scope. Unlike var, a let variable cannot be re-declared within its scope. 

So while this will work:

```js
let greeting = "say Hi";
    greeting = "say Hello instead";
```

this will return an error:

```js
    let greeting = "say Hi";
    let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared
```

However, if the same variable is defined in different scopes, there will be no error:

```jsx
    let greeting = "say Hi";
    if (true) {
        let greeting = "say Hello instead";
        console.log(greeting); // "say Hello instead"
    }
    console.log(greeting); // "say Hi"
```

Why is there no error? This is because both instances are treated as different variables since they have different scopes.

This fact makes let a better choice than var. When using let, you don't have to bother if you have used a name for a variable before as a variable exists only within its scope.

***

## Variables defined with let have Block Scope.
A block lives in curly braces, anything within curly braces is a block. 
So a variable declared in a block with let is only available for use within that block. Let me explain this with an example:

```js
let greeting = "say Hi";
   let times = 4;

   if (times > 3) {
        let hello = "say Hello instead";
        console.log(hello);// "say Hello instead"
    }
   console.log(hello) // hello is declared inside the block scoped, so it does not exist outside
```
Variables declared with the var keyword can NOT have block scope.

Variables declared inside a { } block can be accessed from outside the block.

```js
{
  var x = 2;
}
// x CAN be used here
```
***