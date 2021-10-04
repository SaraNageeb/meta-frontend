# JavaScript Comparison Operators
Comparison operators compare two values and give back a boolean value: either true or false. Comparison operators are used in decision making and loops.
***

![Comparison Operators](/img/comparison-operators-js.jpeg)

***

### Equal to (==)
checks whether its two operands are equal, returning a Boolean result. Unlike the strict equality operator, it attempts to convert and compare operands that are of different types.

```js
console.log(1 == 1);
// expected output: true

console.log('hello' == 'hello');
// expected output: true

console.log('1' ==  1);
// expected output: true

console.log(0 == false);
// expected output: true
```
***

### Not Equal to (!=)	
checks whether its two operands are not equal, returning a Boolean result. Unlike the strict inequality operator, it attempts to convert and compare operands that are of different types.

```js
console.log(1 != 1);
// expected output: false

console.log('hello' != 'hello');
// expected output: false

console.log('1' !=  1);
// expected output: false

console.log(0 != false);
// expected output: false
```

***

### Strict equality (===)

checks whether its two operands are equal, returning a Boolean result. Unlike the equality operator, the strict equality operator always considers operands of different types to be different.

```js
console.log(1 === 1);
// expected output: true

console.log('hello' === 'hello');
// expected output: true

console.log('1' ===  1);
// expected output: false, comparing string and number

console.log(0 === false);
// expected output: false
```

***

### Strict not equal to (!==)
The strict inequality operator (!==) checks whether its two operands are not equal, returning a Boolean result. Unlike the inequality operator, the strict inequality operator always considers operands of different types to be different.

```js
console.log(1 !== 1);
// expected output: false

console.log('hello' !== 'hello');
// expected output: false

console.log('1' !==  1);
// expected output: true

console.log(0 !== false);
// expected output: true
```

***

### Less than (<)
returns true if the left operand is less than the right operand, and false otherwise.

```js
console.log(5 < 3);
// expected output: false

console.log(3 < 3);
// expected output: false

// Compare bigint to number (note: bigint is not supported in all browsers)
console.log(3n < 5);
// expected output: true

console.log('aa' < 'ab');
// expected output: true
```

***

### Less than or equal (<=)
returns true if the left operand is less than or equal to the right operand, and false otherwise.


```js
console.log(5 <= 3);
// expected output: false

console.log(3 <= 3);
// expected output: true

// Compare bigint to number (note: bigint is not supported in all browsers)
console.log(3n <= 5);
// expected output: true

console.log('aa' <= 'ab');
// expected output: true
```

***

### Greater than (>)
returns true if the left operand is greater than the right operand, and false otherwise.

```js
console.log(5 > 3);
// expected output: true

console.log(3 > 3);
// expected output: false

// Compare bigint to number (note: bigint is not supported in all browsers)
console.log(3n > 5);
// expected output: false

console.log('ab' > 'aa');
// expected output: true
```
***


### Greater than or equal (>=)
returns true if the left operand is greater than or equal to the right operand, and false otherwise.

```js
console.log(5 >= 3);
// expected output: true

console.log(3 >= 3);
// expected output: true

// Compare bigint to number (note: bigint is not supported in all browsers)
console.log(3n >= 5);
// expected output: false

console.log('ab' >= 'aa');
// expected output: true
```

