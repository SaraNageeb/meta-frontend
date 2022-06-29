# The forEach() Overview
The forEach() method executes a provided function for each array element.

***

### Example 1
The forEach() method is used to iterate over an array. For example,

```js
// forEach and Arrow Function
const socialNetworks = ['Facebook', 'Twitter', 'Instagram', 'Youtube'];

const logArrayInfo = ((socialNetwork,index, array) => {
console.log(socialNetwork,index,array);
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

function printsocialNetworks(element, index) {
console.log(element, index);
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
