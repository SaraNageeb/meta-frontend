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


### 1) Is there at least one male character?

```js
const oneMaleCharacter = characters.some(character => character.gender === 'male');
```
***
### 2) Is there at least one character with blue eyes?

```js
const characterBlueEyes = characters.some(character => character.eye_color === 'blue');
```
***
### 3) Is there at least one character taller than 200?

```js
const characterOver200 = characters.some(character => character.height > 200);
```

***
### 4) Is there at least one character that has mass less than 50?

```js
const characterMassLess50 = characters.some(character => character.mass < 50);
```

***
