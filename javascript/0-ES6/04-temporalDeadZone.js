/* 
let and const have two broad differences from var:

1. They are block scoped.
2. Accessing a var before it is declared has the result undefined; accessing a let or const before it is declared throws ReferenceError:
*/ 
console.log(aVar); // undefined
console.log(aLet); // Causes ReferenceError: Cannot access 'aLet' before initialization
console.log(aConst); // Uncaught ReferenceError: aConst is not defined

var aVar = 1;
let aLet = 2;
const aConst = 3;
