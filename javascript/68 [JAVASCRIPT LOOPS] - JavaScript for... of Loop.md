# JavaScript for...of loop
The for...in statement is useful for iterating over object properties, but to iterate over iterable objects like arrays and strings, we can use the for...of statement. 

The for...of statement is a newer feature as of ECMAScript 6. ECMAScript (or ES) is a scripting-language specification created to standardize JavaScript.

***

The syntax of the for...of loop is:

```js
for (element of iterable) {
    // body of for...of
}
```

Here,

* iterable - an iterable object (array, set, strings, etc).
<br>
* element - items in the iterable
<br>

In plain English, you can read the above code as: for every element in the iterable, run the body of the loop.

***

### for...of with Arrays
The for..of loop can be used to iterate over an array. For example,

```js
// array
const students = ['John', 'Sara', 'Jack'];

// using for...of
for ( let element of students ) {

    // display the values
    console.log(element);
}
```

```
Output

John
Sara
Jack
```

In the above program, the for...of loop is used to iterate over the students array object and display all its values.

***

### for...of with Strings
You can use for...of loop to iterate over string values. For example,

```js
// string
const string = 'code';

// using for...of loop
for (let i of string) {
    console.log(i);
}
```

```
Output

c
o
d
e
```

***


