# Access string characters
In a string characters are indexed from left to right. 
For instance, in a string named str the first character is at index 0, while the last is at index str.length-1

![Strings][strings]

[strings]:https://usemynotes.com/wp-content/uploads/2021/06/How-to-access-the-characters-of-a-String.jpg

***

### Using charAt() method
This method will return the character at a specified index in a string. The method takes in a parameter, an integer that represents the index of the character to be returned. The syntax for usage is string.charAt(index).

```js
let str = 'string';
console.log(str.charAt(0)); // s
console.log(str.charAt(1)); // t
console.log(str.charAt(2)); // r
```

If no character is found, the method returns an empty string.

```js
let str = 'string';
console.log(str.charAt(999)); // ''
```

Return the last character of a string:

```js
let str = "HELLO WORLD";
str.charAt(str.length-1)    // Returns "D"
```

***

### Using square brackets notation []
Another way of accessing a character in a string is to using the square bracket. for example:

```js
let str = 'string';
console.log(str[1]); // t
console.log(str[3]); // i
console.log(str[1]); // g
```

When we try to access a character whose index is larger than the string length, the Square brackets [] returns undefined.

```js
let str = 'string';
console.log(str[999]); // undefined
```

***