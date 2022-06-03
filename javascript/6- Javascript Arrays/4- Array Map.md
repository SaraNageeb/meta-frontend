# Array Map Overview
The Array.map() method allows you to iterate over the array and modify its elements using a callback function. 
The callback function will be executed on each of the array elements.

***

### Star Wars Data

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

### 1. Get an array of all names

```js
const name = characters.map(character => character.name);
console.log(name); // ["Luke Skywalker", "Darth Vader", "Leia Organa", "Anakin Skywalker"]
```

***
### 2. Get an array of all heights

```js
const heights = characters.map(character => character.height);
console.log(heights); // [172, 202, 150, 188]
```

***
### 3. Get an array of objects with just name and height properties

```js
const NamesAndHeights = characters.map(character => ({name: character.name, height: character.height}));
console.log(NamesAndHeights); 
```

***
### 4.Get an array of all first names

```js
const firstName = characters.map(character => character.name.split(" ")[0]);
console.log(firstName); // ["Luke", "Darth", "Leia", "Anakin"]
```
***
