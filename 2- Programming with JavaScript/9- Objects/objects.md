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

## JavaScript Methods and this Keyword
In JavaScript, objects can also contain functions. For example,

```js
// object containing method
const person = {
    name: 'John',
    greet: function() { console.log('hello'); }
};
```

In the above example, a ```person``` object has two keys (```name``` and ```greet```), which have a string value and a function value, respectively.

Hence basically, the JavaScript method is an object property that has a function value.

***

## Accessing Object Methods
You can access an object method using a dot notation. The syntax is:

```
objectName.methodKey()
```

You can access property by calling an **objectName** and a **key**. You can access a method by calling an **objectName** and a **key** for that method along with ```()```. For example,

```js
// accessing method and property
const person = {
    name: 'John',
    greet: function() { console.log('hello'); }
};

// accessing property
person.name; // John

// accessing method
person.greet(); // hello
```

Here, the ```greet``` method is accessed as ```person.greet()``` instead of ```person.greet```.

If you try to access the method with only ```person.greet```, it will give you a function definition.

```js
person.greet; // ƒ () { console.log('hello'); }
```

***

## Adding a Method to a JavaScript Object
You can also add a method in an object. For example,

```js
// creating an object
let student = { };

// adding a property
student.name = 'John';

// adding a method
student.greet = function() {
    console.log('hello');
}

// accessing a method
student.greet(); // hello
```

In the above example, an empty ```student``` object is created. Then, the ```name``` property is added. Similarly, the ```greet``` method is also added. In this way, you can add a method as well as property to an object.

***

## JavaScript this Keyword
To access a property of an object from within a method of the same object, you need to use the ```this``` keyword. Let's consider an example.

```js
const person = {
    name: 'John',
    age: 30,

    // accessing name property by using this.name
    greet: function() { console.log('The name is' + ' ' + this.name); }
};

person.greet();
```

Output

```
The name is John
```

In the above example, a ```person``` object is created. It contains properties (```name``` and ```age```) and a method ```greet```.

In the method ```greet```, while accessing a property of an object, ```this``` keyword is used.

In order to access the **properties** of an object, ```this``` keyword is used following by ```.``` and **key**.

<br>

> **_NOTE:_** In JavaScript, this keyword when used with the object's method refers to the object. this is bound to an object.

<br>

However, the function inside of an object can access it's variable in a similar way as a normal function would. For example,

```js
const person = {
    name: 'John',
    age: 30,
    greet: function() {
        let surname = 'Doe';
        console.log('The name is' + ' ' + this.name + ' ' + surname); }
};

person.greet();
```

Output

```
The name is John Doe
```

***


