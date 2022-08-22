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

***

### JavaScript Comparison Operators
Comparison operators compare two values and return a ```boolean``` value, either true or false. For example,

```js
const a = 3, b = 2;
console.log(a > b); // true 
```

Here, the comparison operator ```>``` is used to compare whether ```a``` is greater than ```b```.

| Operator | Description                                                                                   | Example |
|----------|-----------------------------------------------------------------------------------------------|---------|
| ```==```       | Equal to: returns true if the operands are equal                                              | ```x == y```  |
| ```!=```       | Not equal to: returns true if the operands are not equal                                      | ```x != y```  |
| ```===```      | Strict equal to: true if the operands are equal and of the same type                          | ```x === y``` |
| ```!==```      | Strict not equal to: true if the operands are equal but of different type or not equal at all | ```x !== y``` |
| ```>```        | Greater than: true if left operand is greater than the right operand                          | ```x > y```   |
| ```>=```       | Greater than or equal to: true if left operand is greater than or equal to the right operand  | ```x >= y```  |
| ```<```        | Less than: true if the left operand is less than the right operand                            | ```x < y```   |
| ```<=```       | Less than or equal to: true if the left operand is less than or equal to the right operand    | ```x <= y```  |


#### Example 2: Comparison operators in JavaScript

```js
// equal operator
console.log(2 == 2); // true
console.log(2 == '2'); // true

// not equal operator
console.log(3 != 2); // true
console.log('hello' != 'Hello'); // true

// strict equal operator
console.log(2 === 2); // true
console.log(2 === '2'); // false

// strict not equal operator
console.log(2 !== '2'); // true
console.log(2 !== 2); // false
```

***

### JavaScript Logical Operators
Logical operators perform logical operations and return a boolean value, either ```true``` or ```false```. For example,

Here, ```&&``` is the logical operator ```AND```. Since both ```x < 6``` and ```y < 5``` are ```true```, the result is ```true```.


| Operator | Description                                                                         | Example  |
|----------|-------------------------------------------------------------------------------------|----------|
| &&       | Logical AND: true if both the operands are true, else returns false                 | x && y   |
| \|\|     | Logical OR: true if either of the operands is true; returns false if both are false | x \|\| y |
| !        | Logical NOT: true if the operand is false and vice-versa.                           | !x       |


#### Example 3: Logical Operators in JavaScript

```js
// logical AND
console.log(true && true); // true
console.log(true && false); // false

// logical OR
console.log(true || false); // true

// logical NOT
console.log(!true); // false
```

***

### JavaScript Ternary Operator
A ternary operator can be used to replace an if..else statement in certain situations.

A ternary operator evaluates a condition and executes a block of code based on the condition.

Its syntax is:

```js
condition ? expression1 : expression2
```

The ternary operator evaluates the test condition.

* If the condition is ```true```, expression1 is executed.
* If the condition is ```false```, expression2 is executed.

The ternary operator takes three operands, hence, the name ternary operator. It is also known as a conditional operator.

Let's write a program to determine if a student passed or failed in the exam based on marks obtained.

#### Example 4: JavaScript Ternary Operator

```js
// program to check pass or fail

let marks = prompt('Enter your marks :');

// check the condition
let result = (marks >= 40) ? 'pass' : 'fail';

console.log(`You ${result} the exam.`);
```

**Output 1**

```js
Enter your marks: 78
You pass the exam.
```

Suppose the user enters ```78```. Then the condition marks ```>= 40``` is checked which evaluates to true. So the first expression pass is assigned to the result variable.

**Output 2**

```js
Enter your marks: 35
You fail the exam.
```

Suppose the use enters ```35```. Then the condition marks ```>= 40``` evaluates to false. So the second expression fail is assigned to the result variable.

<br>

In JavaScript, a ternary operator can be used to replace certain types of if..else statements. For example,

You can replace this code

```js
// check the age to determine the eligibility to vote
let age = 15;
let result;

if (age >= 18) {
      result = "You are eligible to vote.";
} else {
      result = "You are not eligible to vote yet.";
}

console.log(result);
```

with

```js
// ternary operator to check the eligibility to vote
let age = 15;
let result =
    (age >= 18) ? "You are eligible to vote." : "You are not eligible to vote yet";
console.log(result);
```

The output of both programs will be the same.

Output

```
You are not eligible to vote yet.
```
***
