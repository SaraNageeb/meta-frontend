# reduce() 
method takes the input values of an array and returns a single value. This one is really interesting. Reduce accepts a callback function which consists of an accumulator (a value that accumulates each piece of the array, growing like a snowball), the value itself, and the index. It also takes a starting value as a second argument

***

### Example 1

Here's a sample piece of Star Wars data from the [Star Wars API](https://swapi.dev/).

```javascript
const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];
```

### REDUCE

1. Get the total mass of all characters

```js
const totalMass = characters.reduce((acc, cur) => {
   return acc + cur.mass;
}, 0);

console.log(totalMass); // expected return: 346;
```

Make it shorter with Arrow Function

```js
const totalMass1 = characters.reduce((acc, cur) => acc + cur.mass, 0); 

console.log(totalMass1); // expected return: 346;
```

2. Get the total height of all characters

```js
const totalHeight = characters.reduce((acc, cur) => acc + cur.height, 0); 

console.log(totalMass1); // expected return: 346;
```

3. Get the total number of characters in all the character names

```js
const totalNames = characters.reduce((acc, cur) => acc + cur.name.length, 0);

console.log(totalNames);
```

4. Get the total number of characters by eye color (hint. a map of eye color to count)

```js
const charactersByEyeColor = characters.reduce((acc,cur) => {
    const color = cur.eye_color;
    if (acc[color]) { // if the acc already have a key of cur.eye_color
        acc[color]++ // update by 1
    } else {
        acc[color] = 1;
    }
    return acc;
}, {}); //  start with an empty obj

console.log(charactersByEyeColor);
```

***

### JavaScript Array reduce() method in detail

the following table illustrates how the reduce() method works in detail.

```js
let numbers = [1, 2, 3];

let sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
});
console.log(sum);
```

![Reduce()](/img/reduce_example.png)
