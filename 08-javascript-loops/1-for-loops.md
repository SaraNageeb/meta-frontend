# JavaScript For Loop – How to Loop Through an Array in JS

A for loop repeats until a specified condition evaluates to false. The JavaScript for loop is similar to the Java and C for loop.

Here’s a visualization of a basic for loop. The blue dots are the statements that will run for a predetermined number of times. (5 times in this case.)

![For Loop](/img/javascript-forloop.png)

A for statement looks as follows:

```js
for ([initialExpression]; [conditionExpression]; [incrementExpression])
  statement
```

This type of loop starts with the for keyword, followed by a set of parentheses. Inside them, there are three optional expression statements separated by a semicolon,;. Lastly, there is a set of curly braces, {}, that enclose the code block statement to be executed.

Here's an example:

```js
for (let i = 0; i < 10; i++) {
  console.log('Counting numbers');
  // runs and prints "Counting numbers" 10 times
  // values of i range from 0 to 9 
  }
```

In more detail, when a for loop is executed:

1. If there is any initial expression, it is run first and executed only one time before any code in the block is run and before the loop starts. In this step there is an initialization of one or more counters and declaration of one or more variables used in the loop, like let i =0. If there is more than one variable, they are separated by commas.

2. Next is the definition of the condition expression that has to be met in order for the loop to run, i < 10. As mentioned earlier, the instruction statements in the code block will run only when this condition evaluates to true. If the value is false the loop stops running. If there is no condition it is always true which creates an infinite loop.

3. Then, the instruction statement inside the block with the curly braces, {..}, is executed. There can be more than one, on multiple lines.

4. After each time the code block has been executed, there can be an action for the initialized expression that takes place at the end, like an increment statement ( i++) that updates the initial expression.

5. After that, the condition is checked again and if it evaluates to true the process is repeated.

![For Loop](/img/javascript-for-loop1.png)

***