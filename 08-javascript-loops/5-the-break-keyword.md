# Break Statements
The break statement is used to terminate the loop immediately when it is encountered.

The syntax of the break statement is:

```js
break
```

***

### Working of JavaScript break Statement

![Break](/img/javascript-break-statement.png)

***

### Example 1: break with for Loop

```js
// program to print the value of i
for (let i = 1; i <= 5; i++) {
    // break condition     
    if (i == 3) {
        break;
    }
    console.log(i);
}
```

Output

```js
1
2
```
In the above program, the for loop is used to print the value of i in each iteration. The break statement is used as:

```js
if(i == 3) {
    break;
}
```

This means, when i is equal to 3, the break statement terminates the loop. Hence, the output doesn't include values greater than or equal to 3.

***

### Example 2: break with while Loop

```js
// program to find the sum of positive numbers
// if the user enters a negative numbers, break ends the loop
// the negative number entered is not added to sum

let sum = 0, number;

while(true) {

    // take input again if the number is positive
    number = parseInt(prompt('Enter a number: '));

    // break condition
    if(number < 0) {
        break;
    }

    // add all positive numbers
    sum += number;

}

// display the sum
console.log(`The sum is ${sum}.`);
```

Output

```js
Enter a number: 1
Enter a number: 2
Enter a number: 3
Enter a number: -5
The sum is 6. 
```
In the above program, the user enters a number. The while loop is used to print the total sum of numbers entered by the user.

Here the break statement is used as:

```js
if(number < 0) {
    break;
}
```

When the user enters a negative number, here -5, the break statement terminates the loop and the control flow of the program goes outside the loop.

Thus, the while loop continues until the user enters a negative number.

***

### Example 3: Break in switch statements
The following code has a break statement that terminates the switch statement when a case is matched and the corresponding code has ran
```js
const food = "sushi";

switch (food) {
  case "sushi":
    console.log("Sushi is originally from Japan.");
    break;
  case "pizza":
    console.log("Pizza is originally from Italy.");
    break;
  default:
    console.log("I have never heard of that dish.");
    break;
}
```

***