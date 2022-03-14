# Function Declaration vs. Function Expression
They’re actually really similar. How you call them is exactly the same. The difference lies in how the browser loads them into the execution context.

1. Declaration: Function declarations load before any code is executed.
<br>
2. Expression: Function expressions load only when the interpreter reaches that line of code.
<br>
3. Declaration: Similar to the var statement, function declarations are hoisted to the top of other code.
<br>
4. Expression: Function expressions aren’t hoisted, which allows them to retain a copy of the local variables from the scope where they were defined.

***

```js
declaration(); // Prints: Hi, I'm a function declaration!
    function declaration() {
        document.write("Hi, I'm a function declaration!");
    }
     
    expression(); // Uncaught TypeError: undefined is not a function
    var expression = function() {
        document.write("Hi, I'm a function expression!");
    }
```