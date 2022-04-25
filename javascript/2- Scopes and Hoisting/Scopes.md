# What is Scope?
Scope determines the accessibility (visibility) of variables.

JavaScript has 4 types of scope:

* Global scope
* Function scope
* Local scope
* Block scope
* Lexical scope

***

### Global Scope
Variables defined outside any function or block have global scope. Variables in the global scope can be accessed from everywhere on the application.

```js
//global scope
var fruit = 'apple'
console.log(fruit);        //apple

function getFruit(){
    console.log(fruit);    //fruit is accessible here
}

getFruit();                //apple
```

***

### Function scope
When a variable is declared inside a function, it is only accessible within that function and cannot be used outside that function.


***

### Local Scope
The variables that you declare inside a function are local to the function. They are called local variables. For example:

***

### Block Scope
A block scope is the area within if, switch conditions or for and while loops. Generally speaking, whenever you see {curly brackets}, it is a block. In ES6, const and let keywords allow developers to declare variables in the block scope, which means those variables exist only within the corresponding block.

***

### Lexical Scope

***
