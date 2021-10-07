# The logical OR (||) operator and if...else statements in JavaScript
In the logical OR (||) operator, if one or both of the conditions are true, then the code inside the if statement will execute.

In this example, even though the isSale variable is set to false, the code inside the if block will still execute because the boyfriendIsPaying variable is set to true.

```js
const boyfriendIsPaying = true;
const isSale = false;

if (boyfriendIsPaying || isSale) {
  console.log("Jesse will go shopping.");
} else {
  console.log("Jesse will not go shopping.");
}
// expected result: Jesse will go shopping
```

If I were to change the value of the boyfriendIsPaying variable to false, then the else block would execute because both conditions are false.

```js
const boyfriendIsPaying = false;
const isSale = false;

if (boyfriendIsPaying || isSale) {
  console.log("Jesse will go shopping.");
} else {
  console.log("Jesse will not go shopping.");
}
// expected result: Jesse will not go shopping
```

***