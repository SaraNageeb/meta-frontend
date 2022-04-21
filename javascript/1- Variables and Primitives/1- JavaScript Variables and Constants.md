# JavaScript Variables
In this tutorial, you will learn about JavaScript variables and constants, and also how to initialize and use them with the help of examples.

In programming, a variable is a container (storage area) to hold data. For example,

```js
let movie = 'The Batman';
```
Here, movie is a variable. It's storing 'The Batman

***
### JavaScript Initialize Variables
We use the assignment operator = to assign a value to a variable.

```js
let x;
x = 5;
```

Here, 5 is assigned to variable x.

You can also initialize variables during its declaration.

```js
let x = 5;
let y = 6;
```

In JavaScript, it's possible to declare variables in a single statement.

```js
let x = 5, y = 6, z = 7;
```

If you use a variable without initializing it, it will have an undefined value.

```js
let x; // x is the name of the variable

console.log(x); // undefined
```

Here x is the variable name and since it does not contain any value, it will be undefined.

***

### Change the Value of Variables
It's possible to change the value stored in the variable. For example,

```js
// 5 is assigned to variable x
let x = 5; 
console.log(x); // 5
```
```
// vaue of variable x is changed
x = 3; 
console.log(x); // 3
```

The value of a variable may vary. Hence, the name variable.

***

### Rules for Naming JavaScript Variables
The rules for naming variables are:

1. Variable names must start with either a letter, an underscore _, or the dollar sign $. For example,

```js
//valid
let a = 'hello';
let _a = 'hello';
let $a = 'hello';
```

2. Variable names cannot start with numbers. For example,

```js
//invalid
Let 1a = 'hello'; // this gives an error
```

3. JavaScript is case-sensitive. So y and Y are different variables. For example,

```js
let y = "hi";
let Y = 5;

console.log(y); // hi
console.log(Y); // 5
```

4. Keywords cannot be used as variable names. For example,

```js
//invalid
let new = 5; // Error! new is a keyword.
```

***

### Undefined vs. undeclared variables
It’s important to distinguish between undefined and undeclared variables.

An undefined variable is a variable that has been declared but has not been initialized with a value. For example:

```js
let message;
console.log(message); // undefined
```

In this example, the message variable is declared but not initialized. Therefore, the message variable is undefined.

In contrast, an undeclared variable is a variable that has not been declared. For example:

```js
console.log(counter);
```
```
Output:

console.log(counter);

            ^
ReferenceError: counter is not defined
```
Code language: JavaScript (javascript)
In this example, the counter variable has not been declared. Hence, accessing it causes a ReferenceError.

***

### Difference between var, let and const
Both var,let and const are used to declare variables. However, there are some differences between them:

var declarations are globally scoped or function scoped while let and const are block scoped. 

* var variables can be updated and re-declared within its scope; 

* let variables can be updated but not re-declared; 

* const variables can neither be updated or re-declared. 

![Variables][variables]

[variables]:https://i.imgur.com/HYO9xE2.png


* They are all hoisted to the top of their scope. But while `var` variables are initialized with `undefined`, `let` and `const` variables are not initialized.

* While `var` and `let` can be declared without being initialized, `const` must be initialized during declaration.

***
