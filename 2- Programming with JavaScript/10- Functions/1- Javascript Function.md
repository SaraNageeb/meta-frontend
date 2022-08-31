# JavaScript Function
A function is a block of code that performs a specific task.

Suppose you need to create a program to create a circle and color it. You can create two functions to solve this problem:

* a function to draw the circle
* a function to color the circle

Dividing a complex problem into smaller chunks makes your program easy to understand and reusable.

***

## Declaring a Function
The syntax to declare a function is:

```js
function nameOfFunction () {
    // function body   
}
```

* A function is declared using the ```function``` keyword.
* The basic rules of naming a function are similar to naming a variable. It is better to write a descriptive name for your function. For example, if a function is used to ```add``` two numbers, you could name the function add or ```addNumbers```.
* The body of function is written within ```{}```.

For example,

```js
// declaring a function named greet()
function greet() {
    console.log("Hello there");
}
```

***

## Calling a Function
In the above program, we have declared a function named ```greet()```. To use that function, we need to call it.

Here's how you can call the above ```greet()``` function.

```js
// function call
greet();
```
