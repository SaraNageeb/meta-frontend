# JavaScript for... of Loop

The for...of loop was introduced in the later versions of JavaScript ES6.

The for..of loop in JavaScript allows you to iterate over iterable objects (arrays, sets, maps, strings etc).

```
For Lopp - Usually with iterables (array or strings)
For in - Returns the index or key (string, array or objects)
For of - Returns the value itself (iterables, arrays or strings)
```

***

### JavaScript for...of loop
The syntax of the for...of loop is:
```js
for (element of iterable) {
    // body of for...of
}
```

Here:

• **iterable** - an iterable object (array, set, strings, etc).

• **element** - items in the iterable

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

```js
Output:

John
Sara
Jack
```

In the above program, the for...of loop is used to iterate over the students array object and display all its values.


***

### for...of with Strings
You can use for...of loop to iterate over string values. For example:

```js
// string
const string = 'code';

// using for...of loop
for (let i of string) {
    console.log(i);
}
```

```js
Output
c
o
d
e
```

***

### for...of Vs for...in

| for...of	  | for...in |
| ----------- | ----------- |
| The for...of loop is used to iterate through the values of an iterable      | The for...in loop is used to iterate through the keys of an object.       |
| The for...of loop cannot be used to iterate over an object.	   | You can use for...in to iterate over an iterable such arrays and strings but you should avoid using for...in for iterables.        |

***