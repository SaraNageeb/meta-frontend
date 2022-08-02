# JavaScript Operators

**What is an Operator?**

In JavaScript, an operator is a special symbol used to perform operations on operands (values and variables). For example,

```js
2 + 3; // 5
```

Here + is an operator that performs addition, and ```2``` and ```3``` are operands.

***

## JavaScript Operator Types
Here is a list of different operators you will learn in this tutorial.

* Assignment Operators
* Arithmetic Operators
* Comparison Operators
* Logical Operators
* Ternary Operator

***

### JavaScript Assignment Operators
Assignment operators are used to assign values to variables. For example,

```js
const x = 5;
```

Here, the = operator is used to assign value 5 to variable x.

Here's a list of commonly used assignment operators:


| Operator | Name                      | Example              |
|----------|---------------------------|----------------------|
| ```= ```       | Assignment operator       | ```a = 7; // 7```          |
| ```+=```       | Addition assignment       | ```a += 5; // a = a + 5``` |
| ```-=```       | Subtraction Assignment    | ```a -= 2; // a = a - 2``` |
| ```*=```       | Multiplication Assignment | ```a *= 3; // a = a * 3``` |
| ```/=```       | Division Assignment       | ```a /= 2; // a = a / 2``` |
| ```%=```       | Remainder Assignment      | ```a %= 2; // a = a % 2``` |
| ```**=```      | Exponentiation Assignment | ```a **= 2; // a = a**2``` |

**Note:*** The commonly used assignment operator is =. You will understand other assignment operators such as +=, -=, *= etc. once we learn arithmetic operators.

***

### JavaScript Arithmetic Operators
Arithmetic operators are used to perform arithmetic calculations. For example,

```js
const number = 3 + 5; // 8
```

Here, the ```+``` operator is used to add two operands.

| Operator | Name                        | Example    |
|----------|-----------------------------|------------|
| +        | Addition                    | ```x + y```      |
| -        | Subtraction                 | ```x - y```      |
| *        | Multiplication              | ```x * y```      |
| /        | Division                    | ```x / y```      |
| %        | Remainder                   | ```x % y```      |
| ++       | Increment (increments by 1) | ```++x or x++``` |
| --       | Decrement (decrements by 1) | ```--x or x--``` |
| **       | Exponentiation (Power)      | ```x ** y```     |


#### Example 1: Arithmetic operators in JavaScript

```js
let x = 5;
let y = 3;

// addition
console.log('x + y = ', x + y);  // 8

// subtraction
console.log('x - y = ', x - y);  // 2

// multiplication
console.log('x * y = ', x * y);  // 15

// division
console.log('x / y = ', x / y);  // 1.6666666666666667

// remainder
console.log('x % y = ', x % y);   // 2

// increment
console.log('++x = ', ++x); // x is now 6
console.log('x++ = ', x++); // prints 6 and then increased to 7
console.log('x = ', x);     // 7

// decrement
console.log('--x = ', --x); // x is now 6
console.log('x-- = ', x--); // prints 6 and then decreased to 5
console.log('x = ', x);     // 5

//exponentiation
console.log('x ** y =', x ** y);
```
