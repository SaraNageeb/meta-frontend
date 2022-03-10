# filter()
filter() is a very handy shortcut when we have an array of values and want to filter those values into another array, where each value in the new array is a value that passes a specific test.

This works like a search filter. We’re filtering out values that pass the parameters we provide.

For example, if we have an array of numeric values, and want to filter them to just the values that are larger than 10, we could write:

```js
[1, 4, 6, 14, 32, 78].filter(val => val > 10)
// the result is: [14, 32, 78]
```

If we were to use a map method on this array, such as in the example above, we would return an array of the same length as the original with val > 10 being the “transform,” or a test in this case. We transform each of the original values to their answer if they are greater than 10. It would look like this:

```js
[1, 4, 6, 14, 32, 78].map(val => val > 10)
// the result is: [false, false, false, true, true, true]
```

A filter, however, returns only the true values. So the result is smaller than the original array or the same size if all values pass a specific test.

![Array Map](/img/array-filter.png)

***

## Example 1

Here's a sample piece of Star Wars data from the [Star Wars API](https://swapi.dev/).

```javascript
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

### FILTER

1. Get characters with mass greater than 100

```js
const greater100 = characters.filter(character => character.mass > 100);
console.log(greater100);
```
2. Get characters with height less than 200

```js
const less200 = characters.filter(character => character.height < 200);
console.log(less200);
```

3. Get all male characters

```js
const maleChar = character.filter(character => character.gender === 'male');
console.log(maleChar);

```
4. Get all female characters

```js
const femaleChar = character.filter(character => character.gender === 'female');
console.log(femaleChar);

```

***

### Example 2

Here's a sample piece of a movie list.

```js
const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]
```

### FILTER

1. Get an array of movies ratings less than 70

```js
const badMovies = movies.filter(m => m.score < 70)
```

2. Get an array of movies where year is higher than 2000

```js
const recentMovies = movies.filter(m => m.year > 2000)
```

3. Get an array of movies ratings higher than 70

```js
const goodMovies = movies.filter(m => m.score > 80)
```

4. Get an array of movies titles where score is higher than 80

```js
const goodTitles = movies.filter(m => m.score > 80).map(m => m.title);
```

***

### Example 3

For example, if we have an array of numeric values, and want to filter them to just the values that are smaller than 10, we could write:

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const numsLessThan10 = numbers.filter(n => n < 10)
```

***

