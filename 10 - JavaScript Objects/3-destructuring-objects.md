# Destructuring Objects

Destructuring an object is similar to destructuring an array, the difference is the use of curly braces { } instead of square brackets [ ].

```js
const person = {
    name: 'Tony',
    surname: 'Stark',
    country: 'United States'
}
const name = person.name // Tony
const surname = person.surname // Stark
const country = person.country // United States

console.log(name, surname, country) // "Tony", "Stark", "United States"

```

***

### Basic 

In destructuring of objects, the name of the variable that will receive the value of the object's property must be the same as the name of the object's property. Otherwise, the value assignment will not be done.

```js
const person = {
    firstname: 'Tony',
    lastname: 'Stark',
    country: 'United States'
}

// correct
const {firstname, lastname, country} = person;
console.log(firstname, lastname, country); // "Tony", "Stark", "United States" 

// wrong
const {firstname, last, country} = person;
console.log(firstname, last, country); // "Tony", undefined, "United States"
```

***

### Nested object

```js
const person = {
    firstname: 'Tony',
    lastname: 'Stark',
    country: 'United States',
    adress: {
        street: 'Marvel Road 123',
        city: 'NY'
    }
}

const {firstname, lastname, country, adress: {street, city}} = person;

console.log(firstname, lastname, street, city); // "Tony", "Stark", "Marvel Road 123", "NY"
```

***

### Assigning new variables names

As I said before, when destructuring an object directly, the name of the variable that will receive the value of the object's property must be the same, but it is possible to use another variable name if necessary.

```js
const person = {
    firstname: 'Tony',
    lastname: 'Stark',
    country: 'United States'
}

const {firstname: name, lastname: surname} = person;

console.log(name, surname) // "Tony", "Stark"
```

***