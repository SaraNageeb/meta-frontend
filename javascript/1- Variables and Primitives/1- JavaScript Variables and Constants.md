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

```
let x = 5;
let y = 6;
```

In JavaScript, it's possible to declare variables in a single statement.

```
let x = 5, y = 6, z = 7;
```

***

### Difference between var, let and const
Both var,let and const are used to declare variables. However, there are some differences between them:

var declarations are globally scoped or function scoped while let and const are block scoped. 

* var variables can be updated and re-declared within its scope; 

* let variables can be updated but not re-declared; 

* const variables can neither be updated nor re-declared. 

![Variables][variables]

[variables]:https://i.imgur.com/HYO9xE2.png


* They are all hoisted to the top of their scope. But while `var` variables are initialized with `undefined`, `let` and `const` variables are not initialized.

* While `var` and `let` can be declared without being initialized, `const` must be initialized during declaration.

***
