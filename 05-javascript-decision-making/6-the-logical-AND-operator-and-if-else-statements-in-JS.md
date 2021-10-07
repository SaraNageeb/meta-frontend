# The logical AND (&&) operator and if...else statements in JavaScript
In the logical AND (&&) operator, if both conditions are true, then the if block will be executed. If one or both of the conditions are false, then the else block will be executed.

In this example, since age is greater than 16 and the ownsCar variable is true, the if block will run. The message printed to the console will be "Jerry is old enough to drive and has his own car."

```js
const age = 17;
const ownsCar = true;

if (age >= 16 && ownsCar) {
  console.log("Jerry is old enough to drive and has his own car.");
} else {
  console.log("Jerry does not drive.");
} 
// expected result: Jerry is old enough to drive and has his own car.
```

If I change the age variable to be less than 16, then both conditions are no longer true and the else block would be executed instead.

```js
const age = 13;
const ownsCar = true;

if (age >= 16 && ownsCar) {
  console.log("Jerry is old enough to drive and has his own car.");
} else {
  console.log("Jerry does not drive.");
}
// expected result: Jerry does not drive.
```

***