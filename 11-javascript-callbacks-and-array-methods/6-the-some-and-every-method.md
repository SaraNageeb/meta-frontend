# some()
This method checks if any of the elements contained in an array passes a set test. If at least one of the elements passes this test, true is returned. This method only returns a Boolean.

Test for number divisible by 5

```js
const array = [2, 5, 10, 8, 20]

// Create test function
const testFunction = number => number % 5 === 0

// Apply function
const result = array.some(testFunction)

// Display result
console.log(result) // true
```

**The some() method:**

* Takes a callback function that is called once for each element.

* Runs each element against the set test.

* Returns true if any of the elements pass the test and false if none of them do.

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

### SOME

1. Is there at least one male character?

```js
const oneMaleChar = characters.some(character => character.gender === 'male');
```

2. Is there at least one character with blue eyes?

```js
const oneBlueEyes = characters.some(character => character.eye_color === 'blue');
```

3. Is there at least one character taller than 200?

```js
const oneTallerThan200 = characters.some(character => character.height > 200);
```

4. Is there at least one character that has mass less than 50?

```js
const oneSmallerThan50 = characters.some(character => character.mass < 50);
```

***

### Example 2

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
        year: 2016
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

1. Is there at least one movie that has year greater than 2015?

```js
movies.some(movie => movie.year > 2015);
// expected result: true
```

2. Is there at least one movie that has score less than 30?

```js
movies.some(movie => movie.score > 30);
// expected result: false
```

***

### Example 3

```js
// create a string
const names = ['John', 'Peter', 'Mary'];
const firstName = 'John'

const hasMyName = names.some(name => name === firstName);
//Output: 'John'
```

***

# every()
The every method checks that each element in an array passes a set test. This method will return true if all the elements pass the set. Once an element that fails the test is found, the method returns false.


```js
let result = [10, 5, 20, 100].every(function(number){
    return number < 150
})
console.log(result) // true
```


Check if each item in an array is less than 100

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

The every method:

* Takes a callback function that implements a test

* Checks if all the elements pass the test

* Returns true if every element passes the test.

* Returns false an element fails test

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

### EVERY

1. Does every character have blue eyes?

```js
const allBlueEyes = characters.every((character) => {
    return character.eye_color === 'blue';
});
```

Make it shorter with Arrow Function

```js
const allBlueEyes = characters.every(character => character.eye_color === 'blue');
// expected result: false
```

2. Does every character have mass more than 40?

```js
const allMassMoreThan40 = characters.every(character => character.mass > 40);
// expected result: true
```

3. Is every character shorter than 200?

```js
const allShorter200 = characters.every(character => character.height < 200);
// expected result: false
```

4. Is every character male?

```js
const charShorter200 = characters.every(character => character.gender === 'male';
// expected result: false
```

***

### Example 2

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
        year: 2016
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

1. Does every movie have score greater than 30?

```js
const moviesGr30 = movies.every(movie => movie.score > 30);
console.log(moviesGr30); // expected result: true
```

2. Does every movie have year greater than 1960?

```js
const moviesGr1990 = movies.every(movie => movie.year > 1990);
console.log(moviesGr30); // expected result: false
```
***
