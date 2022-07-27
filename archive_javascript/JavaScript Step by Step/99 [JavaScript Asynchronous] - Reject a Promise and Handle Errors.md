# Reject a Promise and Handle Errors
If an error occurs, the promise status changes from "pending" to a "rejected" (or failed) state. Promises give you the opportunity to handle the error with a method called catch().


***

**Code Example**
```js
const order = false;

const breakfastPromise = new Promise( (resolve, reject) => {
  setTimeout(() => {
    if (order) {
      resolve('Your order is ready. Come and get it!');
    } else {
      reject( Error('Your order cannot be made.') );
    }
  }, 3000);
});

console.log(breakfastPromise);
breakfastPromise
  .then( val => console.log(val) )
  .catch( err => console.log(err) )
```