# Destructuring assignment
The syntax of assignment via destructuring is a JavaScript expression that makes it possible to unpack values ​​from arrays or object properties into distinct variables. This means, that we can extract data from arrays or objects, and assign this data to variables.

***

### Destructuring Arrays

```js
const spiderMan = ['Peter', 'Parker', 'New York'];
const name = spiderMan[0] // Peter
const surname = spiderMan[1] // Parker
const state = spiderMan[2] // New York

console.log(name, surname, state) // "Peter", "Parker", "New York"
```

In the code above, I used a way to extract elements from an array that works and was used a lot, but note that I must indicate the position of each element of the array on a different line. This makes the code more verbose.

Using destructuring the code can be reduced, see some scenarios.

***

### Basic

```js
const batman = ['Bruce', 'Wayne', 'Gotham'];

const [firstName, lastName, city] = batman;

console.log(firstName, lastName, city); // "Bruce", "Wayne", "Gotham"
```

Using JS's destructuring functionality, the code has fewer lines and is easier to read.

***

### Skipping array elements

```js
const ironMan = ['Tony Stark', 49, 'Avengers', 'United States'];

const [fullName, , team, country] = ironMan; 

console.log(name, team, country); // "result", "Avengers", "United States"
```

See that the array that receives the assignment has a comma left over. Its not actually left over, it represents the position of the array element that we didn't want to extract (which was skipped).

***

### Default values

We can assign a default value to a variable, in which case the value extracted from the array is undefined.

```js
const [a, b = 7] = [1];

console(a, b); // 1 7
```

***

### Assigning the rest of an array to a variable

When it is necessary to assign an element of the array to a variable and the rest of the elements of the same array to another variable, we can use the (...) operator.

```js
const heroes = ['Batman', 'Spider-Man', 'Iron-Man'];

const [dcHeroes, ...marvelHeroes] = heroes;

console.log(dcHeroes, marvelHeroes); // "Batman", ["Spider-Man", "Iron-Man"]
```

***