# How to Iterate Over an Array with a for loop
Each time the for loop runs, it has a different value – and this is the case with arrays.

A for loop examines and iterates over every element the array contains in a fast, effective, and more controllable way.

A basic example of looping through an array is:

```js
const  myNumbersArray = [ 1,2,3,4,5];

for(let i = 0; i < myNumbersArray.length; i++) {
    console.log(myNumbersArray[i]);
```

Output:

```js
1
2
3
4
5
```

This is much more effective than printing each value individually:

```js
console.log(myNumbersArray[0]);
console.log(myNumbersArray[1]);
console.log(myNumbersArray[2]);
console.log(myNumbersArray[3]);
console.log(myNumbersArray[4]);
```

Let's break it down:

The iterator variable i is initialized to 0. i in this case refers to accessing the index of the array. This means that the loop will access the first array value when it runs for the first time.

The conditioni < myNumbersArray.length tells the loop when to stop, and the increment statement i++ tells how much to increment the iterator variable for each loop.

In other words, the loop starts at 0 index, checks the length of the array, prints out the value to the screen, and then increases the variable by 1. The loop prints out the contents of the array one at a time and when it reaches its length, it stops.