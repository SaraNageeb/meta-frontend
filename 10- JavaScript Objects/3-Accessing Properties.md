# Accessing Properties

There are two ways we can access an object’s property. Let’s explore the first way— dot notation, ..

You’ve used dot notation to access the properties and methods of built-in objects and data instances:

```js
'hello'.length; // Returns 5
```

With property dot notation, we write the object’s name, followed by the dot operator and then the property name (key):

```js
let spaceship = {
  homePlanet: 'Earth',
  color: 'silver'
};
spaceship.homePlanet; // Returns 'Earth',
spaceship.color; // Returns 'silver',
```

![ObjectAccess][objectaccess]

[objectaccess]:https://content.codecademy.com/courses/learn-javascript-objects/object%20dot%20notation.svg

If we try to access a property that does not exist on that object, undefined will be returned.

```js
spaceship.favoriteIcecream; // Returns undefined
```
Let’s get some more practice using dot notation on an object!

***

```js
let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

// Write your code below
let crewCount = spaceship.numCrew;

let planetArray = spaceship.flightPath;
```