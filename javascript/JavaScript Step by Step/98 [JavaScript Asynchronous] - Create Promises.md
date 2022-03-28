# Reject a Promise and Handle Errors
Creating a promise is easy, simply create it like you would any object. It takes a callback function with two parameters, a resolve function and a reject function.

```js
const promise = new Promise((resolve, reject) => {
    // implementation here
});
```

Promises only have three possible states they can be in:

* Pending: A pending Promise hasn't begun its operations yet.

* Fulfilled: When a promise resolves after its operations finished.

* Rejected: When a promise fails to complete its operations successfully.

**Code example**
```js
const breakfastPromise = new Promise( (resolve, reject) => {
  setTimeout(() => {
    resolve('Your order is ready. Come and get it!');
  }, 3000);
});

console.log(breakfastPromise);
breakfastPromise.then( val => console.log(val) )
```

***
