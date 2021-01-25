# JavaScript Basics

![JavaScript%20Basics%204c1f85e769f54f048d668b786fbde611/Untitled.png](JavaScript%20Basics%204c1f85e769f54f048d668b786fbde611/Untitled.png)

Introduction to the basics of JavaScript

# Introduction to JavaScript Basics

## JavaScript Primitive Data Types

JavaScript variables can hold many data types: numbers, strings, boolean and more.

### **Numbers**

The Number data type is used to represent positive or negative numbers with or without decimal place.

```jsx
var price = 34.00;     // Written with decimals
var age = 34;        // Written without decimals
```

### Arithmetic Operator

JavaScript contains the following mathematical operators, which you can use with numbers.

You may remember some from math class.

![JavaScript%20Basics%204c1f85e769f54f048d668b786fbde611/Screenshot_2021-01-14_at_22.50.32.png](JavaScript%20Basics%204c1f85e769f54f048d668b786fbde611/Screenshot_2021-01-14_at_22.50.32.png)

### **Strings**

The string data type is used to represent textual data. Strings are created using single or double quotes surrounding one or more characters, as shown below:

```jsx
var carName1 = "Volvo XC60";   // Using double quotes
var carName2 = 'Volvo XC60';   // Using single quotes
```

### **Boolean**

 ****Booleans can only have two values: true or false.

```jsx
var x = 5;
var y = 5;
var z = 6;
(x == y)       // Returns true
(x == z)       // Returns false
```

### **Null**

### **Undefined**

- **typeof**: The typeof operator returns a string indicating the type of the unevaluated operand.

```jsx
console.log(typeof 42);
// expected output: "number"

console.log(typeof 'blubber');
// expected output: "string"

console.log(typeof true);
// expected output: "boolean"

console.log(typeof undeclaredVariable);
// expected output: "undefined"
```

## Variables

JavaScript variables are containers for storing data values.

JavaScript uses reserved keyword **var** to declare a variable. A variable must have a unique name. You can assign a value to a variable using **equal to** (=) operator when you declare it or before using it.

**Example: Variable Declaration & Initialization**

```jsx
var one = 1; // variable stores numeric value

var two = 'two';  // variable stores string value

var three;  // declared a variable without assigning a value
```

**Example: Multiple Variables in a Single Line**

```jsx
var one = 1, two = 'two', three;
```

### Rules For Naming Variables

Here are six rules you must always follow when giving a variable a name:

1. The name must begin with a letter, dollar sign or underscore. It must not start with a number.
2. The name can contain letters, numbers, dollar sign or an underscore.
3. You cannot use **keywords** or **reserved** words**.**
4. All variables are case sensitive, so score and Score would be different variable names.
5. Use a name that describes the kind of information that the variable stores. For example, fisrtName might be used to store a person's name first name, lastName for their last name and age for their age.
6. If your variable name is made up of more than one word, use a capital letter for the first letter of every word after the first word. For example, firstName rather than firstname.

[JavaScript%20Basics%204c1f85e769f54f048d668b786fbde611/WDBJavaScriptIntroduction.pdf](JavaScript%20Basics%204c1f85e769f54f048d668b786fbde611/WDBJavaScriptIntroduction.pdf)