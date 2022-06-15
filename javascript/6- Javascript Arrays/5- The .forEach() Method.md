# The .forEach() Method
The forEach() method executes a provided function once for each array element.

![ForEach][foreach]

[foreach]:https://content.codecademy.com/courses/learn-javascript-iterators/iterator%20anatomy.svg
***

The code above will log a nicely formatted list of the groceries to the console. Let’s explore the syntax of invoking ```.forEach()```.

* ```groceries.forEach()``` calls the forEach method on the groceries array.
* ```.forEach()``` takes an argument of callback function. Remember, a callback function is a function passed as an argument into another function.
* ```.forEach()``` loops through the array and executes the callback function for each element. During each execution, the current element is passed as an argument to the callback function.
* The return value for .forEach() will always be undefined.

Another way to pass a callback for ```.forEach()``` is to use arrow function syntax.

```js
groceries.forEach(groceryItem => console.log(groceryItem));
```

We can also define a function beforehand to be used as the callback function.

```js
function printGrocery(element){
  console.log(element);
}
 
groceries.forEach(printGrocery);
```

The above example uses a function declaration but you can also use a function expression or arrow function as well.

All three code snippets do the same thing. In each array iteration method, we can use any of the three examples to supply a callback function as an argument to the iterator. 
It’s good to be aware of the different ways to pass in callback functions as arguments in iterators because developers have different stylistic preferences.


***

### Example 1
The forEach() method is used to iterate over an array. For example,

```js
// forEach and Arrow Function
const socialNetworks = ['Facebook', 'Twitter', 'Instagram', 'Youtube'];

const logArrayInfo = ((index,socialNetwork, array) => {
console.log(index, socialNetwork, array);
})


socialNetworks.forEach(logArrayInfo); 
// "Facebook", 0, ["Facebook", "Twitter", "Instagram", "Youtube"]
// "Twitter", 1, ["Facebook", "Twitter", "Instagram", "Youtube"]
// "Instagram", 2, ["Facebook", "Twitter", "Instagram", "Youtube"]
// "Youtube", 3, ["Facebook", "Twitter", "Instagram", "Youtube"]
```


```js
// ForEach and Function
const socialNetworks = ['Facebook', 'Twitter', 'Instagram', 'Youtube'];

function printsocialNetworks(index, element) {
console.log(index, element);
}

socialNetworks2.forEach(printsocialNetworks);
// "Facebook", 0
// "Twitter", 1
// "Instagram", 2
// "Youtube", 3
```

In the above program, the forEach() method takes myFunction() function that displays each element of a students array.

***

### Example 2
Let's create an array with the numbers from 1 to 6 and display in the browser console only the even numbers. Check the code below.

```js
const arr = [1,2,3,4,5,6];

const verifyEvenNum = el => {
if (el % 2 === 0) {
console.log(el);
} 
}

arr.forEach(verifyEvenNum);
// 2
// 4
// 6
```

***

### Example 3
To count the duplicates in an array, declare an empty object variable that will store the count for each value and use the forEach() method to iterate over the array. On each iteration, increment the count for the value by 1 or initialize it to 1 if it hasn't been set already.

```js
const countries = ['Argentina', 'Brazil', 'Argentina', 'Argentina', 'Brazil', 'Portugal'];

const count = {};

countries.forEach(element => {
  count[element] = (count[element] || 0) + 1;
});


console.log(count);
// {Argentina: 3, Brasil: 2, Portugal: 1}
```

* The function we passed to the Array.forEach method gets called with each element in the array.

* For each element we check if the value in already present as a key in the count object. If it is present, we increment it by 1.

* If the value is not yet present, we initialize it to 1.

* The logical OR (||) operator is there to check if the key has not been initialized in the array. If the accessor returns undefined, we initialize the value for the key to 0 + 1.

***
