# JavaScript try...catch...finally Statement

The try, catch and finally blocks are used to handle exceptions (a type of an error). Before you learn about them, you need to know about the types of errors in programming.

Here are some of the most common errors in JavaScript: 

* ReferenceError 

* SyntaxError 

* TypeError 

***

```js
let json = '{ "age": 30 }';
 
try {
 
  let user = JSON.parse(json); 
  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name");
  }
 
  console.log( user.name );
 
} catch(e) {
  console.log( "JSON Error: " + e ); 
}
```
