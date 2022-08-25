# First-Class Citizens in Javascript
JavaScript functions are first-class citizens. This means that you can store functions in variables, pass them to other functions as arguments, and return them from other functions as values.

***

### Storing functions in variables
Functions are first-class citizens in JavaScript. In other words, you can treat functions like values of other types.

The following defines the add() function and assigns the function name to the variable sum:

```js
function add(a, b) {
    return a + b;
}

let sum = add;
```

In the assignment statement, we don’t include the opening and closing parentheses at the end of the add identifier. We also don’t execute the function but reference the function.

***

### Passing a function to another function

Because functions are values, you can pass a function as an argument into another function.

The following declares the average() function that takes three arguments. The third argument is a function:

```js
function average(a, b, fn) {
    return fn(a, b) / 2;
}
```

***

### Returning functions from functions
Since functions are values, you can return a function from another function.

The following compareBy() function returns a function that compares two objects by a property:

```js
function compareBy(propertyName) {
  return function (a, b) {
    let x = a[propertyName],
      y = b[propertyName];

    if (x > y) {
      return 1;
    } else if (x < y) {
      return -1;
    } else {
      return 0;
    }
  };
}
```

***