# Temporal Dead Zone
In ES6, the ''hoisting'' of let and const are different from variables and functions.

When a variable is declared using let or const, it has what is called a Temporal Dead Zone (TDZ), a name that describes the behavior that, in its scope, it is inaccessible until execution reaches its declaration.

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
    // novo escopo, O TDZ do 'valor' começa

    // Ao tentar acessar a variavel, tomamos ReferenceError,
    // pois neste momento ela é uma variavel que nao foi inicializada

    console.log(value); // ReferenceError

    let value; // TDZ termina e 'valor' é definida com 'undefined'
    console.log(value); // undefined

    value = 1;
    console.log(value); // 1
}

console.log(value); // 0
```
