# JavaScript continue Statement
The continue statement is used to skip the current iteration of the loop and the control flow of the program goes to the next iteration.

The syntax of the continue statement is:

```js
continue [label];
```

**Note: label is optional and rarely used.**

***

### continue with for Loop
In a for loop, continue skips the current iteration and control flow jumps to the updateExpression.

***

### Example 1: Print the Value of i

```js
// program to print the value of i
for (let i = 1; i <= 5; i++) {

    // condition to continue    
    if (i == 3) {
        continue;
    }

    console.log(i);
}
```

```
Output

1
2
4
5
```

In the above program, for loop is used to print the value of i in each iteration.

Notice the continue statement inside the loop.

```js
if(i == 3) {
    continue;
}
```

This example skips the value of 3:

*  When i is equal to 3, the continue statement skips the third iteration.
<br>
* Then, i becomes 4 and the test condition and continue statement is evaluated again.
<br>
* Hence, 4 and 5 are printed in the next two iterations.
<br>


***

### Summary

* Use the JavaScript continue statement to skip the current iteration of a loop and continue the next one.

