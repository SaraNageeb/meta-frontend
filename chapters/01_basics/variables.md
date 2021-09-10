# Variables

![Variable](/img/variable.png)

In any programming language, we use variables to store information or data. The Data might be any data that is strings, number, boolean etc. As Javascript is Dynamically Typed programming were we don’t specify the type of value to be stored in it.


### Basic Syntax

```js
let someName = value;
```

```js
let year = 1995;
// Make me a variable called "year" and give it the value of 1985

```

### Recall Values

```js
let brazil = 5;
let argentina = 2;

brazil + argentina // 7
```

### Updating or Changing Values
Once a variable has been initialized with a value, you can change (or update) that value by giving it a different value.


Updating by incrementing a value:
```js
let brazil = 5;

// Add 1 to brazil
brazil +1 // 6

brazil; // still 5 

// To actually add 1 to brazil:
brazil = brazil +1;
brazil // 6

```

Changing a value:
```js
// var variables can be re-declared and updated
// This means that we can do this within the same scope and won't get an error.

var favourite_fruit = "Apple";
console.log(favourite_fruit); //Apple

// re-declared
var favourite_fruit = "Pear";
console.log(favourite_fruit); //Pear

// updated
favourite_fruit = "Kiwi";
console.log(favourite_fruit); //Kiwi
```
...

### Variable Naming and Conventions
Here are six rules you must always follow when giving a variable a name:

1. The name must begin with a letter, dollar sign or underscore. It must not start with a number.
2. The name can contain letters, numbers, dollar sign or an underscore.
3. You cannot use **keywords** or **reserved** words**.**
4. All variables are case sensitive, so score and Score would be different variable names.
5. Use a name that describes the kind of information that the variable stores. For example, fisrtName might be used to store a person's name first name, lastName for their last name and age for their age.
6. If your variable name is made up of more than one word, use a capital letter for the first letter of every word after the first word. For example, firstName rather than firstname.
### Using let and const keywords
The let keyword was introduced in ES6 (2015).

**The let keyword allows you to declare a variable with block scope.**

```js
var x = 10;
// Here x is 10
{
  let x = 2;
  // Here x is 2
}
// Here x is 10
```


**Variables defined with let cannot be Redeclared.**

```js
let x = "John Doe";

let x = 0;

// SyntaxError: 'x' has already been declared
```
**let can be updated but not re-declared.**

Just like var,  a variable declared with let can be updated within its scope. Unlike var, a let variable cannot be re-declared within its scope. 

So while this will work:

```jsx
let greeting = "say Hi";
    greeting = "say Hello instead";
```

this will return an error:

```jsx
    let greeting = "say Hi";
    let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared
```

However, if the same variable is defined in different scopes, there will be no error:

```jsx
    let greeting = "say Hi";
    if (true) {
        let greeting = "say Hello instead";
        console.log(greeting); // "say Hello instead"
    }
    console.log(greeting); // "say Hi"

```

Why is there no error? This is because both instances are treated as different variables since they have different scopes.

This fact makes let a better choice than var. When using let, you don't have to bother if you have used a name for a variable before as a variable exists only within its scope.


**Variables defined with let have Block Scope.**
A block lives in curly braces, anything within curly braces is a block. 
So a variable declared in a block with let is only available for use within that block. Let me explain this with an example:

```js
let greeting = "say Hi";
   let times = 4;

   if (times > 3) {
        let hello = "say Hello instead";
        console.log(hello);// "say Hello instead"
    }
   console.log(hello) // hello is declared inside the block scoped, so it does not exist outside
```
Variables declared with the var keyword can NOT have block scope.

Variables declared inside a { } block can be accessed from outside the block.

```js
{
  var x = 2;
}
// x CAN be used here
```
...

The const keyword was introduced in ES6 (2015).

**Variables defined with const have Block Scope.**
Like let declarations, const declarations can only be accessed within the block they were declared.

```js
const x = 10;
// Here x is 10

{
const x = 2;
// Here x is 2
}

// Here x is 10
```

**Variables defined with const cannot be Redeclared or Reassigned.**
This means that the value of a variable declared with const remains the same within its scope. It cannot be updated or re-declared. So if we declare a variable with const, we can neither do this:

```js
const greeting = "say Hi";
    greeting = "say Hello instead";// error: Assignment to constant variable. 

// or this

const greeting = "say Hi";
    const greeting = "say Hello instead";// error: Identifier 'greeting' has already been declared
```
**Const Objects**
Every const declaration, therefore, must be initialized at the time of declaration.

This behavior is somehow different when it comes to objects declared with const. While a const object cannot be updated, the properties of this objects can be updated. Therefore, if we declare a const object as this:

```jsx
const greeting = {
        message: "say Hi",
        times: 4
    }

// while we cannot do this:

greeting = {
        words: "Hello",
        number: "five"
    } // error:  Assignment to constant variable.

// we can do this:
greeting.message = "say Hello instead";

// This will update the value of greeting.message without returning errors.
```

...

## Recap
![Variable](/img/let-var-const.jpeg)

```js
    // var is function scope.

    // let and const are block scope.Function scope is within the function.

    var age = 100; // function scope
      if (age > 12){
        let dogYears = age * 7; // block scope
        console.log(`You are ${dogYears} dog years old!`);
      }
```

- var declarations are globally scoped or function scoped while let and `const are block scoped.
- `var` variables can be updated and re-declared within its scope; `let` variables can be updated but not re-declared; `const` variables can neither be updated nor re-declared.
- They are all hoisted to the top of their scope. But while `var` variables are initialized with `undefined`, `let` and `const` variables are not initialized.
- While `var` and `let` can be declared without being initialized, `const` must be initialized during declaration.



 

