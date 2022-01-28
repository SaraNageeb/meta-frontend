# return statement in JavaScript

Every function in JavaScript returns undefined, unless otherwise specified. See the following example:

```js
function say(message) {
    console.log(message);
}

let result = say('Hello');
console.log('Result:', result);
```

Output:

```js
Hello
Result: undefined
```

To specify a return value for a function, you use the the return statement followed by an expression or a value, like this:

```js
return expression;
```

For example, the following add() function returns the sum of the two arguments:

```js
function add(a, b) {
    return a + b;
}
```

The following shows how to call the add() function:

```js
let sum = add(10, 20);
console.log('Sum:', sum);
```

Output:

```js
Sum: 30
```

The following example shows how to use multiple return statements in the function to return different values based on conditions:

```js
function compare(a, b) {
    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1;
    }
    return 0;
}
```

The compare() function compares two values. It returns:

* -1 if the first argument is greater than the second one.
* 1 if the first argument is less than the second one.
* 0 if  the first argument equals the second one.

The function immediately stops executing when the return statement is reached. 