# JavaScript Array.map()

Array.map() updates each individual value in a given array based on a provided transformation and returns a new array of the same size. It accepts a callback function as an argument, which it uses to apply the transform.

A map lets you morph an array piece-by-piece. Let’s take a look at an example:

```js
[1, 4, 6, 14, 32, 78].map(val => val * 10)
// the result is: [10, 40, 60, 140, 320, 780]
```

In the above example, we take an initial array ([1, 4, 6, 14, 32, 78]) and map each value in it to be that value times ten (val * 10). The result is a new array with each value of the original array transformed by the equation: [10, 40, 60, 140, 320, 780].

![Array Map](/img/array-map.png)

***

### Example 1

Here's a sample piece of Star Wars data from the [Star Wars API](https://swapi.dev/).

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

### MAP

1. Get an array of all names

```js
// For each character, return character name
const names = characters.map(character => character.name);
console.log(names);
```

2. Get an array of all heights

```js
// For each character, return character height
const heigths = characters.map(character => character.height);
console.log(heigths);
```

3. Get an array of objects with just name and height properties

```js
// For each character, return character name and height as an object
const minifiedRecords = characters.map(character => ({ 
    name: character.name, 
    name: character.height
}));
console.log(minifiedRecords);
```

4. Get an array of all first names

```js
const firstNames = character.map(character => character.name.split(" ")[0])
console.log(firstNames);
```
***

### Example 2

Here's a sample piece of a movie list.

```js
const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]
```

### MAP

1. Get an array of movies titles in capital letters.

```js
const titles = movies.map(function (movie) {
    return movie.title.toUpperCase();
})
```
or make it shorter

```js
const titles1 = movies.map(movie => movie.titletoUpperCase());
```
***
