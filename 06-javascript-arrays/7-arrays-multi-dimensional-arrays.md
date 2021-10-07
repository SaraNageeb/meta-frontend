# Introduction to JavaScript multidimensional array
JavaScript does not provide the multidimensional array natively. However, you can create a multidimensional array by defining an array of elements, where each element is also another array.

For this reason, we can say that a JavaScript multidimensional array is an array of arrays. The easiest way to define a multidimensional array is to use the array literal notation.

To declare an empty multidimensional array, you use the same syntax as declaring one-dimensional array:

```js
let activities = [];
```

The following example defines a two-dimensional array named activities:

```js
let activities = [
    ['Work', 9],
    ['Eat', 1],
    ['Commute', 2],
    ['Play Game', 1],
    ['Sleep', 7]
];
```

In the activities array, the first dimension represents the activity and the second one shows the number of hours spent per day for each.

To show the activities array in the console, you use the console.table() method as follows:

```js
console.table(activities);
```

The following illustrates the output:

```js
┌─────────┬─────────────┬───┐
│ (index) │      0      │ 1 │
├─────────┼─────────────┼───┤
│    0    │   'Work'    │ 9 │
│    1    │    'Eat'    │ 1 │
│    2    │  'Commute'  │ 2 │
│    3    │ 'Play Game' │ 1 │
│    4    │   'Sleep'   │ 7 │
└─────────┴─────────────┴───┘
```

Note that the (index) column is for the illustration that indicates the indices of the inner array.

To access an element of the multidimensional array, you first use square brackets to access an element of the outer array that returns an inner array; and then use another square bracket to access the element of the inner array.

The following example returns the second element of the first inner array in the activities array above:

```js
console.log(activities[0][1]); // 9
```

### Adding elements to the JavaScript multidimensional array
You can use the Array methods such as push() and splice() to manipulate elements of a multidimensional array.

For example, to add a new element at the end of the multidimensional array, you use the push() method as follows:

```js
activities.push(['Study',2]);

console.table(activities);

```

```js
┌─────────┬─────────────┬───┐
│ (index) │      0      │ 1 │
├─────────┼─────────────┼───┤
│    0    │   'Work'    │ 9 │
│    1    │    'Eat'    │ 1 │
│    2    │  'Commute'  │ 2 │
│    3    │ 'Play Game' │ 1 │
│    4    │   'Sleep'   │ 7 │
│    5    │   'Study'   │ 2 │
└─────────┴─────────────┴───┘
```

***

### Removing elements from the JavaScript multidimensional array
To remove an element from an array, you use the pop() or splice() method.

For example, the following statement removes the last element of the activities array.

```js
activities.pop();

console.table(activities);
```

Output:


```js
┌─────────┬─────────────┬───┐
│ (index) │      0      │ 1 │
├─────────┼─────────────┼───┤
│    0    │   'Work'    │ 9 │
│    1    │    'Eat'    │ 1 │
│    2    │  'Commute'  │ 2 │
│    3    │ 'Play Game' │ 1 │
│    4    │   'Sleep'   │ 7 │
└─────────┴─────────────┴───┘
```

***