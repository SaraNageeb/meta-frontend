# Array Filter Overview
The filter method returns a new array with only the items that we wish to be included. We tell the filter method which items to include by passing it a callback function. This callback function accepts one parameter (each item in the array), and then we return a boolean of whether or not that item should be included in the filtered results.

***

## Star Wars Data

```js
const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];
```

***

### 1. Get characters with mass greater than 100
Remember we call filter by passing it a callback function that determines whether or not a given item should be filtered or included. In this case, the condition is character.mass > 100. So, our filter will look like this.

```js
const greater100Characters = characters.filter(
    (character) => {
      return character.mass > 100;
    }
);
```

Since our callback function has a one-line return, we can simplify this arrow function by omitting the return keyword and the function brackets. This syntax implies an implicit return which means that whatever comes after the => will be automatically returned.

```js
const greater100Characters = characters.filter(character => character.mass > 100);
```

***

### 2. Get characters with height less than 200
Now, our condition changes a little bit. The condition is character.height < 200.

```js
const heightLessThan200 = characters.filter(character => character.height >= 200);
```
***

### 3. Get all male characters
Now, we only want to get male characters by checking the gender property of each character.

```js
const maleCharacters = characters.filter(character => character.gender === 'male');
```

***

### 4. Get all female characters
Lastly, we can tweak the previous filter to search for the string "female" as the gender property.

```js
const femaleCharacters = characters.filter(character => character.gender === 'female');
```

***

https://coursework.vschool.io/array-filter-exercises/
https://www.w3resource.com/javascript-exercises/
https://bobbyhadz.com/blog/javascript-find-even-numbers-in-array
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

***
# Array Filter Exercises

### 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

```js
const arr = [3, 6, 8, 2];

const fiveAndGreaterOnly = arr.filter(number => number > 5);

console.log(fiveAndGreaterOnly);
```

1. Call the filter() method, passing it a function.
2. On each iteration, verify that the number doesn't have a remainder when divided by 2.
3. The filter method returns a new array containing the elements that satisfy the condition.

***

### 2) Given an array of numbers, return a new array that only includes the even numbers.

```js
const arr = [3, 6, 8, 2, 7, 5, 4];

const even = arr.filter(number => number % 2 === 0);

console.log(even);
```

1. Call the filter() method, passing it a function.
2. On each iteration, verify that the number doesn't have a remainder when divided by 2.
3. The filter method returns a new array containing the elements that satisfy the condition.

***

### 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length.

```js
const arr = ["dog", "wolf", "by", "family", "eaten", "camping"];

const FiveCharOrLess = arr.filter(char => char.length <= 5);

console.log(FiveCharOrLess); // ["dog", "wolf", "by", "eaten"]
```

1. Call the filter() method, passing it a function.
2. On each iteration, verify that the number doesn't have a remainder when divided by 2.
3. The filter method returns a new array containing the elements that satisfy the condition.

***

### 4) Make a filtered list of all the people who are old enough to see The Matrix (older than 18)

```js
const arr = [
    { name: "Anna", age: 21 },
    { name: "Bob", age: 2 },
    { name: "Chi", age: 5 },
    { name: "Dan", age: 18 },
];

const over18 = arr.filter(person => person.age >= 18).map(person => person.name);

console.log(over18); // ["Anna", "Dan"]
```

1. Call the filter() method, passing it a function.
2. On each iteration, verify that the number doesn't have a remainder when divided by 2.
3. The filter method returns a new array containing the elements that satisfy the condition.

***
