# Array Reverse Overview
The reverse() method returns the array in reverse order.

***

Example 1: Using reverse() Method
let languages = ["JavaScript", "Python", "C++", "Java", "Lua"];

// reversing the order of languages array
let reversedArray = languages.reverse();

console.log("Reversed Array: ", reversedArray);

// modifies the original array
console.log("Original Array: ", languages);
Run Code
Output

Reversed Array: [ 'Lua', 'Java', 'C++', 'Python', 'JavaScript' ]
Original Array: [ 'Lua', 'Java', 'C++', 'Python', 'JavaScript' ]
In the above example, we have used the reverse() method to reverse the languages array.

languages.reverse() reverses the order of each element in the array and returns the reversed array.

Since the method modifies the original array, both languages and reversedArray hold the same value.

***

Example 2: reverse() Method with Spread Operator
In Example 1, we saw how the reverse() method modifies the original array.

But if we use the spread operator(...) in the array along with the reverse() method, it does not modify the original array. For example:

let languages = ["JavaScript", "Python", "C++", "Java", "Lua"];

// using spread operator to reverse the array
let reversedArray = [...languages].reverse();

console.log("Reversed Array:", reversedArray);

// modifies the original array
console.log("Original Array:", languages);
Run Code
Output

Reversed Array: [ 'Lua', 'Java', 'C++', 'Python', 'JavaScript' ]
Original Array: [ 'JavaScript', 'Python', 'C++', 'Java', 'Lua' ]

***
