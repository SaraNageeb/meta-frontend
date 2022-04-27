# Arithmetic Operators
Basic arithmetic often comes in handy when programming.

An operator is a character that performs a task in our code. JavaScript has several built-in arithmetic operators, that allow us to perform mathematical calculations on numbers. These include the following operators and their corresponding symbols:

1. Add: +
2. Subtract: -
3. Multiply: *
4. Divide: /
5. Remainder: %

The first four work how you might guess:

```js
console.log(3 + 4); // Prints 7
console.log(5 - 1); // Prints 4
console.log(4 * 2); // Prints 8
console.log(9 / 3); // Prints 3
```

Note that when we console.log() the computer will evaluate the expression inside the parentheses and print that result to the console. If we wanted to print the characters 3 + 4, we would wrap them in quotes and print them as a string.

```js
console.log(11 % 3); // Prints 2
console.log(12 % 3); // Prints 0
```

The remainder operator, sometimes called modulo, returns the number that remains after the right-hand number divides into the left-hand number as many times as it evenly can: 11 % 3 equals 2 because 3 fits into 11 three times, leaving 2 as the remainder.

***

### The Increment and Decrement Operator
Other mathematical assignment operators include the increment operator (++) and decrement operator (--).

The increment operator will increase the value of the variable by 1. The decrement operator will decrease the value of the variable by 1. 
For example:

```js
let a = 10;
a++;
console.log(a); // Output: 11
```
<br>

```js
let b = 20;
b--;
console.log(b); // Output: 19
```
Just like the previous mathematical assignment operators (+=, -=, *=, /=), the variable’s value is updated and assigned as the new value of that variable.

***

###  Mathematical Assignment Operators
Let’s consider how we can use variables and math operators to calculate new values and assign them to a variable. Check out the example below:

let w = 4;
w = w + 1;
 
console.log(w); // Output: 5
In the example above, we created the variable w with the number 4 assigned to it. The following line, w = w + 1, increases the value of w from 4 to 5.

Another way we could have reassigned w after performing some mathematical operation on it is to use built-in mathematical assignment operators. We could re-write the code above to be:

let w = 4;
w += 1;
 
console.log(w); // Output: 5
In the second example, we used the += assignment operator to reassign w. We’re performing the mathematical operation of the first operator + using the number to the right, then reassigning w to the computed value.

We also have access to other mathematical assignment operators: -=, *=, and /= which work in a similar fashion.

let x = 20;
x -= 5; // Can be written as x = x - 5
console.log(x); // Output: 15
 
let y = 50;
y *= 2; // Can be written as y = y * 2
console.log(y); // Output: 100
 
let z = 8;
z /= 2; // Can be written as z = z / 2
console.log(z); // Output: 4

***
