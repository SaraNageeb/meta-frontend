### Numbers
### String
### Boolean

### Undefined vs. Undeclared Variables
It’s important to distinguish between undefined and undeclared variables.

An undefined variable is a variable that has been declared. Because we have not assigned it a value, the variable used the undefined as its initial value.

In contrast, an undeclared variable is the variable that has not been declared.

See the following example:

```js
var message;

console.log(message); // undefined
console.log(counter); // ReferenceError: counter is not defined
```
In this example, the message variable is declared but not initialized therefore its value is undefined whereas the counter variable has not been declared hence accessing it causes a ReferenceError.