# JavaScript for... of Loop

The for...of loop was introduced in the later versions of JavaScript ES6.

The for..of loop in JavaScript allows you to iterate over iterable objects (arrays, sets, maps, strings etc).

***

### JavaScript for...of loop
The syntax of the for...of loop is:
```js
for (element of iterable) {
    // body of for...of
}
```

Here,

• iterable - an iterable object (array, set, strings, etc).

• element - items in the iterable

In plain English, you can read the above code as: for every element in the iterable, run the body of the loop.

***

### JavaScript for of loop examples
Let’s take a look at some examples of using the for...of loop.

**1) Iterating over arrays**
The following example shows how to use the for...of to iterate over elements of an array:

```js
let scores = [80, 90, 70];

for (let score of scores) {
    score = score + 5;
    console.log(score);
}
```

Output:

```js
85
95
75
```

In this example, the for...of iterates over every element of the scores array. It assigns every element of the scores array to the variable score in each iteration.

If you don’t change variable inside the loop, you should use the const keyword instead of the let keyword as follows:

```js
let scores = [80, 90, 70];

for (const score of scores) {
    console.log(score);
}
```

Output:

```js
80
90
70
```

Another example of The for..of loop can be used to iterate over an array:

```js
// array
const students = ['John', 'Sara', 'Jack'];

// using for...of
for ( let element of students ) {

// display the values
    console.log(element);
}
```

Output
```js
John
Sara
Jack
```

In the above program, the for...of loop is used to iterate over the students array object and display all its values.

***

**2) Iterating over strings**

The following example uses the for...of loop to iterate over characters of a string.

```js
let str = 'abc';
for (let c of str) {
    console.log(c);
}
```

Output:

```js
a
b
c
```

***