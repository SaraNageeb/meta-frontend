# The const keywords was introduced in ES6 (2015)

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

<br>

**Variables defined with const cannot be Redeclared or Reassigned.**
This means that the value of a variable declared with const remains the same within its scope. It cannot be updated or re-declared. So if we declare a variable with const, we can neither do this:

```js
const greeting = "say Hi";
    greeting = "say Hello instead";// error: Assignment to constant variable. 

// or this


const greeting = "say Hi";
    const greeting = "say Hello instead";// error: Identifier 'greeting' has already been declared
```

<br>

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
***