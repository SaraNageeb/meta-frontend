# Introduction to the JavaScript while loop statement

The JavaScript while statement creates a loop that executes a block of code as long as the test condition evaluates to true.

The following illustrates the syntax of the while statement.


```js
while (expression) {
    // statement
}
```

The while statement evaluates the expression before each iteration of the loop.

If the expression evaluates to true, the while statement executes the statement. If the expression evaluates to false, execution continues with the statement after the while loop.

The while loop evaluates the expression before each iteration, therefore, the while loop is known as a pretest loop. For this reason, it is possible that the statement inside the while loop is never executed.

The following flowchart illustrates the while loop statement:

![While Loop](/img/javascript-while-loop.png)

***

### JavaScript while loop examples
See the following example that uses the while statement:

```js
let count = 1;
while (count < 10) {
    console.log(count);
    count +=2;
}
```

How the script works

First, outside of the loop, the count variable is set to 1.
Second, before the first iteration begins, the while statement checks if count is less than 10 and execute the statements inside the loop body.
Third, in each iteration, the loop increments count by 2 and after 5 iterations, the condition count < 10 is no longer true, so the loop terminates.
The output of the script in the console window is as follows:

```js
1
3
5
7
9
```

***

The following example uses the while loop statement to add 5 random numbers between 0 and 10 to an array:

```js
// create an array of five random number between 1 and 10
let rands = [];
let count = 0;
const size = 5;

while(count < size) {
    rands.push(Math.round(Math.random() * 10));
    count++;
    console.log('The current size of the array is ' + count);
}

console.log(rands);
```

Output:

```js
The current size of the array is 1
The current size of the array is 2
The current size of the array is 3
The current size of the array is 4
The current size of the array is 5

[1, 9, 1, 9, 6]
```
In this example:

* First, declare and initialize an array.

* Second, add a random number between 0 and 10 in each loop iteration inside the while statement. If the value of the count equals the value of the size variable, the loop stops.