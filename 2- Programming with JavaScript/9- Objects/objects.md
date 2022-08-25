# JavaScript object
JavaScript object is a non-primitive data-type that allows you to store multiple collections of data.

![image](https://user-images.githubusercontent.com/25232528/186669426-01049369-24aa-43b7-b68d-26b0338c0417.png)

Here is an example of a JavaScript object.

```js
// object
const student = {
    firstName: 'Ash',
    class: 10
};
```

Here, ```student``` is an object that stores values such as strings and numbers.

***

## JavaScript Object Declaration
The syntax to declare an object is:

```js
const object_name = {
   key1: value1,
   key2: value2
}
```

Here, an object ```object_name``` is defined. Each member of an object is a ```key:``` ```value``` pair separated by commas and enclosed in curly braces ```{}```.

![image](https://user-images.githubusercontent.com/25232528/186671237-585d51a3-475d-47c5-994a-62c7c9208e2d.png)

For example,

```js
// object creation
const person = { 
    name: 'John',
    age: 20
};
console.log(typeof person); // object
```

You can also define an object in a single line.

```js
const person = { name: 'John', age: 20 };
```

In the above example, ```name``` and ```ag```e are ```keys```, and ```John``` and ```20``` are values respectively.

![image](https://user-images.githubusercontent.com/25232528/186692389-05b5f588-92ff-4643-b15b-3aa4553c5900.png)

***

## Accessing Object Properties
You can access the value of a property by using its key.

**Using dot Notation**
Here's the syntax of the dot notation.

```
objectName.key
```

For example,

```js
const person = { 
    name: 'John', 
    age: 20, 
};

// accessing property
console.log(person.name); // John
```

***

## JavaScript Nested Objects
An object can also contain another object. For example,

```js
// nested object
const student = { 
    name: 'John', 
    age: 20,
    marks: {
        science: 70,
        math: 75
    }
}

// accessing property of student object
console.log(student.marks); // {science: 70, math: 75}

// accessing property of marks object
console.log(student.marks.science); // 70
```

In the above example, an object ```student``` contains an object value in the ```marks``` property.

***

## Adding New Properties
You can add new properties to an existing object by simply giving it a value.

Assume that the ```student``` object already exists - you can then give it new properties:

Example

```js
const student = { 
    name: 'John', 
    age: 20,
    marks: {
        science: 70,
        math: 75
    }
}

// Creates a new key of 'nationality' with a value of 'English'
student.nationality = "English";

console.log(student);

/* 
{
  age: 20,
  marks: {
    math: 75,
    science: 70
  },
  name: "John",
  nationality: "English"
}
*/
```

***

## Update Properties
Once we’ve defined an object, we’re not stuck with all the properties we wrote. Objects are mutable meaning we can update them after we create them!

We can use either dot notation, ```.```, or bracket notation, ```[]```, and the assignment operator, ```=``` to add new key-value pairs to an object or change an existing property.


```js
const student = { 
    name: 'John', 
    age: 20,
    marks: {
        science: 70,
        math: 75
    }
}

student.name = 'Ash',
student.age = 23,

console.log(student.name); // Ash
console.log(student.age); // 23
```

***

## Deleting Properties
The delete keyword deletes a property from an object:

```js
const student = { 
    name: 'John', 
    age: 20,
    marks: {
        science: 70,
        math: 75
    }
}

// Removes the marks property
delete student.marks;

console.log(student);

/*
{
  age: 20,
  name: "John"
}
*/
```

***
