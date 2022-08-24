# JavaScript Arrays
An array is an object that can store multiple values at once. For example,

```js
const words = ['hello', 'world', 'welcome'];
```

Here, ```words``` is an array. The array is storing 3 values.

***

### Create an Array
The easiest way to create an array is by using an array literal []. For example,

```js
const array1 = ["eat", "sleep"];
```

Here are more examples of arrays:

```js
// empty array
const myList = [ ];

// array of numbers
const numberArray = [ 2, 4, 6, 8];

// array of strings
const stringArray = [ 'eat', 'work', 'sleep'];

// array with mixed data types
const newData = ['work', 'exercise', 1, true];
```

You can also store arrays, functions and other objects inside an array. For example,

```js
const newData = [
    {'task1': 'exercise'},
    [1, 2 ,3],
    function hello() { console.log('hello')}
];
```

***

### Access Elements of an Array
You can access elements of an ```array``` using indices (0, 1, 2 …). For example,

```js
const myArray = ['h', 'e', 'l', 'l', 'o'];

// first element
console.log(myArray[0]);  // "h"

// second element
console.log(myArray[1]); // "e"
```

![Arrays][arrays]

[arrays]:https://cdn.programiz.com/sites/tutorial2program/files/javascript-array-indexing.png

***

### Add an Element to an Array
You can use the built-in method ```push()``` and ```unshift()``` to add elements to an array.

The ```push()``` method adds an element at the end of the array. For example,

```js
let dailyActivities = ['eat', 'sleep'];

// add an element at the end
dailyActivities.push('exercise');

console.log(dailyActivities); //  ['eat', 'sleep', 'exercise']
```

The ```unshift()``` method adds an element at the beginning of the array. For example,

```js
let dailyActivities = ['eat', 'sleep'];

//add an element at the start
dailyActivities.unshift('work'); 

console.log(dailyActivities); // ['work', 'eat', 'sleep']
```

***

### Change the Elements of an Array
You can also add elements or change the elements by accessing the index value.

```js
let dailyActivities = [ 'eat', 'sleep'];

// this will add the new element 'exercise' at the 2 index
dailyActivities[2] = 'exercise';

// this will update the element at the index 1
dailyActivities[1] = 'work';

console.log(dailyActivities); // ['eat', 'work', 'exercise']
```

Suppose, an ```array``` has two elements. If you try to add an element at index 3 (fourth element), the third element will be undefined. For example,

```js
let dailyActivities = [ 'eat', 'sleep'];

// this will add the new element 'exercise' at the 3 index
dailyActivities[3] = 'exercise';

console.log(dailyActivities); // ["eat", "sleep", undefined, "exercise"]
```

Basically, if you try to add elements to high indices, the indices in between will have undefined value.
***

### Remove an Element from an Array
You can use the ```pop()``` method to remove the last element from an array. The ```pop()``` method also returns the returned value. For example,

```js
let dailyActivities = ['work', 'eat', 'sleep', 'exercise'];

// remove the last element
dailyActivities.pop();
console.log(dailyActivities); // ['work', 'eat', 'sleep']

// remove the last element from ['work', 'eat', 'sleep']
const removedElement = dailyActivities.pop();

//get removed element
console.log(removedElement); // 'sleep'
console.log(dailyActivities);  // ['work', 'eat']
```

If you need to remove the first element, you can use the ```shift()``` method. The ```shift()``` method removes the first element and also returns the removed element. For example,

```js
let dailyActivities = ['work', 'eat', 'sleep'];

// remove the first element
dailyActivities.shift();

console.log(dailyActivities); // ['eat', 'sleep']
```

***

### Array length
You can find the length of an element (the number of elements in an array) using the length property. For example,

```js
const dailyActivities = [ 'eat', 'sleep'];

// this gives the total number of elements in an array
console.log(dailyActivities.length); // 2
```

***

### Array Methods
In JavaScript, there are various array methods available that makes it easier to perform useful calculations.

Some of the commonly used JavaScript array methods are:

| Method      | Description                                                                            |
|-------------|----------------------------------------------------------------------------------------|
| concat()    | joins two or more arrays and returns a result                                          |
| indexOf()   | searches an element of an array and returns its position                               |
| find()      | returns the first value of an array element that passes a test                         |
| findIndex() | returns the first index of an array element that passes a test                         |
| forEach()   | calls a function for each element                                                      |
| includes()  | checks if an array contains a specified element                                        |
| sort()      | sorts the elements alphabetically in strings and in ascending order                    |
| slice()     | selects the part of an array and returns the new array                                 |
| splice()    | removes or replaces existing elements and/or adds new elements                         |

Example: JavaScript Array Methods

```js
let dailyActivities = ['sleep', 'work', 'exercise']
let newRoutine = ['eat'];

// sorting elements in the alphabetical order
dailyActivities.sort();
console.log(dailyActivities); // ['exercise', 'sleep', 'work']

//finding the index position of string
const position = dailyActivities.indexOf('work');
console.log(position); // 2

// slicing the array elements
const newDailyActivities = dailyActivities.slice(1);
console.log(newDailyActivities); // [ 'sleep', 'work']

// concatenating two arrays
const routine = dailyActivities.concat(newRoutine);
console.log(routine); // ["exercise", "sleep", "work", "eat"]
```

***

### Array Concat Overview
The ```concat()``` method returns a new array by merging two or more values/arrays.

```js
let primeNumbers = [2, 3, 5, 7]
let evenNumbers = [2, 4, 6, 8]

// join two arrays 
let joinedArrays = primeNumbers.concat(evenNumbers);
console.log(joinedArrays);

/* Output:
[
  2, 3, 5, 7,
  2, 4, 6, 8 
]
*/
```

#### Example 1: Using concat() method

```js
var languages1 = ["JavaScript", "Python", "Java"];
var languages2 = ["C", "C++"];

// concatenating two arrays
var new_arr = languages1.concat(languages2);
console.log(new_arr); // [ 'JavaScript', 'Python', 'Java', 'C', 'C++' ]

// concatenating a value and array
var new_arr1 = languages2.concat("Lua", languages1);
console.log(new_arr1); // [ 'C', 'C++', 'Lua', 'JavaScript', 'Python', 'Java' ]
```

Output

```
[ 'JavaScript', 'Python', 'Java', 'C', 'C++' ]
[ 'C', 'C++', 'Lua', 'JavaScript', 'Python', 'Java' ]
```

***

#### Array Reverse Overview
The ```reverse()``` method returns the array in reverse order.

```js
let numbers = [1, 2, 3, 4, 5];

// reversing the numbers array
let reversedArray = numbers.reverse();

console.log(reversedArray);
```

```
// Output: [ 5, 4, 3, 2, 1 ]
```

#### Example 1: Using reverse() Method

```js
let languages = ["JavaScript", "Python", "C++", "Java", "Lua"];

// reversing the order of languages array
let reversedArray = languages.reverse();

console.log("Reversed Array: ", reversedArray);

// modifies the original array
console.log("Original Array: ", languages);
```

Output

```js
Reversed Array: [ 'Lua', 'Java', 'C++', 'Python', 'JavaScript' ]
Original Array: [ 'Lua', 'Java', 'C++', 'Python', 'JavaScript' ]
```

In the above example, we have used the ```reverse()``` method to reverse the languages array.

```languages.reverse()``` reverses the order of each element in the array and returns the reversed array.

Since the method modifies the original array, both languages and ```reversedArray``` hold the same value.

<br>

**Example 2: reverse() Method with Spread Operator**

In Example 1, we saw how the ```reverse()``` method modifies the original array.

But if we use the **```spread operator(...)```** in the array along with the ```reverse()``` method, it does not modify the original array. For example:

```js
let languages = ["JavaScript", "Python", "C++", "Java", "Lua"];

// using spread operator to reverse the array
let reversedArray = [...languages].reverse();

console.log("Reversed Array:", reversedArray);

// modifies the original array
console.log("Original Array:", languages);
```

Output

```js
Reversed Array: [ 'Lua', 'Java', 'C++', 'Python', 'JavaScript' ]
Original Array: [ 'JavaScript', 'Python', 'C++', 'Java', 'Lua' ]
```

***

#### Array Join Overview
The ```join()``` method returns a new string by concatenating all of the elements in an array, separated by a specified separator.

```js
let message = ["JavaScript", "is", "fun."];

// join all elements of array using space
let joinedMessage = message.join(" ");
console.log(joinedMessage);

// Output: JavaScript is fun.
```

**Example: Using join() method**

```js
var info = ["Terence", 28, "Kathmandu"];

var info_str = info.join(" | ");

// join() does not change the original array
console.log(info); // [ 'Terence', 28, 'Kathmandu' ]

// join() returns the string by joining with separator
console.log(info_str); // Terence | 28 | Kathmandu
```

Here, we can see that the ```join()``` method converts all the array elements into a string and separates each element by the specified separator.

***

#### Array indexOf() Overview
The ```indexOf()``` method returns the first index of occurance of an array element, or -1 if it is not found.

```js
let languages = ["Java", "JavaScript", "Python", "JavaScript"];

// get the index of the first occurrence of "JavaScript"
let index = languages.indexOf("JavaScript");
console.log(index);

// Output: 1
```

**Example 1: Using indexOf() method**

```js
var priceList = [10, 8, 2, 31, 10, 1, 65];

// indexOf() returns the first occurance
var index1 = priceList.indexOf(31);
console.log(index1); // 3

var index2 = priceList.indexOf(10);
console.log(index2); // 0

// second argument specifies the search's start index
var index3 = priceList.indexOf(10, 1);
console.log(index3); // 4

// indexOf returns -1 if not found
var index4 = priceList.indexOf(69.5);
console.log(index4); // -1
```

***

#### Array findIndex() Overview
The ```findIndex()``` method returns the index of the ```first element``` in the array that satisfies the provided callback function. Otherwise, it returns -1, indicating that no element passed the test. 

```js
// function that returns odd number
function isOdd(element) {
  return element % 2 !== 0;
}

// defining an array of integers
let numbers = [2, 8, 1, 3, 4];

// returns the index of the first odd number in the array
let firstOdd = numbers.findIndex(isOdd);

console.log(firstOdd); // 2
```

Output

```
2
```

**Example 1: Using findIndex() method**

```js
// function that returns even number
function isEven(element) {
  return element % 2 == 0;
}

// defining an array of integers
let numbers = [1, 45, 8, 98, 7];

// returns the index of the first even number in the array
let firstEven = numbers.findIndex(isEven);

console.log(firstEven); // 2
```

Output

```
2
```

In the above example, we have used the ```findIndex()``` method to find the index of the first even number in the numbers array.

```isEven()``` is a function that returns an even number. We have passed ```isEven()``` as a callback in the ```findIndex()``` method as- numbers.```findIndex(isEven)```.

The method returns 2 which is the index of the first even number in numbers i.e. 8.

**Example 2: findIndex() with Arrow Function**

```js
// defining an array
let days = ["Sunday", "Wednesday", "Tuesday", "Friday"];

// returns the first index of 'Wednesday' in the array
let index = days.findIndex((day) => day === "Wednesday");

console.log(index); // 1
```

Output
```
1
```

Here we have passed an arrow function as a callback in the ```findIndex()``` method. The method returns the first index of ```'Wednesday'```.


**Example 3: findIndex() with Object Elements**

```js
// defining an object 
const team = [
  { name: "Bill", age: 10 },
  { name: "Linus", age: 15 },
  { name: "Alan", age: 20 },
  { name: "Steve", age: 34 },
];

// function that returns age greater than or equal to 18
function isAdult(member) {
  return member.age >= 18;
}

// returns the index of the first element which is 
// greater than or equal to 18  
console.log(team.findIndex(isAdult)); // 2
```

Output

```
2
```

***

#### Array lastIndexOf() Overview
The ```lastIndexOf()``` method returns the index of the last occurrence of a specified element in the array.

```js
let priceList = [10, 8, 2, 31, 10, 31, 65];

// finding the index of the last occurence of 31
let lastIndex = priceList.lastIndexOf(31);

console.log(lastIndex); 

// Output: 5
```

* The ```lastIndexOf()``` method returns the last index (position) of a specified value.

* The ```lastIndexOf()``` method returns -1 if the value is not found.

* The ```lastIndexOf()``` starts at a specified index and searches from right to left.

**Example 1: Using lastIndexOf() Method**

```js
let alphabets = ["a", "b", "c", "a", "d"];

// finding the index of the last occurence of 'a'
let lastIndex1 = alphabets.lastIndexOf("a");

console.log(lastIndex1); // 3

// finding the index of the last occurence of 'e'
let lastIndex2 = alphabets.lastIndexOf("e");

console.log(lastIndex2); // -1
```

In the above example, we have used the ```lastIndexOf()``` method to find the index of the last occurrence of ```'a'``` and ```'e'```.

The last occurrence of ```'a'``` is at index 3 in alphabets so alphabets.```lastIndexOf("a")``` returns ```3```.

```alphabets.lastIndexOf("e")``` returns ```-1``` because the array does not contain ```'e'```.


**Example 2: lastIndexOf() with two Parameters**

```js
let alphabets = ["a", "b", "c", "a", "d", "a"];

// second argument specifies the starting index
// from where the method searches the element backward
let lastIndex = alphabets.lastIndexOf("a", 4); // 3

console.log(lastIndex); 
```

In the above example, we have passed the second argument ```4``` in the ```lastIndexOf()``` method.

```alphabets.lastIndexOf("a", 4)``` searches the element ```'a'``` backward from index ```4``` and returns the last occurrence of ```'a'``` i.e. ```3```.

***

#### Array find() Overview
The ```find()``` method returns the value of the first array element that satisfies the provided test function.

```js
let numbers = [1, 3, 4, 9, 8];

// function to check even number
function isEven(element) {
  return element % 2 == 0;
}

// get the first even number
let evenNumber = numbers.find(isEven);
console.log(evenNumber);

// Output: 4
```

**Example 1: Using find() method**

```js
function isEven(element) {
  return element % 2 == 0;
}

let randomArray = [1, 45, 8, 98, 7];

let firstEven = randomArray.find(isEven);
console.log(firstEven); // 8

// using arrow operator
let firstOdd = randomArray.find((element) => element % 2 == 1);
console.log(firstOdd); // 1
```

**Example 2: find() with Object elements**

```js
const team = [
  { name: "Bill", age: 10 },
  { name: "Linus", age: 15 },
  { name: "Alan", age: 20 },
  { name: "Steve", age: 34 },
];

function isAdult(member) {
  return member.age >= 18;
}

console.log(team.find(isAdult)); // { name: 'Alan', age: 20 }

// using arrow function and deconstructing
let adultMember = team.find(({ age }) => age >= 18);

console.log(adultMember); // { name: 'Alan', age: 20 }
```

***

#### Array includes() Overview
The ```includes()``` method checks if an array contains a specified element or not.

```js
// defining an array
let languages = ["JavaScript", "Java", "C"];

// checking whether the array contains 'Java'
let check = languages.includes("Java");

console.log(check); 

// Output: true
```

**Example 1: Using includes() method**

```js
let languages = ["JavaScript", "Java", "C", "C++"];

// checking whether the array contains 'C'
let check1 = languages.includes("C");

console.log(check1); // true

// checking whether the array contains 'Ruby'
let check2 = languages.includes("Ruby");

console.log(check2); // false
```

Output

```
true
false
```

In the above example, we have used the ```includes()``` method to check whether the languages array contains elements ```'C'``` and ```'Ruby'```.

```languages.includes("C")``` returns ```true``` since the array contains ```'C'``` and ```languages.includes("Ruby")``` returns ```false``` since the array does not contain ```'Ruby'```.


**Example 2: includes() for Case-Sensitive Search**
The ```includes()``` method is case sensitive. For example:

```js
let languages = ["JavaScript", "Java", "C", "Python"];

// checking whether the array contains 'Python'
let check1 = languages.includes("Python");

console.log(check1); // true

// checking whether the array contains 'python'
let check2 = languages.includes("python");

console.log(check2); // false
```

Output

```
true
false
```

Here the ```includes()``` method returns true for searchValue- ```'Python'``` and false for ```'python'```.

This is because the method is case sensitive and it treats ```'Python'``` and ```'python'``` as two different strings.

**Example 3: includes() with two Parameters**

```js
let languages = ["JavaScript", "Java", "C", "Python"];

// second argument specifies position to start the search
let check1 = languages.includes("Java", 2);

console.log(check1); // false

// the search starts from third last element 
let check2 = languages.includes("Java", -3);

console.log(check2); // true 
```

Output

```
false
true
```

In the above example, we have passed two argument values in the ```include()``` method.

```languages.includes("Java", 2)``` returns ```false``` since the method doesn't find ```'Java'``` from second index of the array.

In ```languages.includes("Java", -3)```, the method starts searching ```'Java'``` from the third last element because of the negative argument ```-3```.

***

#### The forEach() Overview
It helps you iterate (loop) over array items one by one. Here's an example:

```js
const apps = ["Calculator", "Messaging", "Clock"];

apps.forEach(app => {
    console.log(app);
});
```

If the ```=>``` is new to you, that's called an ```arrow function```. In this particular example, you will not see a difference between using an ```arrow function``` and a ```regular function```, so here's how you can iterate without an arrow function:

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

Notice how the callback function passed to the ```forEach``` is being called for every single element of the array.

**Best practices**

A couple of best practices to keep in mind:

* Try to have the name of the array in plural (example: apps)
* Then the first argument inside the forEach should be in singular (example: app)
* Always start with a console.log(item) as this helps you visualise the items that you just iterated over (one by one).

You can also practise reading this in English as following:

We have an apps array and we iterate over it one by one. Now we can start thinking about a single item of that array, which is one app

<br>

**Iterate over array of objects**
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

Because every user (or item) is an object, you can access the keys id and name by calling ```user.id``` and ```user.name```.

<br>

**Using the index in the forEach**
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

**Example 1**

```js
function printElements(element, index) {
    console.log('Array Element ' + index + ': ' + element);
}

const prices = [1800, 2000, 3000, , 5000, 500, 8000];

// forEach does not execute for elements without values
// in this case, it skips the third element as it is empty
prices.forEach(printElements);
```

Output

```
Array Element 0: 1800
Array Element 1: 2000
Array Element 2: 3000
Array Element 4: 5000
Array Element 5: 500
Array Element 6: 8000
```



### Example 2
Let's create an array with the numbers from 1 to 6 and display in the browser console only the even numbers. Check the code below.

```js
const arr = [1,2,3,4,5,6];

const verifyEvenNum = el => {
if (el % 2 === 0) {
console.log(el);
} 
}

arr.forEach(verifyEvenNum);
// 2
// 4
// 6
```

***

### Example 3
To count the duplicates in an array, declare an empty object variable that will store the count for each value and use the forEach() method to iterate over the array. On each iteration, increment the count for the value by 1 or initialize it to 1 if it hasn't been set already.

```js
const countries = ['Argentina', 'Brazil', 'Argentina', 'Argentina', 'Brazil', 'Portugal'];

const count = {};

countries.forEach(element => {
  count[element] = (count[element] || 0) + 1;
});


console.log(count);
// {Argentina: 3, Brasil: 2, Portugal: 1}
```

* The function we passed to the Array.forEach method gets called with each element in the array.

* For each element we check if the value in already present as a key in the count object. If it is present, we increment it by 1.

* If the value is not yet present, we initialize it to 1.

* The logical OR (||) operator is there to check if the key has not been initialized in the array. If the accessor returns undefined, we initialize the value for the key to 0 + 1.


```js
let numbers = [1, 3, 4, 9, 8];

// function to compute square of each number
function computeSquare(element) {
  console.log(element * element);
}

// compute square root of each element
numbers.forEach(computeSquare);

/* Output:
1
9 
16
81
64
*/
```
