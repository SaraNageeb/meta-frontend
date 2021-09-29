### String Methods with arguments
String methods help you to work with strings.
***

### concat()
The concat method joins two or more strings and returns a new joined strings.

```js
let firstName = "Cristiano";
let lastName = "Ronaldo";

let fullName = firstName.concat(" ", lastName); 
// returns "Cristiano Ronaldo"
```

The concat() method can be used instead of the plus operator. 

```js
let firstName = "Cristiano";
let lastName = "Ronaldo";

let fullName = firstName + " " + lastName;
// returns "Cristiano Ronaldo"
```

***

### indexOf()
The indexof () method returns the first position of a specified value in a string.

```js
let tvShow = "catdog";
tvShow.indexOf("cat"); //0
tvShow.indexOf("dog"); //3
tvShow.indexOf("z");  //-1 (not found)
```

***
### lastIndexOf() 

The lastIndexOf() the method returns the index of the last occurrence of a specified text in a string and returns -1 if the value is not found.

**lastIndexOf() is case sensitive.**

```js
let str = "Hello planet earth, you are a great planet.";
str.lastIndexOf("planet")   // Returns 36
str.lastIndexOf("Planet")   // Returns -1
```

***
### chartAt()

The charAt method Returns the character at the specified index (position).

```js
let city = "Barcelona";

city.charAt(2); // returns "r"

city.charAt(); // returns "B"
// If we pass no value it defaults to an index of 0

city.charAt(20); // returns ""
// If we add an index that is undefined we get an empty string
```

***
### slice()
The slice method extracts a part of a string and returns a new string.

The method takes 2 parameters: the start position, and the end position (end not included).

This example slices out a portion of a string from position 7 to position 12 (13-1):

```js
let fruits = "Apple, Banana, Kiwi";
fruits.slice(7, 13)     // Returns Banana
```

***

### substr()

The substr method gets a substring beginning at the specified location and having the specified length.

```js
let str = "Apple, Banana, Kiwi";
str.substr(7, 6)    // Returns Banana
```

***

### substring()

The substring method extracts the characters from a string, between two specified indices, and returns the new substring. 

It does not include the end index.

The substring() is similar to slice(), the difference is that substring() cannot accept negative indexes.

```js
let str = "Apple, Banana, Kiwi";
str.substring(7, 13)    // Returns Banana
```

***
### split()
The split method is used to split a string into an array of substrings and return the new array. 

If an empty string is used as the separator, the string is split between each character.

```js
let str = "How are you today ?";
let res = str.split(" ");


console.log(res);
// ["How", "are", "you", "today", "?"]


// Use the limit parameter:
const myArr = str.split(" ", 3);
console.log(myArr); // ["How", "are", "you"]


// Use a letter as a separator:
const myArr2 = str.split("o");
console.log(myArr2) // ["H", "w are y", "u t", "day ?"]


// Converting a String to an Array
// A string can be converted to an array with the split() method:
text.split(",")          // Split on commas
text.split(" ")          // Split on spaces
text.split("|")          // Split on pipe
text.split("")           // Split in characters
```


***
### replace()
The replace() method replaces a specified value with another value in a string.

By default, the replace() method replaces only the first match.

By default, the replace() method is case sensitive. Writing DOG (with upper-case) will not work


```js
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"
```

***



 ### repeat()
The repeat method Returns a new string with a specified number of copies of an existing string.

```js
let str = "Hello World !";
let res = str.repeat(5);


console.log(res);
// "Hello World !Hello World !Hello World !Hello World !Hello World !"
```

***

### includes()

The includes method checks whether a string contains the specified string/characters.

**includes() is case sensitive.**


```js
let cities = "London, Manchester, Liverpool";

console.log(cities.includes("London")); // True
console.log(cities.includes("london")); // False
console.log(cities.includes("Kent")) // False

```

***

### match() 
The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.

***

### startsWith()
The startsWith method returns whether the string starts with the provided string.

**startsWith() is case sensitive.**


```js
let alphabet = "abcdefghi";

console.log(alphabet.startsWith("abc")); // true

console.log(alphabet.startsWith("ABC")); // false
```

***

### endsWith()
The endsWith method returns whether the string ends with the provided string.

**endsWith() is case sensitive.**


```js
let alphabet = "abcdefghi";

console.log(alphabet.endsWith("ghi")); // true

console.log(alphabet.endsWith("GHI")); // false
```

***



### toString()

```js
var x = new String(1000);   // converting number into a String object

console.log(typeof x);             // object
console.log(typeof x.toString());  // string
console.log(x.toString());         // "1000"
```
***

### valueOf() 


***
