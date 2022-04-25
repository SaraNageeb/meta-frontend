# What is Scope?
Scope determines the accessibility (visibility) of variables.

JavaScript has 5 types of scope:

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

```js
function foo(){
    // function scope
    let fruit ='apple'; // fruit is scoped to foo function
    console.log('inside function: ',fruit);
}

foo();                    // inside function: apple
console.log(fruit);       // error: fruit is not defined, fruit does not exist outside the function foo.
```

***

### Local Scope
Local Scope
Variables declared inside the functions become Local to the function and are considered in the corresponding local scope. Every Functions has its own scope. Same variable can be used in different functions because they are bound to the respective functions and are not mutual visible.

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

Local scope can be divided into function scope and block scope. The concept of block scope is introduced in ECMA script 6 (ES6) together with the new ways to declare variables -- const and let.

***

### Block Scope
A block scope is the area within if, switch conditions or for and while loops. Generally speaking, whenever you see {curly brackets}, it is a block. In ES6, const and let keywords allow developers to declare variables in the block scope, which means those variables exist only within the corresponding block.

```js
function foo() {
  if (true) {
    var fruit1 = 'apple'; //exist in function scope
    const fruit2 = 'banana'; //exist in block scope
    let fruit3 = 'strawberry'; //exist in block scope
    
    console.log(fruit1);  // apple
    console.log(fruit2);  // banana
    console.log(fruit3);  // strawberry
  }
  console.log(fruit1); // apple
  console.log(fruit2); //error: fruit2 is not defined
  console.log(fruit3); //error: fruit3 is not defined
}

foo();
//result:
//apple
//banana
//strawberry

//error: fruit2 is not defined
//error: fruit3 is not defined
```

***

### Lexical Scope
Another point to mention is the lexical scope. Lexical scope means the children scope have the access to the variables defined in the parent scope. The children functions are lexically bound to the execution context of their parents.

```js
function foo1(){
    var fruit1 = 'apple';        
    const fruit2 = 'banana';     
    let fruit3 = 'strawberry';
    function foo2(){
        console.log(fruit1);
        console.log(fruit2);
        console.log(fruit3);
    }
    foo2();
}

foo1();

//result:
//apple
//banana
//strawberry
```

***

# JavaScript Hoisting
Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration. For example,

```js
// using test before declaring
console.log(test);   // undefined
var test;
```

The above program works and the output will be undefined. The above program behaves as

```js
// using test before declaring
var test;
console.log(test); // undefined
```

Since the variable test is only declared and has no value, undefined value is assigned to it.

***

# Variable Hoisting
In terms of variables and constants, keyword var is hoisted and let and const does not allow hoisting.

For example,

```js
// program to display value
a = 5;
console.log(a);
var a; // 5
```

In the above example, variable a is used before declaring it. And the program works and displays the output 5. The program behaves as:

```js
// program to display value
var a;
a = 5;
console.log(a); // 5
```
