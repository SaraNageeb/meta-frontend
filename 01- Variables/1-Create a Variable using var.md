# Create a Variable: var
There were a lot of changes introduced in the ES6 version of JavaScript in 2015. One of the biggest changes was two new keywords, let and const, to create, or declare, variables. Prior to the ES6, programmers could only use the var keyword to declare variables.

```js
var myName = 'Marlon';
console.log(myName);
```

```
// Output: Marlon
```

Let’s consider the example above:

1. var, short for variable, is a JavaScript keyword that creates, or declares, a new variable.
<br>
2. myName is the variable’s name. Capitalizing in this way is a standard convention in JavaScript called camel casing. In camel casing you group words into one, the first word is lowercase, then every word that follows will have its first letter uppercased. (e.g. camelCaseEverything).
<br>
3. = is the assignment operator. It assigns the value ('Arya') to the variable (myName).
<br>
4. 'Marlon' is the value assigned (=) to the variable myName. You can also say that the myName variable is initialized with a value of 'Marlon'.
<br>
5. After the variable is declared, the string value 'Marlon' is printed to the console by referencing the variable name: console.log(myName).
<br>

**There are a few general rules for naming variables:**

* Variable names cannot start with numbers.
<br>
* Variable names are case sensitive, so myName and myname would be different variables. It is bad practice to create two variables that have the same name using different cases.
<br>
* Variable names cannot be the same as keywords. For a comprehensive list of keywords check out MDN’s keyword documentation.