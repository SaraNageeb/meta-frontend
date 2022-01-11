# Shift and Unshift Array Methods in JavaScript
JavaScript gives us four methods to add or remove items from the beginning or end of arrays:

![shift and unshift Array Method](/img/arrays-shift-unshift.png)

***

### shift()
We use JavaScript array shift() method to remove an element from the beginning of an array. It returns the item you have removed from the array, and length of the array is also changed. Basically, it excludes the element from the 0th position and shifts the array value to downward and then returns the excluded value.

Let’s take a look at an example below:

```js
// Example JavaScript shift() method

var names = ['Blaire', 'Ash', 'Coco', 'Dean', 'Georgia'];

var initialElement = names.shift();

console.log(names);
// Output: ["Ash", "Coco", "Dean", "Georgia"]

console.log(initialElement);
// Output: Blaire
```

***

### unshift()
The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

```js
// Example JavaScript unshift() method

var nameArray = ['Ash', 'Coco', 'Dean', 'Georgia'];

nameArray.unshift('Willy', 'Blaire')

console.log(nameArray);
//Output: ["Willy", "Blaire", "Ash", "Coco", "Dean", "Georgia"]
```

The unshift() function in JavaScript returns the new array length.

***
