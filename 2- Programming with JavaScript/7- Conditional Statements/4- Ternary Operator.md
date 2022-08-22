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
