# Array lastIndexOf() Overview

The lastIndexOf() method returns the index of the last occurrence of a specified element in the array.

```js
let priceList = [10, 8, 2, 31, 10, 31, 65];

// finding the index of the last occurence of 31
let lastIndex = priceList.lastIndexOf(31);

console.log(lastIndex); 

// Output: 5
```

* The lastIndexOf() method returns the last index (position) of a specified value.

* The lastIndexOf() method returns -1 if the value is not found.

* The lastIndexOf() starts at a specified index and searches from right to left.
***

### Example 1: Using lastIndexOf() Method

```js
let alphabets = ["a", "b", "c", "a", "d"];

// finding the index of the last occurence of 'a'
let lastIndex1 = alphabets.lastIndexOf("a");

console.log(lastIndex1); // 3

// finding the index of the last occurence of 'e'
let lastIndex2 = alphabets.lastIndexOf("e");

console.log(lastIndex2); // -1
```

In the above example, we have used the lastIndexOf() method to find the index of the last occurrence of 'a' and 'e'.

The last occurrence of 'a' is at index 3 in alphabets so alphabets.lastIndexOf("a") returns 3.

alphabets.lastIndexOf("e") returns -1 because the array does not contain 'e'.

***

### Example 2: lastIndexOf() with two Parameters

```js
let alphabets = ["a", "b", "c", "a", "d", "a"];

// second argument specifies the starting index
// from where the method searches the element backward
let lastIndex = alphabets.lastIndexOf("a", 4); // 3

console.log(lastIndex); 
```

In the above example, we have passed the second argument 4 in the lastIndexOf() method.

alphabets.lastIndexOf("a", 4) searches the element 'a' backward from index 4 and returns the last occurrence of 'a' i.e. 3.
