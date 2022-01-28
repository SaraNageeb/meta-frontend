# JavaScript while Loop
The syntax of the while loop is:

```js
while (condition) {
    // body of loop
}
```

Here:

1. A while loop evaluates the condition inside the parenthesis ().

2. If the condition evaluates to true, the code inside the while loop is executed.

3. The condition is evaluated again.

4. This process continues until the condition is false.

5. When the condition evaluates to false, the loop stops.

![while Loop][while Loop]

[while Loop]:https://cdn.programiz.com/sites/tutorial2program/files/javascript-while-loop.png

***

### Example 1: Display Numbers from 1 to 5

```js
// program to display numbers from 1 to 5
// initialize the variable
let i = 1, n = 5;

// while loop from i = 1 to 5
while (i <= n) {
    console.log(i);
    i += 1;
}
```

```
Output

1
2
3
4
5
```

Here is how this program works.

| Iteration  | Variable  | Condition: i <= n	  | Action  |
|---|---|---|---|
|1st| ```i = 1``` <br> ```n = 5``` | true  | 1 is printed. i is increased to 2.|
|2nd| ```i = 2``` <br> ```n = 5``` | true  | 2 is printed. i is increased to 3.|
|3rd| ```i = 3``` <br> ```n = 5``` | true  | 3 is printed. i is increased to 4.|
|4th| ```i = 4``` <br> ```n = 5``` | true  | 4 is printed. i is increased to 5.|
|5th| ```i = 5``` <br> ```n = 5``` | true  | 5 is printed. i is increased to 6.|
|6th| ```i = 6``` <br> ```n = 5``` | false  | The loop is terminated.|