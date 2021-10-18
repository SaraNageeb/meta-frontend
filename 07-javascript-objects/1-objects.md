# Javacript Objects 
In JavaScript, an object is an unordered collection of key-value pairs. Each key-value pair is called a property.

The key of a property can be a string and the value of a property can be any valid JavaScript value e.g., a string, a number, an array, and even a function.

When a function is a property of of an object, it’s often called a method.

JavaScript provides you with many ways to create a new object. The most popular one is to use the object literal syntax.

The following example creates an empty object using the the object literal syntax:

```js
let empty = {};
```

To create an object with properties, you use the key:value within the curly braces. For example, the following creates a new person object:

```js
const person = {
  firstName: 'Elizabeth',
  lastName: 'Harmon',
  age: 22,
  eyeColor: 'Hazel',
};
```

The person object has four properties firstName,lastName, age and eyeColor with the corresponding values 'Elizabeth', 'Harmon', 22 and 'Hazel'.

When an object has multiple properties, you use a comma (,) to separate them like the above example.

***

### Accessing properties
To access a property of an object, you use one of two notations: the dot notation and array-like notation.

1- The dot notation (.)
The following illustrates how to use the dot notation to access a property of an object:

```js
objectName.propertyName
```

For example, to access the firstName property of the person object, you use the following expression:

```js
person.firstName
```
This example creates a person object and shows the first name and last name to the console:

```js
let person = {
   firstName: 'Elizabeth',
   lastName: 'Harmon',
};

console.log(person.firstName); // Elizabeth
console.log(person.lastName); // Harmon
```

2- Array-like notation ( [])
The following illustrates how to access the value of an object’s property via the array-like notation:

```js
objectName['propertyName']
```

For example:
```js
let person = {
    firstName: 'Elizabeth',
    lastName: 'Harmon'
};

console.log(person['firstName']); // Elizabeth
console.log(person['lastName']); // Harmon
```

When a property name contains spaces, you need to place it inside quotes. For example, the following address object has the 'building no' as a property:

```js
let address = {
    'building no': 3960,
    street: 'North 1st street',
    state: 'CA',
    country: 'USA'
};
```

To access the 'building no' property, you need to use the array-like notation:

```js
address['building no'];
```

***

### Modifying the value of a property
To change the value of a property, you use the assignment operator (=). For example:

```js
let person = {
    firstName: 'John',
    lastName: 'Doe'
};

person.firstName = 'Jane';

console.log(person);
```

Output:
```js
{ firstName: 'Jane', lastName: 'Doe' }
```

In this example, we changed the value of the firstName property of the person object from 'John' to 'Jane'.

***

### Adding a new property to an object
Unlike objects in other programming languages such as Java and C++, you can add a property to an object after object creation.

The following statement adds the age property to the person object and assigns 25 to it:

```js
person.age = 25;
```

***

### Deleting a property of an object
To delete a property of an object, you use the delete operator:

```js
delete objectName.propertyName;
```

The following example removes the age property from the person object:

```js
delete person.age;
```
If you attempt to access the age property again, you’ll get an undefined value.

***

### Checking if a property exists
To check if a property exists in an object, you use the in operator:

```js
propertyName in objectName
```

The in operator returns true if the propertyName exists in the objectName.

The following example creates an employee object and uses the in operator to check if the ssn and employeeId properties exist in the object:

```js
let employee = {
    firstName: 'Peter',
    lastName: 'Doe',
    employeeId: 1
};


console.log('ssn' in employee);
console.log('employeeId' in employee);
```

Output:

```js
false
true
```
