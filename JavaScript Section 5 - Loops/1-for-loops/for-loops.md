# JavaScript for loop
The syntax of the for loop is:

```js
for (initialExpression; condition; updateExpression) {
    // for loop body
}
```

Here:

1. The initialExpression initializes and/or declares variables and executes only once.

2. The condition is evaluated.
* If the condition is false, the for loop is terminated.
* If the condition is true, the block of code inside of the for loop is executed.

3. The updateExpression updates the value of initialExpression when the condition is true.

4. The condition is evaluated again. This process continues until the condition is false.

***


![For Loop][for loop]

[for loop]:https://cdn.programiz.com/sites/tutorial2program/files/javascript-for-loop.png

In the for loop, the three expressions are optional. The following shows the for loop without any expressions:

```js
for ( ; ; ) {
   // statements
}
```

***

### Display a Text Five Times

```js
// program to display text 5 times
const n = 5;

// looping from i = 1 to 5
for (let i = 1; i <= n; i++) {
    console.log(`I love JavaScript.`);
}
```

```
Output

I love JavaScript.
I love JavaScript.
I love JavaScript.
I love JavaScript.
I love JavaScript.
```
Here is how this program works.

| Iteration  | Variable  | Condition: i <= n	  | Action  |
|---|---|---|---|
|1st| ```i = 1``` <br> ```n = 5``` | true  | I love JavaScript. is printed.i is increased to 2.|
|2nd| ```i = 2``` <br> ```n = 5``` | true  | I love JavaScript. is printed.i is increased to 3.|
|3rd| ```i = 3``` <br> ```n = 5``` | true  | I love JavaScript. is printed.i is increased to 4.|
|4th| ```i = 4``` <br> ```n = 5``` | true  | I love JavaScript. is printed.i is increased to 5.|
|5th| ```i = 5``` <br> ```n = 5``` | true  | I love JavaScript. is printed.i is increased to 6.|
|6th| ```i = 6``` <br> ```n = 5``` | false  | The loop is terminated.|

***



### Summary
Use the JavaScript for statement to create a loop that execute a block based using various options.
