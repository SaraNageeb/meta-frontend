// Destructuring Objects

const person = {
    name: 'Tony',
    surname: 'Stark',
    country: 'United States'
}
const name = person.name // Tony
const surname = person.surname // Stark
const country = person.country // United States

console.log(name, surname, country) // "Tony", "Stark", "United States"



// Basic

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


// Nested Objects

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


// Assigning to new variables names

const person = {
    firstname: 'Tony',
    lastname: 'Stark',
    country: 'United States'
}

const {firstname: name, lastname: surname} = person;

console.log(name, surname) // "Tony", "Stark"