# JavaScript Function
A function is a block of code that performs a specific task.

Suppose you need to create a program to create a circle and color it. You can create two functions to solve this problem:

* a function to draw the circle
* a function to color the circle

Dividing a complex problem into smaller chunks makes your program easy to understand and reusable.

**Benefits of Using a Function**

* Function makes the code reusable. You can declare it once and use it multiple times.
* Function makes the program easier as each small task is divided into a function.
* Function increases readability.

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


**Using Multiple return Statements**

```js
function rectangleArea(width, height) {
  if (width < 0 || height < 0) {
    return 'You need positive integers to calculate area!';
  }
  return width * height;
}
```

If an argument for ```width``` or ```height``` is less than ```0```, then ```rectangleArea()``` will return ```'You need positive integers to calculate area!'```. The second return statement ```width * height``` will not run.

***

# Parameters and Arguments
Functions can take inputs and use the inputs to perform a task. When declaring a function, we can specify its parameters. Parameters allow functions to accept input(s) and perform a task using the input(s). We use parameters as placeholders for information that will be passed to the function when it is called.

Let’s observe how to specify parameters in our function declaration:

![image](https://user-images.githubusercontent.com/25232528/187763707-f9f2ded7-fab6-4e97-9d98-f5a7669811c9.png)

In the diagram above, ```calculateArea()```, computes the area of a rectangle, based on two inputs, ```width``` and ```height```. The parameters are specified between the parenthesis as ```width``` and ```height```, and inside the function body, they act just like regular variables. width and height act as placeholders for values that will be multiplied together.

When calling a function that has parameters, we specify the values in the parentheses that follow the function name. The values that are passed to the function when it is called are called arguments. Arguments can be passed to the function as values or variables.

![image](https://user-images.githubusercontent.com/25232528/187764058-e412f25e-29e0-4599-8329-12426136545e.png)

In the function call above, the number ```10``` is passed as the ```width``` and ```6``` is passed as ```height```. Notice that the order in which arguments are passed and assigned follows the order that the parameters are declared.

***

## Pass Multiple Arguments to a Function
Functions can accept more than one argument. When calling a function, you're able to pass multiple arguments to the function; each argument gets stored in a separate parameter and used as a discrete variable within the function.

**Example Add Two Numbers**

```js
// program to add two numbers using a function
// declaring a function
function add(a, b) {
    console.log(a + b);
}

// calling functions
add(3,4);
add(2,9);
```

```
Output

7
11
```

In the above program, the ```add``` function is used to find the sum of two numbers.

The function is declared with two parameters ```a``` and ```b```.
The function is called using its name and passing two arguments ```3``` and ```4``` in one and ```2``` and ```9``` in another.

Notice that you can call a function as many times as you want. You can write one function and then call it multiple times with different arguments.

***

## Variable Scope and Function Scope

***

## Function Declarations vs. Function Expressions
In Javascript, functions can also be defined as expressions. For example,

```js
// program to find the square of a number
// function is declared inside the variable
let x = function (num) { return num * num };
console.log(x(4));

// can be used as variable value for other variables
let y = x(3);
console.log(y);
```

```
Output

16
9
```

In the above program, variable ```x``` is used to store the function. Here the function is treated as an ```expressio```n. And the function is called using the variable name. The function above is called an anonymous function.

**The Differences Between Function Expressions & Declarations**
There are a few key differences between function expressions and function declarations:

* Function declarations are hoisted, while function expressions are not. This means that you can call a function declaration before it is defined, but you cannot do this with a function expression.

* With function expressions, you can use a function immediately after it is defined. With function declarations, you have to wait until the entire script has been parsed.

* Function expressions can be used as an argument to another function, but function declarations cannot.

* Function expressions can be anonymous, while function declarations cannot.
