# The logical NOT (!) operator and if...else statements in JavaScript
The logical NOT (!) operator will take something that is true and make it false. It will also take something that is false and make it true.

We can modify the example from earlier to use the ! operator to make the boyfriendIsPaying variable  false. Since both conditions are false, the else block would be executed.

```js
const boyfriendIsPaying = true;
const isSale = false;

if (!boyfriendIsPaying || isSale) {
  console.log("Jesse will go shopping.");
} else {
  console.log("Jesse will not go shopping.");
}
// expected result: Jesse will not go shopping.
```

***