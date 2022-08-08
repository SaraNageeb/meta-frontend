# JavaScript try...catch...finally Statement

The try, catch and finally blocks are used to handle exceptions (a type of an error). Before you learn about them, you need to know about the types of errors in programming.

Here are some of the most common errors in JavaScript: 

## ReferenceError 

A ReferenceError gets thrown when, for example, one tries to use variables that haven't been declared anywhere.

An example can be, say, attempting to console log a variable that doesn't exist:

```js
console.log(username);
```
If the variable named ```username``` hasn't been declared, the above line of code will result in the following output:

```js
Uncaught ReferenceError: username is not defined
```

***

## SyntaxError 

Any kind of invalid JavaScript code will cause a SyntaxError.

For example:

```js
var a "there's no assignment operator here";
```

The above line of code will throw the following error:  

```js
Uncaught SyntaxError: Unexpected string
```

There's an interesting caveat regarding the SyntaxError in JavaScript: it cannot be caught using the ```try-catch``` block.  

***

## TypeError 

A TypeError is thrown when, for example, trying to run a method on a non-supported data type.

A simple example is attempting to run the ```pop()``` method on a string:

```js
"hello".pop() // Uncaught TypeError: "hello".pop is not a function
```

However, as can be confirmed by running the above line of code, strings do not have all the array methods readily available to them, and trying to use some of those methods will result in a TypeError being thrown.  

***

## Example 01 - Good use of try and catch



```js
let json = '{ "age": 30 }'; // data from the server
 
try {
 
  let user = JSON.parse(json); // convert the text representation to JS object
  if (!user.name) { // if there is no user.name throw new SyntaxError
    throw new SyntaxError("Incomplete data: no name");
  }
 
  console.log( user.name );
 
} catch(e) {
  console.log( "JSON Error: " + e ); // JSON Error: Incomplete data: no name
}
```
