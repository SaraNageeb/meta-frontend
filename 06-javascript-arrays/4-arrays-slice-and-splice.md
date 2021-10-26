### The slice() array method
The slice( ) method copies a given part of an array and returns that copied part as a new array. It doesn’t change the original array.

**Syntax**

```js
slice()
slice(start)
slice(start, end)
```

![Slice()](/img/javascript-array-slice.png)

***

### Example 1

The original array is not modified. The newly formed array assigned to my_fav_fruits variable is just a copy of a portion of the original array fruits. The original array remains intact.

```jsx
let fruits = ["apple", "mango", "banana", "grapes", "blueberry", "kiwi", "papaya"];
let my_fav_fruits = fruits.slice(2,4);

console.log(my_fav_fruits);
// output -> [ 'banana', 'grapes' ] 

console.log(fruits);
// output -> [ 'apple', 'mango', 'banana', 'grapes', 'blueberry', 'kiwi', 'papaya' ]
```

![Slice()](/img/array-slice-example-1.jpeg)

***

### Example 2

The item at the end position is not included in the new array. As we can see in the example below, the item at the 5th position (Kiwi) is not included in the output array(my_fav_fruits).

```jsx
let fruits = ["apple", "mango", "banana", "grapes", "blueberry", "kiwi", "papaya"];
let my_fav_fruits = fruits.slice(1,5);

console.log(my_fav_fruits);
// output -> [ 'mango', 'banana', 'grapes', 'blueberry' ]
```

![Slice()](/img/array-slice-example-2.jpeg)

***

### Example 3

If end is not provided, then it assumes the end parameter to be 'the actual end of the array', which is equivalent to the length of the array(fruits.length).

```jsx
let fruits = ["apple", "mango", "banana", "grapes", "blueberry", "kiwi", "papaya"];
let my_fav_fruits = fruits.slice(2);

console.log(my_fav_fruits);
// output -> [ 'banana', 'grapes', 'blueberry', 'kiwi', 'papaya' ]
```

![Slice()](/img/array-slice-example-3.jpeg)

***

### Example 4

Since both the parameters are optional, its perfectly valid to call the method with no parameters at all. In such case it returns the exact copy of the original array. This feature is sometimes used to get a copy of an array in Javascript.

```jsx
let fruits = ["apple", "mango", "banana", "grapes", "blueberry", "kiwi", "papaya"];
let my_fav_fruits = fruits.slice();

console.log(my_fav_fruits);
// output ->[ 'apple', 'mango', 'banana', 'grapes', 'blueberry', 'kiwi', 'papaya' ]
```

![Slice()](/img/array-slice-example-4.jpeg)

***

# The splice() array method

The splice() method is a built-in method for JavaScript Array objects. 
It lets you change the content of your array by removing, adding or replacing existing elements with new ones.

This method modifies the original array and returns the removed elements as a new array.

This function has 2 required parameters and all other are optional. These parameters are:

* Index – (Required) The first parameter is the index where you want to add new items or remove items from that index.

* Number of items – (Required) Second parameter is the number of items you want to remove from given index.

* items – (Optional) These are comma separated list of items which you want to add in your array at the index.

***

### Example 1 – Deleting elements using JavaScript Array’s splice() method
To  delete elements in an array, you pass two arguments into the splice() method as follows:

```js
Array.splice(position,num);
```

The position specifies the position of the first item to delete and the num argument determines the number of elements to delete.

The splice() method changes the original array and returns an array that contains the deleted elements.

Let’s take a look at the following example.

Suppose, you have an array scores that contains five numbers from 1 to 5.

```js
let scores = [1, 2, 3, 4, 5];
```

The following statement deletes three elements of the scores array starting from the first element.

```js
let deletedScores = scores.splice(0, 3);
```

The scores array now contains two elements.
```js
console.log(scores); //  [4, 5]
```

And the deletedScores array contains three elements.

```js
console.log(deletedScores); // [1, 2, 3]
```

The following figure illustrates the scores.splice(0,3) method call above.

![Spice()](/img/javascript-array-splice-1.png)

***

### Inserting elements using JavaScript Array splice() method
You can insert one or more elements into an array by passing three or more arguments to the splice() method with the second argument is zero.

Consider the following syntax.

```js
Array.splice(position,0,new_element_1,new_element_2,...);
```

In this syntax:

The position specifies the starting position in the array that the new elements will be inserted.

The second argument is zero (0) that instructs the splice() method to not delete any array elements.

The third argument, fourth argument, and so on are the new elements that are inserted into the array.

**Note that the splice() method actually changes the original array. Also, the splice() method does not remove any elements, therefore, it returns an empty array. For example:**

Assuming that you have an array named colors with three strings.

```js
let colors = ['red', 'green', 'blue'];
```

The following statement inserts one element after the second element.

```js
colors.splice(2, 0, 'purple');
```

The colors array now has four elements with the new element inserted in the second position.

```js
console.log(colors); // ["red", "green", "purple", "blue"]
```
The following figure demonstrates the method call above.

![Spice()](/img/javascript-array-splice-2.png)

You can insert more than one element by passing the fourth argument, the fifth argument, and so on to the splice() method as in the following example.

```js
colors.splice(1, 0, 'yellow', 'pink');
console.log(colors);  // ["red", "yellow", "pink", "green", "purple", "blue"]
```

***

### Replacing elements using JavaScript Array splice() method
The splice() method allows you to insert new elements into an array while deleting existing elements simultaneously.

To do this, you pass at least three arguments with the second one that specifies the number of items to delete and the third one that indicates the elements to insert.

**Note that the number of elements to delete needs not to be the same as the number of elements to insert.**

Suppose you have an array of programming languages with four elements as follows:

```js
let languages = ['C', 'C++', 'Java', 'JavaScript'];
```

The following statement replaces the second element by a new one.

```js
languages.splice(1, 1, 'Python');
```

The languages array now still has four elements with the new second argument is 'Python' instead of 'C++'.

```js
console.log(languages); 
// ["C", "Python", "Java", "JavaScript"]
```

The following figure illustrates the method call above.

![Spice()](/img/javascript-array-splice-3.png)

You can replace one element with multiple elements by passing more arguments into the splice() method as follows:

```js
languages.splice(2,1,'C#','Swift','Go');
```

The statement deletes one element from the second element i.e., Java and inserts three new elements into the languages array. The result is as follows.

```js
console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]
```

***