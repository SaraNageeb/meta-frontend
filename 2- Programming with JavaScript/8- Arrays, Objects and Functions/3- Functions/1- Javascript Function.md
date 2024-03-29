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

## Variable Scope

**Global Scope:**
A variable declared at the top of a program or outside of a function is considered a global scope variable.

Let's see an example of a global scope variable.

```js
// program to print a text 
let a = "hello";

function greet () {
    console.log(a);
}

greet(); // hello
```

In the above program, variable ```a``` is declared at the top of a program and is a global variable. It means the variable ```a``` can be used anywhere in the program.


**Local Scope:**
A variable can also have a local scope, i.e it can only be accessed within a function.

**Example 1: Local Scope Variable**

```js
// program showing local scope of a variable
let a = "hello";

function greet() {
    let b = "World"
    console.log(a + b);
}

greet();
console.log(a + b); // error
```

```
Output

helloWorld
Uncaught ReferenceError: b is not defined
```

In the above program, variable ```a``` is a global variable and variable ```b``` is a local variable. The variable ```b``` can be accessed only inside the function ```greet```. Hence, when we try to access variable ```b``` outside of the function, an error occurs.

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

* Function declarations are hoisted, while function expressions are not. This means that you can call a function declaration before it is defined, but you cannot do this with a function expression.

* With function expressions, you can use a function immediately after it is defined. With function declarations, you have to wait until the entire script has been parsed.

* Function expressions can be used as an argument to another function, but function declarations cannot.

* Function expressions can be anonymous, while function declarations cannot.

**Benefits of function declarations**

* It can make your code more readable. If you have a long function, giving it a name can help you keep track of what it’s doing.

* Function declarations are hoisted, which means that they are available before they are defined in your code. This helps if you need to use the function before it is defined.

**Benefits of function expressions**

* They are more flexible than function declarations. You can create function expressions and assign them to different variables, which can be helpful when you need to use the same function in different places.

* Function expressions are not hoisted, so you can’t use them before they are defined in your code. This helps if you want to make sure that a function is only used after it is defined.

***

## JavaScript Arrow Function
Arrow function is one of the features introduced in the ES6 version of JavaScript. It allows you to create functions in a cleaner way compared to regular functions. For example,

This function

```js
// function expression
let x = function(x, y) {
   return x * y;
}
```
can be written as

```js
// using arrow functions
let x = (x, y) => x * y;
```

using an arrow function.

**Concise Body Arrow Functions**

JavaScript also provides several ways to refactor arrow function syntax. The most condensed form of the function is known as concise body. We’ll explore a few of these techniques below:

![image](https://user-images.githubusercontent.com/25232528/187942491-f0f49df7-55d6-447c-aa5b-654446114aff.png)

**Example 1: Arrow Function with No Argument**
If a function doesn't take any argument, then you should use empty parentheses. For example,

```js
let greet = () => console.log('Hello');
greet(); // Hello
```

**Example 2: Arrow Function with One Argument**
If a function has only one argument, you can omit the parentheses. For example,

```js
let greet = x => console.log(x);
greet('Hello'); // Hello 
```

**Example 3: Arrow Function as an Expression**
You can also dynamically create a function and use it as an expression. For example,

```js
let age = 5;

let welcome = (age < 18) ?
  () => console.log('Baby') :
  () => console.log('Adult');

welcome(); // Baby
```

**Example 4: Multiline Arrow Functions**
If a function body has multiple statements, you need to put them inside curly brackets ```{}```. For example,

```js
let sum = (a, b) => {
    let result = a + b;
    return result;
}

let result1 = sum(5,7);
console.log(result1); // 12
```
***

## Default Function Parameters
One of the features added in ES6 is the ability to use default parameters. Default parameters allow parameters to have a predetermined value in case there is no argument passed into the function or if the argument is ```undefined``` when called.

Take a look at the code snippet below that uses a default parameter:

```js
function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`)
}
 
greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!
```
 
* In the example above, we used the ```=``` operator to assign the parameter ```name``` a default value of ```'stranger'```. This is useful to have in case we ever want to include a non-personalized default greeting!

* When the code calls ```greeting('Nick')``` the value of the argument is passed in and, ```'Nick'```, will override the default parameter of ```'stranger'``` to log ```'Hello, Nick!'``` to the console.

* When there isn’t an argument passed into ```greeting()```, the default value of ```'stranger'``` is used, and ```'Hello, stranger!'``` is logged to the console.

By using a default parameter, we account for situations when an argument isn’t passed into a function that is expecting an argument.

***

