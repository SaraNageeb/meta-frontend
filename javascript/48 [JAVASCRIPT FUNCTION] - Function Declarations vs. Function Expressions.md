# Function Declarations vs. Function Expressions
There is another syntax for creating a function that is called a "function expression."

**function declaration**

A function declaration, for example, defines a function using the function keyword followed by the name of the function.

```jsx
// Function declaration
function excuteMe() {
    console.log('Function Declaration')
}
```

**function expression**

A function expression is an anonymous function or a function without a name that's assigned to a variable.

```jsx
// Function expression
let excuteMe = function () {
    console.log('Function Expression')
}
```

***

### Function Expressions vs. Function Declarations in JavaScript — What’s the Difference?

Function expressions and declarations pretty much do the same thing. In both examples above, you would call them like this executeMe() and then they execute whatever code is inside their code block {..}.

But there is a difference, not in what they do, but *how* they are executed — or rather, the *order* they are read and executed in — and this matters.

This function will run fine:

```jsx
// You can call a function declaration before it's defined.

// Call function declaration
executeMe()

// Function declaration
function excuteMe() {
    console.log('Function Declaration')
}
```

However, function will not run fine (it will throw an error):

```jsx
// Call function
executeMe()

// Function expression
let excuteMe = function () {
    console.log('Function Expression')
}
```

To understand why the first example (function declaration) works, but the second example (function expression) doesn’t, you have to learn what hoisting is in JavaScript, and then it will start making sense.

***

### Function declarations hoisting

Before any code is can run, your browser loads (reads) your entire JS script file, and since function declarations are moved to the top (hoisted) of the *execution order,* your code is actually executed in this order by the interpreter:

```jsx
// 1. Function declaration
function excuteMe() {
    console.log('Function Declaration')
}

// 2. Call to function declaration
executeMe()
```

Even if your code is physically written in your script file in the opposite order:

```jsx
// Call to function declaration
executeMe()

// Function declaration
function excuteMe() {
    console.log('Function Declaration')
}
```

That’s why it doesn’t matter if you physically place the call to your function declaration before or after it is defined in your script file. Both approaches will work because JavaScript always loads function declarations before it runs function calls to those function declarations.

***

### Function Expressions don’t hoist

Function expressions are not hoisted (not read first). Function expressions are only read when the interpreter reaches that line of code in your script file. So if your function expression physically exists *after* your function call (order-wise) then the JavaScript interpreter that runs in your browser can’t execute it.

So this won’t work:

```jsx
// Call function expression
executeMe()

// Function expression
let excuteMe = function () {
    console.log('Function Expression')
}
```

The code above will give you an error because you’re trying to run a function (`executeMe()`) before your browser’s code interpreter even knows (has read) about your function expression’s existence.

Swap the code order and it will work:

```jsx
// Function expression
let excuteMe = function () {
    console.log('Function Expression')
}

// Call function expression
executeMe()
```

Now, some developers also prefer the structure that function expressions, provide to their code. Since you're not able to call a function expression before it's declared, it requires that you write your functions up top, in a specific order, otherwise, they won't work.

And any code that calls and runs functions get placed toward the bottom of the program or file, which can make your code more readable and predictable.

***