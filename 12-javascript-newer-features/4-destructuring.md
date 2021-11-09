# Object Destructuring 
The object destructuring is a useful JavaScript feature to extract properties from objects and bind them to variables.

### 1. The need for object destructuring

Imagine you’d like to extract some properties of an object. In a pre-ES2015 environment, you would need to write the following code:

```js
var hero = {
  name: 'Batman',
  realName: 'Bruce Wayne'
};
var name     = hero.name;
var realName = hero.realName;
name;     // => 'Batman',
realName; // => 'Bruce Wayne'
```

Let’s refactor the above script and apply the object destructuring to access the properties name and realName:

```js
const hero = {
  name: 'Batman',
  realName: 'Bruce Wayne'
};
const { name, realName } = hero;
name;     // => 'Batman',
realName; // => 'Bruce Wayne'
```

const { name, realName } = hero is an object destructuring assignment. This statement defines the variables name and realName, then assigns to them the values of properties hero.name and hero.realName correspondigly.

Comparing the 2 approaches to access the object properties:

```js
const name     = hero.name;
const realName = hero.realName;
// is equivalent to:
const { name, realName } = hero;
```

it’s visible that the object destructuring is handier because neither the property names nor the object variable is duplicated.


### 2. Extracting a property
The basic syntax of object destructuring is pretty simple:

```js
const { identifier } = expression;
```
Where identifier is the name of the property to access and expression should evaluate to an object. After the destructuring, the variable identifier contains the property value.

Here’s the equivalent code using a property accessor:

```js
const identifier = expression.identifier;
```
Let’s try the object destructuring in practice:

```js
const hero = {
  name: 'Batman',
  realName: 'Bruce Wayne'
};
const { name } = hero;
name; // => 'Batman'
```
The statement const { name } = hero defines the variable name and initializes it with the value of hero.name property.


### 3. Extracting multiple properties
To destructure the object into multiple properties, enumerate as many properties as you like adding commas , in-between:

```js
const { identifier1, identifier2, ..., identifierN } = expression;
```

Where identifier1, …, identifierN are names of properties to access, and expression should evaluate to an object. After the destructuring, the variables identifier1, …, identifierN contain corresponding properties values.

Here’s the equivalent code:

```js
const identifier1 = expression.identifier1;
const identifier2 = expression.identifier2;
// ...
const identifierN = expression.identifierN;
```

Let’s take a look again at the example from the first section, where 2 properties are extracted:

```js
const hero = {
  name: 'Batman',
  realName: 'Bruce Wayne'
};
const { name, realName } = hero;
name;     // => 'Batman',
realName; // => 'Bruce Wayne'
```

const { name, realName } = hero creates 2 variables name and realName assigned with values of corresponding properties hero.name and hero.realName.


### 4. Default values

If the destructured object doesn’t have the property specified in the destructuring assignment, then the variable is assigned with undefined. Let’s see how it happens:

```js
const hero = {
  name: 'Batman',
  realName: 'Bruce Wayne'
};
const { enemies } = hero;
enemies;     // => undefined
```

After destructuring the variable enemies is undefined because the property enemies doesn’t exist in the object hero.

Fortunately, you can set a default value if the property doesn’t exist in the destructured object. Here’s the basic syntax:

```js
const { identifier = defaultValue } = expression;
```

Where identifier is the name of the property to access and expression should evaluate to an object. After the destructuring, the variable identifier contains the property value or is assigned with defaultValue if identifier property doesn’t exist.

Here’s the equivalent code:

```js
const identifier = expression.identifier === undefined ? 
        defaultValue : expression.identifier;
```

Let’s change the previous code sample, and use the default value feature:

```js
const hero = {
  name: 'Batman',
  realName: 'Bruce Wayne'
};
const { enemies = ['Joker'] } = hero;
enemies;     // => ['Joker']
```

Now, instead of being undefined, the variable enemies defaults to ['Joker'].

### 5. Aliases
If you’d like to create variables of different names than the properties, then you can use the aliasing feature of object destructuring.

const { identifier: aliasIdentifier } = expression;
identifier is the name of the property to access, aliasIdentifier is the variable name, and expression should evaluate to an object. After the destructuring, the variable aliasIdentifier contains the property value.

The equivalent code:

const aliasIdentifier = expression.identifier;
Here’s an example of object destructuring alias feature:

```js
const hero = {
  name: 'Batman',
  realName: 'Bruce Wayne'
};
const { realName: secretName } = hero;
secretName; // => 'Bruce Wayne'
```

Looking at const { realName: secretName } = hero, the destucturing defines a new variable secretName (alias variable), and assigns to it the value hero.realName.


### 6. Extracting properties from nested objects
In the previous examples, the objects were plain: the properties have primitive data types (e.g. strings).

Often objects can be nested in other objects. In other words, some properties can contain objects.

In such case, you still can use the object destructuring and access properties from deep. Here’s the basic syntax:

```js
const { nestedObjectProp: { identifier } } = expression;
```

nestedObjectProp is the name of the property that holds a nested object. identifier is the property name to access from the nested object. expression should evaluate to the destructured object.

After the destructuring, the variable identifier contains the property value of the nested object.

The above syntax is equivalent to:

```js
const identifier = expression.nestedObjectProp.identifier;
```

The level of nesting you can extract properties from is unlimited. If you want to extract properties from deep, just add more nested curly braces:

```js
const { propA: { propB: { propC: { .... } } } } = object;
```

For example, the object hero contains a nested object { city: 'Gotham'}.

```js
const hero = {
  name: 'Batman',
  realName: 'Bruce Wayne',
  address: {
    city: 'Gotham'
  }
};
// Object destructuring:
const { address: { city } } = hero;
city; // => 'Gotham'
```

The object destructuring const { address: { city } } = hero let’s you access the property city from the nested object.

***

# Array Destructuring

### Introduction to JavaScript Array destructuring

Assuming that you have a function that returns an array of numbers as follows:

```js
function getScores() {
   return [70, 80, 90];
}
```

The following invokes the getScores() function and assigns the returned value to a variable:

```js
let scores = getScores();
```

To get the individual score, you need to do like this:

```js
let x = scores[0], 
    y = scores[1], 
    z = scores[2];
```

Prior to ES6, there was no direct way to assign the elements of the returned array to multiple variables such as x, y and z.

Fortunately, starting from ES6, you can use the destructing assignment as follows:

```js
let [x, y, z] = getScores();

console.log(x); // 70
console.log(y); // 80
console.log(z); // 90
```

The variables x, y and z will take the values of the first, second, and third elements of the returned array.

Note that the square brackets [] look like the array syntax but they are not.

If the getScores() function returns an array of two elements, the third variable will be undefined, like this:

```js
function getScores() {
   return [70, 80];
}

let [x, y, z] = getScores();

console.log(x); // 70
console.log(y); // 80
console.log(z); // undefined
```

In case the getScores() function returns an array that has more than three elements, the remaining elements are discarded. For example:

```js
function getScores() {
   return [70, 80, 90, 100];
}

let [x, y, z] = getScores();

console.log(x); // 70
console.log(y); // 80
console.log(z); // 90
```

### Array Destructuring Assignment and Rest syntax

It’s possible to take all remaining elements of an array and put them in a new array by using the rest syntax (...):

```js
let [x, y ,...args] = getScores();
console.log(x); // 70
console.log(y); // 80
console.log(args); // [90, 100]
```

The variables x and y receive values of the first two elements of the returned array. And the args variable receives all the remaining arguments, which are the last two elements of the returned array.

Note that it’s possible to destructure an array in the assignment that separates from the variable’s declaration. For example:

```js
let a, b;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20
```

### Default Values
When you destructure on properties that are not defined, you get undefined:

```js
const { password } = {};

console.log(password); // -> undefined
```

You can provide default values for when the property you are destructuring is not defined:

```js
const [favorite = 'apple'] = [];
console.log(favorite); // -> apple

const { width = 100 } = {};
console.log(width); // -> 100
```

***

### More Example
```js
// ===================
// ARRAY DESTRUCTURING
// ===================
const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];

// const highScore = scores[0];
// const secondHighScore = scores[1];

const [gold, silver, bronze, ...everyoneElse] = scores;

// ===================
// OBJECT DESTRUCTURING
// ===================
const user = {
    email: 'harvey@gmail.com',
    password: 'sCoTt1948sMiTh',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politician and the first openly gay elected official in the history of California, where he was elected to the San Francisco Board of Supervisors',
    city: 'San Francisco',
    state: 'California'
}

const user2 = {
    email: 'Stacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,
    city: 'Tulsa',
    state: 'Oklahoma'
}

// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;
const { email, firstName, lastName, city, bio } = user;

// const { born: birthYear, died: deathYear = 'N/A' } = user;

// const { city, state, died = 'N/A' } = user2;

// ===================
// PARAM DESTRUCTURING
// ===================

// function fullName(user) {
//     return `${user.firstName} ${user.lastName}`
// }
// function fullName(user) {
//     const { firstName, lastName } = user;
//     return `${firstName} ${lastName}`
// }


function fullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`
}


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


// movies.filter((movie) => movie.score >= 90)
// movies.filter(({ score }) => score >= 90)


// movies.map(movie => {
//     return `${movie.title} (${movie.year}) is rated ${movie.score}`
// })

movies.map(({ title, score, year }) => {
    return `${title} (${year}) is rated ${score}`
})
```
