# Variations of Data Types
There are 2 kinds of data types, each of which are further divided into sub-types.

* Primitive data types: Data types which are pre-defined and supported by the programming language.

* Non-primitive data types: Data types which are created by the user and not pre-defined by the language itself.

![Datatypes][datatypes]

[datatypes]:https://usemynotes.com/wp-content/uploads/2021/04/Types-of-data-types-in-JS.jpg

***

## Primitive data sub-types

### 1. String:
Strings are used to store data that involves characters, like names or addresses. You can perform operations like string concatenation, in JavaScript.

```js
const name = 'Peter';
const surname = "Parker";
const fullName = ` ${name} ${surname}`;

console.log(fullName); // Peter Parker
```
***

### 2. Number:
Number type stands for both integers and floating points. Many mathematical operations are carried out using these numbers.

```js
let age = 22;
age = age+1;  // mathematical operation 

console.log("Your age next year is : " + age) // "Your integer number is : 23"
```
***

### 3. Boolean:
This data type represents logical entities. Boolean represents one of two values: true or false. It is easier to think of it as a yes/no switch. For example,

```js
const dataChecked = true;
const valueCounted = false;
```

***
