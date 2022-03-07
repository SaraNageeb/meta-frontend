// Creating an Object 

let hero = {
    name: 'Tony Stark',
    age: 48
}

// Accessing JavaScript Properties
console.log(hero.name);
console.log(hero['age']);

// Adding New Properties
hero.nationality = 'American';
hero.colleagues = ['Steve Rogers', 'Peter Parker'];
console.log(hero);

// Deleting properties
delete hero.colleagues;
console.log(hero);

// Another way to create an Object

let hero2 = new Object(); // empty obj

// adding properties to the new obj
hero2.name = 'Bruce Wayne';
hero2.age = 55;
hero2.nationality = 'American';
console.log(hero2);