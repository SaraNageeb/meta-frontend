# Quick JavaScript Array Functions Practice
Want to learn how to use JavaScript array functions like map, reduce, filter, etc? Use this worksheet

**Sample Data**

Here's a sample piece of Star Wars data from the Star Wars API.

```js
const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];
```
***

### JavaScript Array map()
The ```map()``` method creates a new array with the results of calling a function for every array element.

```js
[1, 4, 6, 14, 32, 78].map(val => val * 10)
// the result is: [10, 40, 60, 140, 320, 780]
```

#### 1. Get an array of all names

```js
const name = characters.map(character => character.name);
console.log(name); // ["Luke Skywalker", "Darth Vader", "Leia Organa", "Anakin Skywalker"]
```

#### 2. Get an array of all heights

```js
const heights = characters.map(character => character.height);
console.log(heights); // [172, 202, 150, 188]
```

#### 3. Get an array of objects with just name and height properties

```js
const NamesAndHeights = characters.map(character => ({name: character.name, height: character.height}));
console.log(NamesAndHeights); 
```

#### 4.Get an array of all first names

```js
const firstName = characters.map(character => character.name.split(" ")[0]);
console.log(firstName); // ["Luke", "Darth", "Leia", "Anakin"]
```

***

### JavaScript Array filter()
The ```filter``` method returns a new array with only the items that we wish to be included. We tell the filter method which items to include by passing it a callback function. 

This callback function accepts one parameter (each item in the array), and then we return a boolean of whether or not that item should be included in the filtered results.

```js
[1, 4, 6, 14, 32, 78].filter(val => val > 10)
// the result is: [14, 32, 78]
```

#### 1. Get characters with mass greater than 100

```js
const greater100Characters = characters.filter(character => character.mass > 100);
```

#### 2. Get characters with height less than 200

```js
const heightLessThan200 = characters.filter(character => character.height >= 200);
```

#### 3. Get all male characters

```js
const maleCharacters = characters.filter(character => character.gender === 'male');
```

#### 4. Get all female characters

```js
const femaleCharacters = characters.filter(character => character.gender === 'female');
```

***

### JavaScript Array reduce()
The array ```reduce()``` is a built-in JavaScript method used to apply a function to each element in the array to reduce the array to a single value. 

The ```reduce()``` method accepts two parameters, the total and the current value.

```js
// Sum of All Values of Array
const numbers = [1, 2, 3, 4, 5, 6];

function sum_reducer(accumulator, currentValue) {
  return accumulator + currentValue;
}

let sum = numbers.reduce(sum_reducer);
console.log(sum); // 21

// using arrow function
let summation = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(summation); // 21
```

![image](https://user-images.githubusercontent.com/25232528/176709910-a173dd25-e905-40e1-bf72-5487b86e95b9.png)

#### 1. Get the total mass of all characters

```js
const totalMass = characters.reduce((acc, cur)=> acc + cur.mass, 0);
```

```
346
```

#### 2. Get the total height of all characters

```js
const totalHeight = characters.reduce((acc, cur)=> acc + cur.height, 0);
```

```
712
```

#### 3. Get the total number of characters by eye color

```js
const characterByEyeColor = characters.reduce((acc, cur) => {
  if(acc[cur.eye_color]) {            // If we already seen the eye_color before
     acc[cur.eye_color]++;           // Increase it by 1 
  } else {                          // If we not seen the eye_color 
  acc[cur.eye_color] = 1;          // Then, add one to it
  } 
  return acc;
}, {});
```

```
{ blue: 2, yellow: 1, brown: 1 }
```

#### 4. Get the total number of characters in all the character names

```js
const totalNameChar = characters.reduce((acc, cur)=> acc + cur.name.length, 0);
```

```
52
```

***

### JavaScript Array some()
This method check if at least one of array’s item passed the condition. If passed, it return ```‘true’``` otherwise ```‘false’```.

```js
const array = [2, 5, 10, 8, 20]

// Create test function
const testFunction = number => number % 5 === 0

// Apply function
const result = array.some(testFunction)

// Display result
console.log(result) // true
```

#### 1. Is there at least one male character?

```js
const oneMaleCharacter = characters.some(character => character.gender === 'male'); // true
```

#### 2. Is there at least one character with blue eyes?

```js
const characterBlueEyes = characters.some(character => character.eye_color === 'blue'); // true
```

#### 3. Is there at least one character taller than 210?

```js
const characterOver200 = characters.some(character => character.height > 210); // false
```

#### 4. Is there at least one character that has mass less than 50?

```js
const characterMassLess50 = characters.some(character => character.mass < 50); // true
```
***

### JavaScript Array every()
This method check if all array’s item passed the condition. If passed, it return ```‘true’``` otherwise ```‘false’```.

```js
// Create new array
const array = [20, 21, 23, 15, 2]

// Create condition
const isLessThan100 = (number)=> number < 100

// Apply function
let result = array.every(isLessThan100)

// Output result
console.log(result) // true
```

#### 1. Does every character have blue eyes?

```js
const allBlueEyes = characters.every(character => character.eye_color === 'blue'); // false
```

#### 2. Does every character have mass more than 40?

```js
const allMassOver40 = characters.every(character => character.mass > 40); // true
```

#### 3. Is every character shorter than 200?

```js
const allShorter200 = characters.every(character => character.height < 200); // false
```

#### 4. Is every character male?

```js
const allMale = characters.every(character => character.gender === 'male'); // false
```

***

### JavaScript Array sort()
The ```sort()``` method sorts an array alphabetically:

By default, the ```sort()``` function sorts values as strings.

This works well for strings (```"Apple"``` comes before ```"Banana"```).

However, if numbers are sorted as strings, ```"25"``` is bigger than ```"100"```, because ```"2"``` is bigger than ```"1"```.

Because of this, the ```sort()``` method will produce incorrect result when sorting numbers.

You can fix this by providing a compare function:

```js
let numbers = [0, 1, 2, 3, 10, 20, 30];
numbers.sort((a, b) => a - b);

console.log(numbers);
```

#### 1. Sort by name

```js
// sort in descending order
const byName = characters.sort((a,b) => a.name <  b.name ? 1 : -1);

// sort in ascending order
const byName = characters.sort((a,b) => a.name <  b.name ? -1 : 1);
```

#### 2. Sort by mass

```js
// sort in descending order
const byMass = characters.sort((a,b) => a.mass - b.mass);

// sort in ascending order
const byMass = characters.sort((a,b) => b.mass - a.mass);
```

#### 3. Sort by height

```js
// sort in descending order
const byHeight = characters.sort((a,b) => a.height - b.height);

// sort in ascending order
const byHeight = characters.sort((a,b) => b.height - a.height);
```

#### 4. Sort by gender

```js
const byGender = characters.sort((a,b) => a.gender === 'female' ? -1: 1);
```
***
