### JavaScript Data Types
Data types are used to classify one particular type of data in programming languages. For instance, a number and a string of characters are different types of data that will be treated differently by JavaScript.

***

JavaScript is a dynamically typed language. It means that a variable doesn’t associate with a type. In other words, a variable can hold a value of different types. For example:


```js
let counter = 120; // counter is a number
counter = false;   // counter is now a boolean
counter = "foo";   // counter is now a string
```

To get the current type of the value that the variable stores, you use the typeof operator:

```js
let counter = 120;
console.log(typeof(counter)); // "number"

counter = false; 
console.log(typeof(counter)); // "boolean"

counter = "Hi";
console.log(typeof(counter)); // "string"
```

***

### The string type
In JavaScript, a string is a sequence of zero or more characters. A string literal begins and ends with either a single quote(') or a double quote (").

A string that begins with a double quote must end with a double quote. Likewise, a string that begins with a single quote must also end with a single quote:

```js
let greeting = 'Hi';
let message  = "Bye";
```

If you want to single quote or double quotes in a literal string, you need to use the backslash to escape it. For example:

```js
let message = 'I\'m also a valid string'; // use \ to escape the single quote (')
```

JavaScript strings are immutable. This means that it cannot be modified once created. However, you can create a new string from an existing string. For example:

```js
let str = 'JavaScript';
str = str + ' String';
```

In this example:

* First, declare the str variable and initialize it to a string of 'JavaScript'.

* Second, use the + operator to combine 'JavaScript' with ' String' to make its value as 'Javascript String'.

Behind the scene, the JavaScript engine creates a new string that holds the new string 'JavaScript String' and destroys the original strings 'JavaScript' and ' String'.

***

### The number type
JavaScript uses the number type to represent both integer and floating-point numbers.

The following statement declares a variable and initializes its value with an integer:

```js
let num = 100;
```
To represent a floating-point number, you include a decimal point followed by at least one number. For example:

```js
let price= 12.5; 
let discount = 0.05;
```

Note that JavaScript automatically converts a floating-point number into an integer number if the number appears to be a whole number.

The reason is that Javascript always wants to use less memory since a floating-point value uses twice as much memory as an integer value. For example:

```js
let price = 200.00; // interpreted as an integer 200
```

To get the range of the number type, you use Number.MIN_VALUE and Number.MAX_VALUE. For example:

```js
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
```
Also, you can use Infinity and -Infinity to represent the infinite number. For example:

```js
console.log(Number.MAX_VALUE + Number.MAX_VALUE); // Infinity
console.log(-Number.MAX_VALUE - Number.MAX_VALUE); // -Infinity
```

***

### NaN
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

### The boolean type
The boolean type has two literal values: true and false in lowercase. The following example declares two variables that hold the boolean values.

```js
let inProgress = true;
let completed = false;

console.log(typeof completed); // boolean
```

JavaScript allows values of other types to be converted into boolean values of true or false.

To convert a value of another data type into a boolean value, you use the Boolean() function. The following table shows the conversion rules:

```js
For example:

console.log(Boolean('Hi'));// true
console.log(Boolean(''));  // false

console.log(Boolean(20));  // true
console.log(Boolean(Infinity));  // true
console.log(Boolean(0));  // false

console.log(Boolean({foo: 100}));  // true on non-empty object
console.log(Boolean(null));// false
```
***

### The undefined type
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

### The null type
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
