# JavaScript String Methods
Here are the commonly used JavaScript String methods:

| Method                | Description                                             |
|-----------------------|---------------------------------------------------------|
| charAt(index)         | returns the character at the specified index            |
| concat()              | joins two or more strings                               |
| replace()             | replaces a string with another string                   |
| split()               | converts the string to an array of strings              |
| substr(start, length) | returns a part of a string                              |
| substring(start,end)  | returns a part of a string                              |
| slice(start, end)     | returns a part of a string                              |
| toLowerCase()         | returns the passed string in lower case                 |
| toUpperCase()         | returns the passed string in upper case                 |
| trim()                | removes whitespace from the strings                     |
| includes()            | searches for a string and returns a boolean value       |
| search()              | searches for a string and returns a position of a match |

***

## Example: JavaScript String Methods

```js
const text1 = 'hello';
const text2 = 'world';
const text3 = '     JavaScript    ';

// concatenating two strings
const result1 = text1.concat(' ', text2);
console.log(result1); // "hello world"

// converting the text to uppercase
const result2 = text1.toUpperCase();
console.log(result2); // HELLO

// removing whitespace from the string
const result3 = text3.trim();
console.log(result3); // JavaScript

// converting the string to an array
const result4 = text1.split();
console.log(result4); // ["hello"]

// slicing the string
const result5= text1.slice(1, 3);
console.log(result5); // "el"
```
***

## JavaScript String() Function

The String() function is used to convert various data types to strings. For example,

```js
const a = 225; // number
const b = true; // boolean

//converting to string
const result1 = String(a);
const result2 = String(b);

console.log(result1); // "225"
console.log(result2); // "true"
```
***
