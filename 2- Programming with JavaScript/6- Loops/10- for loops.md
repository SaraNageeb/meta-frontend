# JavaScript for loop

In programming, loops are used to repeat a block of code.

For example, if you want to show a message 100 times, then you can use a loop. It's just a simple example; you can achieve much more with loops.

***

## JavaScript for loop
The syntax of the for loop is:

```js
for (initialExpression; condition; updateExpression) {
    // for loop body
}
```

1. The initialExpression initializes and/or declares variables and executes only once.

2. The condition is evaluated.
* If the condition is ```false```, the ```for``` loop is terminated.
* If the condition is ```true```, the block of code inside of the ```for``` loop is executed.

3. The updateExpression updates the value of initialExpression when the condition is ```true```.

4. The condition is evaluated again. This process continues until the condition is ```false```.

***

### Example 1: Display a Text Five Times

```js
// program to display text 5 times
const n = 5;

// looping from i = 1 to 5
for (let i = 1; i <= n; i++) {
    console.log(`I love JavaScript.`);
}
```

```
I love JavaScript.
I love JavaScript.
I love JavaScript.
I love JavaScript.
I love JavaScript.
```

Here is how this program works.

| Iteration | Variable    | Condition: i <= n | Action                                              |
|-----------|-------------|-------------------|-----------------------------------------------------|
| 1st       | i = 1 n = 5 | true              | I love JavaScript. is printed. i is increased to 2. |
| 2nd       | i = 2 n = 5 | true              | I love JavaScript. is printed. i is increased to 3. |
| 3rd       | i = 3 n = 5 | true              | I love JavaScript. is printed. i is increased to 4. |
| 4th       | i = 4 n = 5 | true              | I love JavaScript. is printed. i is increased to 5. |
| 5th       | i = 5 n = 5 | true              | I love JavaScript. is printed. i is increased to 6. |
| 6th       | i = 6 n = 5 | false             | The loop is terminated.                             |


***

### Example 2: Display Numbers from 1 to 5

```js
// program to display numbers from 1 to 5
const n = 5;

// looping from i = 1 to 5
// in each iteration, i is increased by 1
for (let i = 1; i <= n; i++) {
    console.log(i);     // printing the value of i
}
```

```
1
2
3
4
5
```

Here is how this program works.


| Iteration | Variable    | Condition: i <= n | Action                             |
|-----------|-------------|-------------------|------------------------------------|
| 1st       | i = 1 n = 5 | true              | 1 is printed. i is increased to 2. |
| 2nd       | i = 2 n = 5 | true              | 2 is printed. i is increased to 3. |
| 3rd       | i = 3 n = 5 | true              | 3 is printed. i is increased to 4. |
| 4th       | i = 4 n = 5 | true              | 4 is printed. i is increased to 5. |
| 5th       | i = 5 n = 5 | true              | 5 is printed. i is increased to 6. |
| 6th       | i = 6 n = 5 | false             | The loop is terminated.            |

***
