# JavaScript break Statement
The break statement is used to terminate the loop immediately when it is encountered.

The syntax of the break statement is:

```js
break
```
***

### Working of JavaScript break Statement

![Break][break]

[break]:https://cdn.programiz.com/sites/tutorial2program/files/javascript-break-statement.png


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

### Example 2: Break in switch statements
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