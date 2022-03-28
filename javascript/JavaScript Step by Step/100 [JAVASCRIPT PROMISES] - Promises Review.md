Promises Review
Let's quickly review what you've learned so far about promises:

A promise is a regular JavaScript object that changes from a pending state to either a fulfilled or rejected state
You're able to call methods on the Promise object, like then() and catch()
When the status of a promise changes to resolved, the function passed to then() gets called
When the status changes to rejected, the function passed to catch() is invoked
It's best to specify a rejection reason and call catch() on a promise – if you don’t, the promise will silently fail
Named Functions
You’re also not restricted to using anonymous functions within the method call of then() or catch(). You can pass then and catch references to named functions.

For example, create two functions: onResolve and onReject, each logs a message to the console.

function onResolve() {
  console.log('Your order is ready. Come and get it!');
}

function onReject() {
  console.log( Error('Oh no! There was a problem with your order.') );
}
In the Promise constructor, call resolve() if order is true, and reject() if it's false:

const breakfastPromise = new Promise( (resolve, reject) => {
  setTimeout(() => {
    if (order) {
      resolve();
    } else {
      reject();
    }
  }, 3000);
});
Next, pass then a reference to onResolve and catch a reference to onReject.

const order = true;
breakfastPromise
  .then(onResolve)
  .catch(onReject)
Promise Chaining
Remember: .then() itself always returns a new promise. So you're able to call .then() more than once on the same promise. In other words, by chaining multiple thens together, you can transform values or run additional async operations one after another.

For example, the functions addFive and double perform a math operation on a number (represented by n). The function finalValue prints a final value to the console.

function addFive(n) {
  return n + 5;
}
function double(n) {
  return n * 2;
}
function finalValue(nextValue) {
  console.log(`The final value is ${nextValue}`);
}

const mathPromise = new Promise( (resolve, reject) => {
  setTimeout( () => {
    // resolve promise if 'value' is a number; otherwise, reject it
    if (typeof value === 'number') {
      resolve(value);
    } else {
      reject('You must specify a number as the value.')
    }
  }, 1000);
});
A promise sequence will pass values down the chain, from one then() call to the other, unless there's an error.

const value = 5;
mathPromise
  .then(addFive)
  .then(double)
  .then(finalValue)
  .catch( err => console.log(err) )

// The final value is 20
We can call and use each function again and again as needed in our promise sequence. For instance, in the example below, addFive gets called twice – before and after double, producing a final value of 25.

const value = 5;
mathPromise
  .then(addFive)
  .then(double)
  .then(addFive) // called twice
  .then(finalValue)
  .catch( err => console.log(err) )

// The final value is 25
If a promise gets rejected because value is a string, for example, the sequence jumps straight to the catch() method.

const value = '5';
mathPromise
  .then(addFive)
  .then(double)
  .then(finalValue)
  .catch( err => console.log(err) )

// You must specify a number as the value.
As you can see, chaining multiple promises together to represent a sequence of asynchronous operations is easier to follow and a lot cleaner than callbacks, especially in more complex programs. Chaining promises also gives you precise control over how and where errors are handled.