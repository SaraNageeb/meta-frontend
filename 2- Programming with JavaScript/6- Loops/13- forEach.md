# JavaScript forEach()

The ```forEach()``` method calls a function and iterates over the elements of an array. The ```forEach()``` method can also be used on Maps and Sets.

***

## JavaScript forEach

The syntax of the ```forEach()``` method is:

```js
array.forEach(function(currentValue, index, arr))
```

Here,

* function(currentValue, index, arr) - a function to be run for each element of an array
* currentValue - the value of an array
* index (optional) - the index of the current element

arr (optional) - the array of the current elements

***

### forEach with Arrays
The forEach() method is used to iterate over an array. For example,

```js
let students = ['John', 'Sara', 'Jack'];

// using forEach
students.forEach(myFunction);

function myFunction(item) {

    console.log(item);
}
```

```
John
Sara
Jack
```

In the above program, the ```forEach()``` method takes ```myFunction()``` function that displays each element of a ```students``` array.

***

### Updating the Array Elements
As we have seen in the above example, the ```forEach()``` method is used to iterate over an array, it is quite simple to update the array elements. For example,

```js
let students = ['John', 'Sara', 'Jack'];

// using forEach
students.forEach(myFunction);

function myFunction(item, index, arr) {

    // adding strings to the array elements
    arr[index] = 'Hello ' + item;
}

console.log(students);
```

```
["Hello John", "Hello Sara", "Hello Jack"]
```

***

### forEach with Arrow Function
You can use the arrow function with the forEach() method to write a program. For example,

```js
// with arrow function and callback

const students = ['John', 'Sara', 'Jack'];

students.forEach(element => {
  console.log(element);
});
```

```
John
Sara
Jack
```
