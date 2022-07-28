![Variables][variables]

[variables]:https://images.viblo.asia/cb582798-fddf-4af3-ae7e-ded31585327e.png

***

# Var Declaration
Before the advent of ES6, var declarations ruled. There are issues associated with variables declared with var, though. That is why it was necessary for new ways to declare variables to emerge. First, let's get to understand var more before we discuss those issues.

## Scope of var
Scope essentially means where these variables are available for use. var declarations are globally scoped or function/locally scoped.

The scope is global when a var variable is declared outside a function. This means that any variable that is declared with var outside a function block is available for use in the whole window.

var is function scoped when it is declared within a function. This means that it is available and can be accessed only within that function.

To understand further, look at the example below.

```js
var greeter = "hey hi";
    
    function newFunction() {
        var hello = "hello";
    }
```

Here, greeter is globally scoped because it exists outside a function while hello is function scoped. So we cannot access the variable hello outside of a function. So if we do this:

```js
    var tester = "hey hi";
    
    function newFunction() {
        var hello = "hello";
    }

    console.log(hello); // error: hello is not defined
```

We'll get an error which is as a result of hello not being available outside the function.

var variables can be re-declared and updated
This means that we can do this within the same scope and won't get an error.

```js
    var greeter = "hey hi";
    var greeter = "say Hello instead";
```

and this also

```js
    var greeter = "hey hi";
    greeter = "say Hello instead";
```

## Hoisting of var
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. This means that if we do this:

```js
    console.log (greeter);
    var greeter = "say hello"
```

it is interpreted as this:

```js
    var greeter;
    console.log(greeter); // greeter is undefined
    greeter = "say hello"
```

So var variables are hoisted to the top of their scope and initialized with a value of undefined.

## Problem with var
There's a weakness that comes with  var. I'll use the example below to explain:

```js
    var greeter = "hey hi";
    var times = 4;

    if (times > 3) {
        var greeter = "say Hello instead"; 
    }
    
    console.log(greeter) // "say Hello instead"
````

So, since times > 3 returns true, greeter is redefined  to "say Hello instead". While this is not a problem if you knowingly want greeter to be redefined, it becomes a problem when you do not realize that a variable greeter has already been defined before.

If you have used greeter in other parts of your code, you might be surprised at the output you might get. This will likely cause a lot of bugs in your code.
This is why let and const are necessary.

***

