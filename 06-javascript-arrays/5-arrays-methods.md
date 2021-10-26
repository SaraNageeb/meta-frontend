# Useful Array Methods

Examples of most used array methods:

***

### The join() array method
The join() method joins all the elements of the array using a separator and returns a string. 
The default separator used for joining is comma(,), but you can specify the separator:

```js
const daysInWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

console.log(daysInWeek.join());
// expected output: "Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday"

console.log(daysInWeek.join(''));
// expected output: "MondayTuesdayWednesdayThursdayFridaySaturdaySunda"

console.log(daysInWeek.join('-'));
// expected output: "Monday-Tuesday-Wednesday-Thursday-Friday-Saturday-Sunday"

console.log(daysInWeek.join('*'));
// expected output: "Monday*Tuesday*Wednesday*Thursday*Friday*Saturday*Sunday"
```

***

### The includes() array method
You can determine the presence on an element in an array using the includes() method. If the element is found, the method returns true, and false otherwise.

**includes() is case sensitive.**

```js
const daysInWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

console.log(daysInWeek.includes('Monday'));
// expected output: true

console.log(daysInWeek.includes('Tuesday'));
// expected output: true

console.log(daysInWeek.includes('monday'));
// expected output: false

console.log(daysInWeek.includes('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'));
// expected output: true
```

***

### The indexOf() array method
You may want to know the index position of an element in array. You can use the indexOf() method to get that. It returns the index of the first occurrence of an element in the array. If an element is not found, the indexOf() method returns -1.

**indexOf() is case sensitive.**

```js
const daysInWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

console.log(daysInWeek.indexOf('Monday'));
// expected output: 0

console.log(daysInWeek.indexOf('Friday'));
// expected output: 4

console.log(daysInWeek.indexOf('tuesday'));
// expected output: -1
```

There is another method lastIndexOf() that helps you find the index of the last occurrence of an element in the array. Like indexOf(), lastIndexOf() also returns -1 if the element is not found.

```js
const daysInWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

console.log(daysInWeek.lastIndexOf('Tuesday'));
// expected output: 1

console.log(daysInWeek.lastIndexOf('Saturday'));
// expected output: 5

console.log(daysInWeek.lastIndexOf('tuesday'));
// expected output: -1
```

***

### The sort() array method
The sort() method is probably one of the most often used array methods. 
The default sort() method converts the element types into strings and then sorts them. The default sorting order is ascending. The sort() method changes the original array.

```js
const daysInWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

console.log(daysInWeek.sort());
// Expected Result: ["Friday", "Monday", "Saturday", "Sunday", "Thursday", "Tuesday", "Wednesday"]
```

***

### The isArray() method
You can determine if a value is an array using the Array.isArray(value) method. The method returns true if the passed value is an array.

```js
Array.isArray([1, 2, 3]);  // true
Array.isArray({foo: 123}); // false
Array.isArray('foobar');   // false
Array.isArray(undefined);  // false
```

***

### The concat() array method
The concat() method merges one or more arrays and returns a merged array. It is an immutable method. This means it doesn't change (mutate) existing arrays.

Let's concat two arrays.

```js
const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const weekEndDays = ['Saturday', 'Sunday'];

const daysInWeek = weekDays.concat(weekEndDays);

console.log(daysInWeek);
// expected result: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
```

***

### The reverse() array method
As the name suggests, the reverse() method reverses the elements' positions in the array so that the last element goes into the first position and the first one to the last.

```js
const daysInWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

console.log(daysInWeek.reverse());
// Expected Result: ["Sunday", "Saturday", "Friday", "Thursday", "Wednesday", "Tuesday", "Monday"]
```
The reverse() method modifies the original array.

***
