# Temporal Dead Zone
In ES6, the ''hoisting'' of let and const are different from variables and functions.

When a variable is declared using let or const, it has what is called a ```Temporal Dead Zone (TDZ)```, a name that describes the behavior that, in its scope, it is inaccessible until execution reaches its declaration.

This behavior is visible in the code snippet below:

* we create a variable ```value``` outside the scope of the if block;

* we try to access the variable ```value```

* we define the variable ```value```;

* we assign the value 1 to the variable ```value```

* we access the variable ```value```

* we access the variable outside the if block scope

```js
let value = 0;

if(true) {
    // new scope, TDZ of 'value' starts

    // When trying to access the variable, we get ReferenceError,
    // because at this moment the variable has not been initialized

    console.log(value); // ReferenceError

    let value; // TDZ terminates and 'value' is set to 'undefined'
    console.log(value); // undefined

    value = 1;
    console.log(value); // 1
}

console.log(value); // 0
```

This behavior prevents us from having strange results with the values of the variables, which was one of the big headaches when using JavaScript.

***

## Why is the TDZ created when it is?


```js
{
 	// This is the temporal dead zone for the age variable!
	// This is the temporal dead zone for the age variable!
	// This is the temporal dead zone for the age variable!
 	// This is the temporal dead zone for the age variable!
	let age = 25; // Whew, we got there! No more TDZ
	console.log(age);
}
```
**The temporal dead zone captured and catalogued.**

If we add a console.log inside the TDZ you will see this error:

```
VM308:5 Uncaught ReferenceError: Cannot access 'age' before initialization
    at <anonymous>:5:16
```
***
