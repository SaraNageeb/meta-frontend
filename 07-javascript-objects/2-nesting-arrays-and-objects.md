# Creating an array of objects

Let's take a look at this set of cars:

![Array of objects](/img/arrays-object-cars.jpeg)

We can represent it as an array this way:

```js
let cars = [
  {
    color: "purple",
    type: "minivan",
    registration: new Date('2017-01-03'),
    capacity: 7
  },
  {
    color: "red",
    type: "station wagon",
    registration: new Date('2018-03-03'),
    capacity: 5
  }
]
```

Arrays of objects don't stay the same all the time. We almost always need to manipulate them. So let's take a look at how we can add objects to an already existing array.

***

### To add an object at the first position, use Array.unshift.

![Array of objects](/img/arrays-object-cars1.jpeg)

To add an object at the first position, use Array.unshift.

```js
let car = {
  color: "red",
  type: "cabrio",
  registration: new Date('2016-05-02'),
  capacity: 2
}
cars.unshift(car);
```

***

### Add a new object at the end - Array.push

![Array of objects](/img/arrays-object-cars2.jpeg)

```js
let car = {
 color: "red",
 type: "cabrio",
 registration: new Date('2016-05-02'),
 capacity: 2
}
cars.push(car);
```

***

### Add a new object in the middle - Array.splice

![Array of objects](/img/arrays-object-cars3.jpeg)

To add an object in the middle, use Array.splice. This function is very handy as it can also remove items. Watch out for its parameters:

```js
Array.splice(
  {index where to start},
  {how many items to remove},
  {items to add}
);
```

So if we want to add the red Volkswagen Cabrio on the fifth position, we'd use:

```js
let car = {
  color: "red",
  type: "cabrio",
  registration: new Date('2016-05-02'),
  capacity: 2
}
cars.splice(4, 0, car);
```

***

### Looping through an array of objects
JavaScript provides many functions that can solve your problem without actually implementing the logic in a general cycle. Let's take a look.

**Find an object in an array by its values - Array.find**

Let's say we want to find a car that is red. We can use the function Array.find.

![Array of objects](/img/arrays-object-cars4.jpeg)

```js
let car = cars.find(car => car.color === "red");
```

This function returns the first matching element:

```js
console.log(car);
// output:
// {
//   color: 'red',
//   type: 'station wagon',
//   registration: 'Sat Mar 03 2018 01:00:00 GMT+0100 (GMT+01:00)',
//   capacity: 5
// }
```

t's also possible to search for multiple values:

```js
let car = cars.find(car => car.color === "red" && car.type === "cabrio");
```

In that case we'll get the last car in the list.

***

### Get multiple items from an array that match a condition - Array.filter
The Array.find function returns only one object. If we want to get all red cars, we need to use Array.filter.

![Array of objects](/img/arrays-object-cars5.jpeg)

```js
let redCars = cars.filter(car => car.color === "red");
console.log(redCars);
// output:
// [
//   {
//     color: 'red',
//     type: 'station wagon',
//     registration: 'Sat Mar 03 2018 01:00:00 GMT+0100 (GMT+01:00)',
//     capacity: 5
//   },
//   {
//     color: 'red',
//     type: 'cabrio',
//     registration: 'Sat Mar 03 2012 01:00:00 GMT+0100 (GMT+01:00)',
//     capacity: 2
//   }
// ]
```

***

### Arrays + Objects

![Array + objects](/img/arrays-and-objects.png)

***