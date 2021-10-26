# Function Parameters and Arguments
Functions often need specific information to perform a task. In addition to getting information from a function, you can send information to a function to change how that function works.

![Function](/img/javascript-function-parameter-argument.png)

**Parameters**
Is a named variable passed into a function. Parameter variables are used to import arguments into functions.

**Arguments**
An argument is a value (primitive or object) passed as input to a function.

***

### Example 1: Function with Parameters

```js
// program to print the text
// declaring a function
function greet(name) {
    console.log("Hello " + name + ":)");
}

// variable name can be different
let name = prompt("Enter a name: ");

// calling function
greet(name);
```

Output

```js
Enter a name: Simon
Hello Simon :)
```

In the above program, the greet function is declared with a name parameter. The user is prompted to enter a name. Then when the function is called, an argument is passed into the function.

Note: When a value is passed when declaring a function, it is called parameter. And when the function is called, the value passed is called argument.

***

### Example 2: Add Two Numbers

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

Output
```js
7
11
```

In the above program, the add function is used to find the sum of two numbers.

The function is declared with two parameters a and b.

The function is called using its name and passing two arguments 3 and 4 in one and 2 and 9 in another.
Notice that you can call a function as many times as you want. You can write one function and then call it multiple times with different arguments.

***

### Example 3: Pass Information Into Functions

Functions often need specific information to perform a task. In addition to getting information from a function, you can also send information to a function to change how that function works.

```js
function goToCoffeeShop(drink) {
alert(`Your ${drink} is on the way!`);
}
goToCoffeeShop("Espresso");
```

***

### Example 4: Pass Multiple Arguments to a Function

Functions can accept more than one argument. When calling a function, you're able to pass multiple arguments to the function; each argument gets stored in a separate parameter and used as a discrete variable within the function.

```jsx
function goToCoffeeShop(drink, pastry) {
alert(`Your ${drink} and ${pastry} is on the way!`);
}
goToCoffeeShop("Espresso", "croissant");
```

***

### Example 5: Sum of Two Numbers
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

Output

```js
Enter first number: 3.4
Enter second number: 4
The sum is 7.4
```

In the above program, the sum of the numbers is returned by the function using the return statement. And that value is stored in the result variable.

***

### Benefits of Using a Function

• Function makes the code reusable. You can declare it once and use it multiple times.
• Function makes the program easier as each small task is divided into a function.
• Function increases readability.