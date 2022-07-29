# Variations of Data Types
There are 2 kinds of data types, each of which are further divided into sub-types.

* Primitive data types: Data types which are pre-defined and supported by the programming language.

* Non-primitive data types: Data types which are created by the user and not pre-defined by the language itself.

JavaScript is a dynamically typed language. It means that a variable doesn’t associate with a type. In other words, a variable can hold a value of different types. For example:


![Datatypes][datatypes]

[datatypes]:https://usemynotes.com/wp-content/uploads/2021/04/Types-of-data-types-in-JS.jpg
***

## Primitive data sub-types

### 1. String
Strings are used to store data that involves characters, like names or addresses. You can perform operations like string concatenation, in JavaScript.

```js
const name = 'Peter';
const surname = "Parker";
const fullName = ` ${name} ${surname}`;

console.log(fullName); // Peter Parker
```
***

### 2. Number
Number type stands for both integers and floating points. Many mathematical operations are carried out using these numbers.

```js
let age = 22;
age = age+1;  // mathematical operation 

console.log("Your age next year is : " + age) // "Your integer number is : 23"
```
***

### 3. NaN
NaN stands for Not a Number. It is a special numeric value that indicates an invalid number. For example, the division of a string by a number returns NaN:.

```js
console.log('a'/2); // NaN;
```

The NaN has two special characteristics:

* Any operation with NaN returns NaN.

* The NaN does not equal any value, including itself.

Here are some examples:

```js
console.log(NaN/2); // NaN
console.log(NaN == NaN); // false
```

***

### 4. Boolean
This data type represents logical entities. Boolean represents one of two values: true or false. It is easier to think of it as a yes/no switch. For example,

```js
const dataChecked = true;
const valueCounted = false;
```

***

### 5. Null
In JavaScript, null is a special value that represents an empty or unknown value. For example:

```js
let age = null; //since we do not know what the age is..
console.log("age is " + age);
```
The code above suggests that the age variable is empty at the moment and may have a value later.

JavaScript defines that null is equal to undefined as follows:

```js
console.log(null == undefined); // true
```

***

### 6. Undefined 
The undefined type is a primitive type that has only one value undefined. By default, when a variable is declared but not initialized, it is assigned the value of undefined.

Consider the following example:

```js
let counter;
console.log(counter);        // undefined
console.log(typeof counter); // undefined
```

In this example, the counter is a variable. Since counter hasn’t been initialized, it is assigned the value undefined. The type of counter is also undefined.

It’s important to note that the typeof operator also returns undefined when you call it on a variable that hasn’t been declared:

```js
console.log(typeof undeclaredVar); // undefined
```

**Undefined vs. undeclared variables**

It’s important to distinguish between undefined and undeclared variables.

An undefined variable is a variable that has been declared but has not been initialized with a value. For example:

```js
let message;
console.log(message); // undefined
```

In this example, the message variable is declared but not initialized. Therefore, the message variable is undefined.

In contrast, an undeclared variable is a variable that has not been declared. For example:

```js
console.log(counter);
```

```js
Output:

console.log(counter);

            ^
ReferenceError: counter is not defined
```

Code language: JavaScript (javascript) In this example, the counter variable has not been declared. Hence, accessing it causes a ReferenceError.

***

### 7. typeof
To find the type of a variable, you can use the typeof operator. For example,

```js
const name = 'ram';
typeof(name); // returns "string"

const number = 4;
typeof(number); //returns "number"

const valueChecked = true;
typeof(valueChecked); //returns "boolean"

const a = null;
typeof(a); // returns "object"
```

Notice that typeof returned "object" for the null type. This is a known issue in JavaScript since its first release.

***

## Non-primitive data sub-types

### 1. Objects:
The definition of objects is created by the user for a defined purpose. The properties of an object define its characteristics. Object properties can be accessed with a simple dot-notation:

```js
var Car = new Object();
Car.make = 'BMW';   //properties
Car.color = 'BLACK';
Car.year = 1999;

console.log("My car was created in : " + Car.year); // "My car was created in : 1999"
```
***

### 2. Arrays:
We use arrays to store data in consecutive memory locations; this helps to access them with ease, and it saves time in searching for the relevant data.

```js
var cars = [" Merc ", " Honda ", " BMW "];
console.log("Our cars are :" + cars); //display an array of cars
```

***
