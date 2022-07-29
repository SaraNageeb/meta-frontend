# Variable Hoisting
In terms of variables and constants, keyword var is hoisted and let and const does not allow hoisting.

For example,

```js
// program to display value
a = 5;
console.log(a);
var a; // 5
```

In the above example, variable a is used before declaring it. And the program works and displays the output 5. The program behaves as:

```js
// program to display value
var a;
a = 5;
console.log(a); // 5
```

However in JavaScript, initializations are not hoisted. For example,

```js
// program to display value
console.log(a);
var a = 5;
```

Output

```js
undefined
```

The above program behaves as:

```js
var a;
console.log(a);
a = 5;
```

Only the declaration is moved to the memory in the compile phase. Hence, the value of variable a is undefined because a is printed without initializing it.

Also, when the variable is used inside the function, the variable is hoisted only to the top of the function. For example,

```js
// program to display value
var a = 4;

function greet() {
    b = 'hello';
    console.log(b); // hello
    var b;
}

greet(); // hello
console.log(b);
```

Output

```js
hello
Uncaught ReferenceError: b is not defined
```
In the above example, variable b is hoisted to the top of the function greet and becomes a local variable. Hence b is only accessible inside the function. b does not become a global variable.

If a variable is used with the let keyword, that variable is not hoisted. For example,

```js
// program to display value
a = 5;
console.log(a);
let a; // error
```

Output

```js
Uncaught ReferenceError: Cannot access 'a' before initialization
```

While using let, the variable must be declared first.

***

## Function Hoisting
A function can be called before declaring it. For example,

```js
// program to print the text
greet();

function greet() {
    console.log('Hi, there.');
}
```

Output

```js
Hi, there
```

In the above program, the function greet is called before declaring it and the program shows the output. This is due to hoisting.

However, when a function is used as an expression, an error occurs because only declarations are hoisted. For example;

```js
// program to print the text
greet();

let greet = function() {
    console.log('Hi, there.');
}
```

Output

```js
Uncaught ReferenceError: greet is not defined
```

If var was used in the above program, the error would be:

```js
Uncaught TypeError: greet is not a function
```

***

## Declare Your Variables At the Top !
Hoisting is (to many developers) an unknown or overlooked behavior of JavaScript.

If a developer doesn't understand hoisting, programs may contain bugs (errors).

To avoid bugs, always declare all variables at the beginning of every scope.

Since this is how JavaScript interprets the code, it is always a good rule.
