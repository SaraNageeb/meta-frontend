# Array Some Overview
This method check if at least one of array’s item passed the condition. If passed, it return ‘true’ otherwise ‘false’.

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

### 1) Does every character have blue eyes?

```js
const allBlueEyes = characters.every(character => character.eye_color === 'blue'); // false
```

***

### 2) Does every character have mass more than 40?

```js
const allMassOver40 = characters.every(character => character.mass > 40); // true
```
***

### 3) Is every character shorter than 200?

```js
const allShorter200 = characters.every(character => character.height < 200); // false
```

***

### 4) Is every character male?

```js
const allMale = characters.every(character => character.gender === 'male'); // false
```

***
