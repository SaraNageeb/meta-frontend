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
const byName = characters.sort((a,b) => a.mass - b.mass);
```
***

### 2) Sort by mass

```js
const byName = characters.sort((a,b) => a.mass - b.mass);
```
***

### 3) Sort by height

```js
const byHeight = characters.sort((a,b) => a.mass - b.mass);
```
***

### 4) Sort by gender

***

  // sort in descending order
  descOrder = arr.sort((a, b) => a > b ? -1 : 1);
  console.log(descOrder); // output: [6, 5, 4, 3, 2, 1]

  // sort in ascending order
  ascOrder = alpha.sort((a, b) => a > b ? 1 : -1);
  console.log(ascOrder); // output: ['a', 'c', 'e', 'u', 'y']
