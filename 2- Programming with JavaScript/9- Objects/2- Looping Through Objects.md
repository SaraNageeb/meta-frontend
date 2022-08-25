JavaScript Program to Loop Through an Object
In this example, you will learn to write a JavaScript program that will loop through an object.

// program to loop through an object using for...in loop

const student = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};

for (const key in student) {
    console.log(key , student[key])
}


In the above example, the for...in loop is used to loop through the student object.

The value of each key is accessed by using student[key].

***

Example 2: Loop Through Object Using Object.entries and for...of
// program to loop through an object using for...in loop

const student = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};

// using Object.entries
// using for...of loop
for (let [key, value] of Object.entries(student)) {
    console.log(key + " - " +  value);
}

In the above program, the object is looped using the Object.entries() method and the for...of loop.

The Object.entries() method returns an array of a given object's key/value pairs. The for...of loop is used to loop through an array.
