# Comparison Operators
When writing conditional statements, sometimes we need to use different types of operators to compare values. These operators are called comparison operators.

Here is a list of some handy comparison operators and their syntax:

* Less than: <
* Greater than: >
* Less than or equal to: <=
* Greater than or equal to: >=
* Is equal to: ===
* Is not equal to: !==

Comparison operators compare the value on the left with the value on the right. For instance:

```js
10 < 12 // Evaluates to true
```

It can be helpful to think of comparison statements as questions. When the answer is “yes”, the statement evaluates to true, and when the answer is “no”, the statement evaluates to false. The code above would be asking: is 10 less than 12? Yes! So 10 < 12 evaluates to true.

We can also use comparison operators on different data types like strings:

```js
'apples' === 'oranges' // false
```

In the example above, we’re using the identity operator (===) to check if the string 'apples' is the same as the string 'oranges'. Since the two strings are not the same, the comparison statement evaluates to false.

All comparison statements evaluate to either true or false and are made up of:

* Two values that will be compared.

* An operator that separates the values and compares them accordingly (>, <, <=,>=,===,!==).

***

```js
let hungerLevel = 7;

if (hungerLevel > 7) {
console.log('Time to eat!')
} else {
console.log('We can eat later!')
}
```

***

# JavaScript Triple Equals Sign VS Double Equals Sign – Comparison Operators Explained with Examples

* Double Equals (==) checks for value equality only. It inherently does type coercion. This means that before checking the values, it converts the types of the variables to match each other.


<br>

* Triple Equals (===) does not perform type coercion. It will verify whether the variables being compared have both the same value AND the same type.

***

### Example 1:
```js
const foo = "test" 
const bar = "test"  

console.log(foo == bar) //true
console.log(foo === bar) //true  
```

The value and the type of both foo and bar is same. Therefore the result is true for both.

***

### Example 2:
```js
const number = 1234 
const stringNumber = '1234'  

console.log(number == stringNumber) //true
console.log(number === stringNumber)  //false                                   
```

The value of number and stringNumber looks similar here. However, the type of number is Number and type of stringNumber is string. 

Even though the values are same, the type is not the same. Hence a == check returns true, but when checked for value and type, the value is false.

***

### Example 3:
```js
console.log(0 == false) //true
console.log(0 === false) //false  
```                
Reason: same value, different type. Type coercion

This is an interesting case. The value of 0 when checked with false is same. It is so because 0 and false have the same value for JavaScript, but when checked for type and value, the value is false because 0 is a number and false is boolean.

***

### Example 4:
```js
const str = ""

console.log(str == false) //true
console.log(str === false) //false
```

The value of empty string and false is same in JavaScript. Hence, == returns true. However, the type is different and hence === returns false.

***

### When should you use == and when should you use ===?
When in doubt, use ===. This will save you from a ton of potential bugs.

If you are supporting a use case where you can be a little lenient about the type of incoming data, then use ==. 

For example, if an API accepts both "true" and true from the client, use ==. In short, do not use == unless you have a strong use case for it.
