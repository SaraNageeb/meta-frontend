# Variables
In any programming language, we use variables to store information or data. 
The Data might be any data that is strings, number, boolean etc. 
As Javascript is Dynamically Typed programming were we don’t specify the type of value to be stored in it.

![Variables][variables]

[variables]:https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables/boxes.png
***

**Basic Syntax**

```js
let someName = value;
```

```js
let year = 1995;
// Make me a variable called "year" and give it the value of 1985
```

**Recall Values**

```js
let brazil = 5;
let argentina = 2;

brazil + argentina // 7
```

**Updating or Changing Values**

Once a variable has been initialized with a value, you can change (or update) that value by giving it a different value.


Updating by incrementing a value:

```js
// Add 1 to brazil:
brazil = brazil +1;
brazil // 6

```

**Changing a value:**

```js
// var variables can be re-declared and updated
// This means that we can do this within the same scope and won't get an error.

var favourite_fruit = "Apple";
console.log(favourite_fruit); //Apple

// re-declared
var favourite_fruit = "Pear";
console.log(favourite_fruit); //Pear

// updated
favourite_fruit = "Kiwi";
console.log(favourite_fruit); //Kiwi
```

<br>

**Variable Naming and Conventions**
Here are six rules you must always follow when giving a variable a name:

1. The name must begin with a letter, dollar sign or underscore. It must not start with a number.
2. The name can contain letters, numbers, dollar sign or an underscore.
3. You cannot use **keywords** or **reserved** words.
4. All variables are case sensitive, so score and Score would be different variable names.
5. Use a name that describes the kind of information that the variable stores. For example, fisrtName might be used to store a person's name first name, lastName for their last name and age for their age.
6. If your variable name is made up of more than one word, use a capital letter for the first letter of every word after the first word. For example, firstName rather than firstname.

***
