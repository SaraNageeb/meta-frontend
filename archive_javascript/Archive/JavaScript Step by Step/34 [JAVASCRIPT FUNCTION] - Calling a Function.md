# Calling a Function
As we saw in previous exercises, a function declaration binds a function to an identifier.

However, a function declaration does not ask the code inside the function body to run, it just declares the existence of the function. The code inside a function body runs, or executes, only when the function is called.

To call a function in your code, you type the function name followed by parentheses.

![Function ][function]

[function]:https://content.codecademy.com/courses/learn-javascript-functions/Diagram/name.svg

This function call executes the function body, or all of the statements between the curly braces in the function declaration.

![Function ][function-name]

[function-name]:https://content.codecademy.com/courses/learn-javascript-functions/Diagram/function%20execution.svg

We can call the same function as many times as needed.

***

```js
function sayThanks() {
console.log('Thank you for your purchase! We appreciate your business.');
}

sayThanks();
sayThanks();
sayThanks();
```