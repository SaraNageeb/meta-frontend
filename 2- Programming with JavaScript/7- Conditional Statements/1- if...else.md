# JavaScript if...else Statement
In computer programming, there may arise situations where you have to run a block of code among more than one alternatives. For example, assigning grades A, B or C based on marks obtained by a student.

In such situations, you can use the JavaScript ```if...else``` statement to create a program that can make decisions.

***

In JavaScript, there are three forms of the if...else statement.

* **if** statement
* **if...else** statement
* **if...else if...else** statement

***

## JavaScript if Statement
The syntax of the ```if``` statement is:

```js
if (condition) {
    // the body of if
}
```

The ```if``` statement evaluates the condition inside the parenthesis ```()```.

1. If the condition is evaluated to ```true```, the code inside the body of ```if``` is executed.
2. If the condition is evaluated to ```false```, the code inside the body of ```if``` is skipped.

![image](https://user-images.githubusercontent.com/25232528/183071920-b8b3a1d0-f444-4008-852c-ea175497d363.png)

### Example 1: if Statement

```js
// check if the number is positive

const number = prompt("Enter a number: ");

// check if number is greater than 0
if (number > 0) {
 // the body of the if statement
  console.log("The number is positive");
}

console.log("The if statement is easy");
```

**Output 1**

```
Enter a number: 2
The number is positive
The if statement is easy
```

Suppose the user entered 2. In this case, the condition ```number > 0``` evaluates to ```true```. And, the body of the ```if``` statement is executed.

**Output 2**

```
Enter a number: -1
The if statement is easy
```

Suppose the user entered -1. In this case, the condition ```number > 0``` evaluates to ```false```. Hence, the body of the ```if``` statement is skipped.

Since ```console.log("The if statement is easy");``` is outside the body of the ```if``` statement, it is always executed.

***

## JavaScript if...else statement
An ```if``` statement can have an optional ```else``` clause. The syntax of the ```if...else``` statement is:

```js
if (condition) {
    // block of code if condition is true
} else {
   // block of code if condition is false
}
```

The ```if..else``` statement evaluates the condition inside the parenthesis.

If the condition is evaluated to ```true```,

1. the code inside the body of ```if``` is executed
2. the code inside the body of ```else``` is skipped from execution

<br>

If the condition is evaluated to ```false```,
1. the code inside the body of ```else``` is executed
2. the code inside the body of ```if``` is skipped from execution

![image](https://user-images.githubusercontent.com/25232528/183072072-0a4bc78a-09a3-42c8-a2a0-e120b5af9aed.png)


### Example 2: if…else Statement

```js
// check if the number is positive or negative/zero

const number = prompt("Enter a number: ");

// check if number is greater than 0
if (number > 0) {
  console.log("The number is positive");
}
// if number is not greater than 0
else {
  console.log("The number is either a negative number or 0");
}

console.log("The if...else statement is easy");
```

**Output 1**

```
Enter a number: 2
The number is positive
The if...else statement is easy
```

Suppose the user entered 2. In this case, the condition ```number > 0``` evaluates to ```true```. Hence, the body of the ```if``` statement is executed and the body of the ```else``` statement is skipped.

**Output 2**

```
Enter a number: -1
The number is either a negative number or 0
The if...else statement is easy
```

Suppose the user entered -1. In this case, the condition ```number > 0``` evaluates to ```false```. Hence, the body of the ```else``` statement is executed and the body of the ```if``` statement is skipped.

***

## JavaScript if...else if statement
The ```if...else``` statement is used to execute a block of code among two alternatives. However, if you need to make a choice between more than two alternatives, ```if...else if...else``` can be used.

The syntax of the ```if...else if...else``` statement is:

```js
if (condition1) {
    // code block 1
} else if (condition2){
    // code block 2
} else {
    // code block 3
}
```

* If condition1 evaluates to ```true```, the code block 1 is executed.
* If condition1 evaluates to ```false```, then condition2 is evaluated.
* If the condition2 is ```true```, the code block 2 is executed.
* If the condition2 is ```false```, the code block 3 is executed.

![image](https://user-images.githubusercontent.com/25232528/183069671-c9fd8130-393d-4425-ac0a-93bbff1861c3.png)

### Example 3: if...else if Statement

```js
// check if the number if positive, negative or zero
const number = prompt("Enter a number: ");


// check if number is greater than 0
if (number > 0) {
    console.log("The number is positive");
}
// check if number is 0
else if (number == 0) {
  console.log("The number is 0");
}
// if number is neither greater than 0, nor zero
else {
    console.log("The number is negative");
}

console.log("The if...else if...else statement is easy");
```

**Output**

```
Enter a number: 0
The number is 0
The if...else if...else statement is easy
```

Suppose the user entered 0, then the first test condition ```number > 0``` evaluates to ```false```. Then, the second test condition ```number == 0``` evaluates to ```true``` and its corresponding block is executed.

***
