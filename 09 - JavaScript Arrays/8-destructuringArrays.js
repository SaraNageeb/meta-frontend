// Destructuring Arrays

const spiderMan = ['Peter', 'Parker', 'New York'];
const name = spiderMan[0] // Peter
const surname = spiderMan[1] // Parker
const state = spiderMan[2] // New York

console.log(name, surname, state) // "Peter", "Parker", "New York"


// Basic

const batman = ['Bruce', 'Wayne', 'Gotham'];

const [firstName, lastName, city] = batman;

console.log(firstName, lastName, city); // "Bruce", "Wayne", "Gotham"


// Skipping array elements

const ironMan = ['Tony Stark', 49, 'Avengers', 'United States'];

const [fullName, , team, country] = ironMan; 

console.log(name, team, country); // "result", "Avengers", "United States"


// Default values

const [a, b = 7] = [1];

console.log(a, b); // 1 7


// Assigning the rest of an array to a variable

const heroes = ['Batman', 'Spider-Man', 'Iron-Man'];

const [dcHeroes, ...marvelHeroes] = heroes;

console.log(dcHeroes, marvelHeroes); // "Batman", ["Spider-Man", "Iron-Man"]
