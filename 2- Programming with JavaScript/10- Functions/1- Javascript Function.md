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

![image](https://user-images.githubusercontent.com/25232528/187720041-c08edb5f-f100-4cd1-92bd-089e362417fa.png)



**Example 1: Display a Text**

```js
// program to print a text
// declaring a function
function greet() {
    console.log("Hello there!");
}

// calling the function
greet();
```

```
Output

Hello there!
```

***

## Function Return
The ```return``` statement can be used to return the value to a function call.

The ```return``` statement denotes that the function has ended. Any code after ```return``` is not executed.

If nothing is returned, the function returns an ```undefined``` value.

![image](https://user-images.githubusercontent.com/25232528/187729002-5e5f94c9-ed70-4aae-9b5b-c9ae4ca9d8e9.png)

**Example: Sum of Two Numbers**

```js
// program to add two numbers
// declaring a function
function add(a, b) {
    return a + b;
}

// take input from the user
let number1 = parseFloat(prompt("Enter first number: "));
let number2 = parseFloat(prompt("Enter second number: "));

// calling function
let result = add(number1,number2);

// display the result
console.log("The sum is " + result);
```
```
Output

Enter first number: 3.4
Enter second number: 4
The sum is 7.4
```

In the above program, the sum of the numbers is returned by the function using the ```return``` statement. And that value is stored in the ```result``` variable.