# Spread JavaScript

ES6 provides a new operator called spread operator that consists of three dots (...). The spread operator allows you to spread out elements of an iterable object such as an array,a  map, or a set. For example:

```js
const odd = [1,3,5];
const combined = [2,4,6, ...odd];
console.log(combined);
```

Output:
```js
[ 2, 4, 6, 1, 3, 5 ]
```
In this example, the three dots ( ...) located in front of the odd array is the spread operator. The spread operator unpacks the elements of the odd array.

***

### A better way to use the Array’s push() method example
Sometimes, a function may accept an indefinite number of arguments. Filling arguments from an array is not convenient.

For example, the push() method of an array object allows you to add one or more elements to an array. If you want to pass an array to the push() method, you need to use apply() method as follows:

```js
var rivers = ['Nile', 'Ganges', 'Yangte'];
var moreRivers = ['Danube', 'Amazon'];

Array.prototype.push.apply(rivers, moreRivers);
console.log(rivers);
```
This solution looks verbose.

The following example uses the spread operator to improve the readability of the code:

```js
rivers.push(...moreRivers);
```

As you can see, using the spread operator is much cleaner.

***

### 1) Constructing array literal
The spread operator allows you to insert another array into the initialized array when you construct an array using the literal form. See the following example:

```js
let initialChars = ['A', 'B'];
let chars = [...initialChars, 'C', 'D'];
console.log(chars); // ["A", "B", "C", "D"]
```

***

### 2) Concatenating arrays
Also, you can use the spread operator to concatenate two or more arrays:

```js
let numbers = [1, 2];
let moreNumbers = [3, 4];
let allNumbers = [...numbers, ...moreNumbers];
console.log(allNumbers); // [1, 2, 3, 4]
```

***

### 3) Copying an array
In addition, you can copy an array instance by using the spread operator:

```js
let scores = [80, 70, 90];
let copiedScores = [...scores];
console.log(copiedScores); // [80, 70, 90]
```

***

### Summary

* The spread operator is denoted by three dots (…).

* The spread operator unpacks elements of iterable objects such as arrays, sets, and maps into a list.

* The rest paramter is also denoted by three dots (…). However, it packs the remaining arguments of a function into an array.

* The spread operator can be used to clone an iterable object or merge iterable objects into one.

***

More Example

```js
const nums = [13, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 53456];
// SPREAD IN FUNCTIONS
Math.max(nums) //NaN
Math.max(...nums) //53456


// SPREAD IN ARRAYS
const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const allPets = [...cats, ...dogs];


// SPREAD IN OBJECTS
const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae' };

const catDog = { ...feline, ...canine };


const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
}
const newUser = { ...dataFromForm, id: 2345, isAdmin: false }
```