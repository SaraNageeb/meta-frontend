# sort() 
The sort() method sorts an array alphabetically:

By default, the sort() function sorts values as strings.

This works well for strings ("Apple" comes before "Banana").

However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

Because of this, the sort() method will produce incorrect result when sorting numbers.

You can fix this by providing a compare function:

**Example**

```js
let numbers = [0, 1, 2, 3, 10, 20, 30];
numbers.sort((a, b) => a - b);

console.log(numbers);
```

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

### SORT

1. Sort by name

```js
const byName = characters.sort((a,b) => {
    if (a.name < b.name) return -1;
    return 1;
});
console.log(byName);
```

2. Sort by mass

```js
const byMass = characters.sort((a,b) => a.mass - b.mass);
console.log(byMass);
```

3. Sort by height

```js
const byHeight = characters.sort((a,b) => a.height - b.height);
console.log(byHeight);
```

4. Sort by gender

```js
const byGender = characters.sort((a,b) => {
    if (a.gender === 'female') return -1;
    return 1;
});
console.log(byGender);
```
***