# Local Scope

Variables declared inside the functions become Local to the function and are considered in the corresponding local scope. 

Every Functions has its own scope. Same variable can be used in different functions because they are bound to the respective functions and are not mutual visible.

```js
//global scope
function foo1(){
    //local scope 1
    function foo2(){
        //local scope 2
    }
}

//global scope
function foo3(){
    //local scope 3
}

//global scope
```

Local scope can be divided into function scope and block scope. 
The concept of block scope is introduced in ECMA script 6 (ES6) together with the new ways to declare variables -- const and let.

***