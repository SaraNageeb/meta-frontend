# JavaScript forEach
it helps you iterate (loop) over array items one by one. Here's an example:

```js
const apps = ["Calculator", "Messaging", "Clock"];

apps.forEach(app => {
    console.log(app);
});
```

If the => is new to you, that's called an arrow function. In this particular example, you will not see a difference between using an arrow function and a regular function, so here's how you can iterate without an arrow function:

```js
const apps = ["Calculator", "Messaging", "Clock"];

apps.forEach(function(app) {
    console.log(app);
});
```

The output (in the console) of both of these snippets of code is the following:

```js
"Calculator"
"Messaging"
"Clock"
```

Notice how the callback function passed to the forEach is being called for every single element of the array.

**Best practices**

A couple of best practices to keep in mind:

* Try to have the name of the array in plural (example: apps)
* Then the first argument inside the forEach should be in singular (example: app)
* Always start with a console.log(item) as this helps you visualise the items that you just iterated over (one by one).

You can also practise reading this in English as following:

We have an apps array and we iterate over it one by one. Now we can start thinking about a single item of that array, which is one app

***

### Iterate over array of objects
A common data structure that you will be working with is arrays of objects, for example:

```js
const users = [{
    id: 1,
    name: "Alex"
}, {
    id: 2,
    name: "Sam"
}];
```

Iterating over this array is the same as above, however keep in mind that the item you will get will be an object.

```js
users.forEach(user => {
     console.log(user); // an object
     console.log(user.id);
     console.log(user.name);
});
```

Because every user (or item) is an object, you can access the keys id and name by calling user.id and user.name.

***

### Using the index in the forEach

You can also access the index of every item of an array inside the callback passed to forEach.

```js
const apps = ["Calculator", "Messaging", "Clock"];

apps.forEach(function(app, index) {
    console.log(index, app);
});
```

This will log:

```js
0 "Calculator"

1 "Messaging"

2 "Clock"
```

***

### forEach function signature
Now that we've seen the first 2 arguments: callback and index, let's take a look at the full function signature:

array.forEach(callback(item, index, array))
As you can see the callback receives the current item, followed by the index and finally it also receives the array that we have called forEach on.

Here's an example:

```js
const people = ["Sam", "Alex"]

people.forEach((person, index, array) => {
	console.log(array)
});
```

Would output:

```js
["Sam", "Alex"]

["Sam", "Alex"]
```

So the array argument allows you to get the array that we called forEach on, in case you don't have access to it in the current scope.

***

### Some examples

1. Loop over the numeric array, and print evens numbers.

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

numbers.forEach(function (el) {
    if (el % 2 === 0) {
        console.log(el)
    }
});
```

2. Loop over the array, and print movie title and score out of 100

```js
const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

movies.forEach(function (movie) {
    console.log(`${movie.title} - ${movie.score}/100`)
});
```