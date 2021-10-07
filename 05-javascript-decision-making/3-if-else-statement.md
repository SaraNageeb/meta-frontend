# What is an if...else statement in JavaScript?
The if...else is a type of conditional statement that will execute a block of code when the condition in the if statement is truthy. If the condition is falsy, then the else block will be executed.

Truthy and falsy values are converted to true or false in  if statements. 
List of falsy values: ```false``` ```0 (zero)``` ```-0 (negative zero)``` ```0n (BigInt zero)``` ```(empty string)``` ```null``` ```undefined``` ```NaN (not a number)```

```js
if (condition is true) {
   // code is executed
} else {
   // code is executed
}
```

***

### Examples of if...else statements in JavaScript

In this example, the condition for the if statement is true so the message printed to the console would be "Nick is an adult."

```js
const age = 18;

if (age >= 18) {
  console.log("Nick is an adult.");
} else {
  console.log("Nick is a child.");
}
```

But if I change the age variable to be less than 18, then the condition would be false and the code would execute the else block instead.

```js
const age = 12;

if (age >= 18) {
  console.log("Nick is an adult.");
} else {
  console.log("Nick is a child.");
}
```

***

### Examples of multiple conditions (if...else if...else statements) in JavaScript
There will be times where you want to test multiple conditions. That is where the else if block comes in.

```js
if (condition 1 is true) {
   // code is executed
} else if (condition 2 is true) {
  // code is executed
} else {
   // code is executed
}
```

When the if statement is false, the computer will move onto the else if statement. If that is also false, then it will move onto the else block.

In this example, the else if block would be executed because Alice is between the ages of 18 and 21.

```js
const age = 18;

if (age < 18) {
  console.log("Alice is under 18 years old.");
} else if (age >= 18 && age <= 21) {
  console.log("Alice is between the ages of 18 and 21.");
} else {
  console.log("Alice is over 21 years old.");
}
```

***