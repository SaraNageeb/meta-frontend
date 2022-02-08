# If Statement
We often perform a task based on a condition. For example, if the weather is nice today, then we will go outside. If the alarm clock rings, then we’ll shut it off. If we’re tired, then we’ll go to sleep.

In programming, we can also perform a task based on a condition using an if statement:

```js
if (true) {
  console.log('This message will print!'); 
}
// Prints: This message will print!

```

Notice in the example above, we have an if statement. The if statement is composed of:

* The if keyword followed by a set of parentheses () which is followed by a code block, or block statement, indicated by a set of curly braces {}.
<br>
* Inside the parentheses (), a condition is provided that evaluates to true or false.
<br>
* If the condition evaluates to true, the code inside the curly braces {} runs, or executes.
<br>
* If the condition evaluates to false, the block won’t execute.
Let’s make an if statement.

***

```js
let sale = true;
 
if (sale == true) {
  console.log('Time to buy!');
  // Prints: Time to buy!
}
```

```js
let sale = false;
 
if (sale == true) {
  console.log('Time to buy!');
  // Prints: Nothing will print
}
```
