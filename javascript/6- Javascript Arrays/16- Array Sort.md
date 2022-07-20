# Array Sort Overview
This method used to arrange/sort array’s item either ascending or descending order.

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

### 1) Sort by name

```js
// sort in descending order
const byName = characters.sort((a,b) => a.name <  b.name ? 1 : -1);

// sort in ascending order
const byName = characters.sort((a,b) => a.name <  b.name ? -1 : 1);
```
***

### 2) Sort by mass

```js
// sort in descending order
const byMass = characters.sort((a,b) => a.mass - b.mass);

// sort in ascending order
const byMass = characters.sort((a,b) => b.mass - a.mass);
```
***

### 3) Sort by height

```js
// sort in descending order
const byHeight = characters.sort((a,b) => a.height - b.height);

// sort in ascending order
const byHeight = characters.sort((a,b) => b.height - a.height);
```
***

### 4) Sort by gender

```js
const byGender = characters.sort((a,b) => a.gender === 'female' ? -1: 1);
```
***
