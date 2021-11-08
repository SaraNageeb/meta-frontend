# JavaScript Default Parameters
Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.

**JavaScript Demo: Functions Default**

```js
function multiply(a, b = 3) {
  return a * b;
}

console.log(multiply(5, 2));
// expected output: 10

console.log(multiply(5));
// expected output: 5
```

***

### Example 1

```js
function say(message='Hi') {
    console.log(message);
}

say(); // 'Hi'
say('Hello') // 'Hello'
```

The default value of the message paramater in the say() function is 'Hi'.

In JavaScript, default function parameters allow you to initialize named parameters with default values if no values or undefined are passed into the function.

***

### Arguments vs. Parameters
Sometimes, you can use the term argument and parameter interchangeably. However, by definition, parameters are what you specify in the function declaration whereas the arguments are what you pass to the function.

Consider the following add() function:

```js
function add(x, y) {
   return x + y;
}

add(100,200); 
```

In this example, the x and y are the parameters of the add() function, and the values passed to the add() function 100 and 200 are the arguments.


***

### Setting JavaScript default parameters for a function
In JavaScript, a parameter has a default value of undefined. It means that if you don’t pass the arguments into the function, its parameters will have the default values of undefined.

See the following example:

```js
function say(message) {
    console.log(message);
}

say(); // undefined
```

The say() function takes the message parameter. Because we didn’t pass any argument into the say() function, the value of the message parameter is undefined.

Suppose that you want to give the message parameter a default value 10.

A typical way for achieving this is to test parameter value and assign a default value if it is undefined using a ternary operator:

```js
function say(message) {
    message = typeof message !== 'undefined' ? message : 'Hi';
    console.log(message);
}
say(); // 'Hi'
```

In this example, we didn’t pass any value into the say() function. Therefore, the default value of the message argument is undefined. Inside the function, we reassigned the message variable the Hi string.

ES6 provides you with an easier way to set the default values for the function parameters like this:

```js
function fn(param1=default1, param2=default2,..) {
}
```

In the syntax above, you use the assignment operator (=) and the default value after the parameter name to set a default value for that parameter. For example:

```js
function say(message='Hi') {
    console.log(message);
}

say(); // 'Hi'
say(undefined); // 'Hi'
say('Hello'); // 'Hello'
```

How it works.

1. In the first function call, we didn’t pass any argument into the say() function, therefore message parameter took the default value 'Hi'.

2. In the second function call, we passed the undefined into the say() function, hence the message parameter also took the default value 'Hi'.

3. In the third function call, we passed the 'Hello' string into the say() function, therefore message parameter took the string 'Hello' as the default value.

More Example:

```js
// ==========================================
// AN OLDER WAY OF ADDING DEFAULT PARAM VALUE
// ==========================================

// function rollDie(numSides) {
//     if (numSides === undefined) {
//         numSides = 6
//     }
//     return Math.floor(Math.random() * numSides) + 1
// }

// ============
// THE NEW WAY!
// ============
function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1
}

function greet(person, msg = "Hey there", punc = '!') {
    console.log(`${msg}, ${person}${punc}`)
}
```

***