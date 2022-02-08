# Difference between var, let and const

var declarations are globally scoped or function scoped while let and const are block scoped. 

* var variables can be updated and re-declared within its scope; 

* let variables can be updated but not re-declared; 

* const variables can neither be updated nor re-declared. 

![Variables][variables]

[variables]:https://i.imgur.com/HYO9xE2.png

```js
    // var is function scope.

    // let and const are block scope.Function scope is within the function.

    var age = 100; // function scope
      if (age > 12){
        let dogYears = age * 7; // block scope
        console.log(`You are ${dogYears} dog years old!`);
      }
```

* var declarations are globally scoped or function scoped while let and `const are block scoped.

* `var` variables can be updated and re-declared within its scope; `let` variables can be updated but not re-declared; `const` variables can neither be updated nor re-declared.

* They are all hoisted to the top of their scope. But while `var` variables are initialized with `undefined`, `let` and `const` variables are not initialized.
* While `var` and `let` can be declared without being initialized, `const` must be initialized during declaration.

***