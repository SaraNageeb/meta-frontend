### String Methods
String methods help you to work with strings.
***

### toLowerCase()
The toLowerCase() method returns the value of the string converted to uppercase. 
This method does not affect the value of the string itself since JavaScript strings are immutable.


```js
const vowels = 'A,E,I,O,U';

console.log(vowels.toLowerCase());
// expected output: "a,e,i,o,u"
```

```js
const vowels = 'a,e,i,o,u';
const vowelsLowerCase = vowels.toUpperCase();

console.log(vowelsLowerCase);
// expected output: "a,e,i,o,u"
```
***

### toUpperCase()
The toUpperCase() method returns the value of the string converted to uppercase. 
This method does not affect the value of the string itself since JavaScript strings are immutable.

```js
const vowels = 'a,e,i,o,u';

console.log(vowels.toUpperCase());
// expected output: "A,E,I,O,U"
```

```js
const vowels = 'a,e,i,o,u';
const vowelsUpperCase = vowels.toUpperCase();

console.log(vowelsUpperCase);
// expected output: "A,E,I,O,U"
```
***

### trim()
The trim method removes whitespaces from both ends of the string. It does not change the original string.

```js
let str = "       Hello World!        ";
str.trim()   // Returns "Hello World!"
```

***

