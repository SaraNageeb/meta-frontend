# JavaScript Type Conversions
In programming, type conversion is the process of converting data of one type to another. For example: converting ```String``` data to ```Number```.

There are two types of type conversion in JavaScript.

Implicit Conversion - automatic type conversion
Explicit Conversion - manual type conversion

***

## JavaScript Implicit Conversion
In certain situations, JavaScript automatically converts one data type to another (to the right type). This is known as implicit conversion.

```js
5 + null    // returns 5         because null is converted to 0
"5" + null  // returns "5null"   because null is converted to "null"
"5" + 2     // returns "52"      because 2 is converted to "2"
"5" - 2     // returns 3         because "5" is converted to 5
"5" * "2"   // returns 10        because "5" and "2" are converted to 5 and 2
```

***

## JavaScript Explicit Conversion
You can also convert one data type to another as per your needs. The type conversion that you do manually is known as explicit type conversion.

In JavaScript, explicit type conversions are done using built-in methods.

Here are some common methods of explicit conversions.

***

### 1. Convert to Number Explicitly
To convert numeric strings and boolean values to numbers, you can use Number(). For example,

```js
let result;

// string to number
result = Number('324');
console.log(result); // 324

result = Number('324e-1')  
console.log(result); // 32.4

// boolean to number
result = Number(true);
console.log(result); // 1

result = Number(false);
console.log(result); // 0
```

In JavaScript, empty strings and null values return 0. For example,

```js
let result;
result = Number(null);
console.log(result);  // 0

let result = Number(' ')
console.log(result);  // 0
```

If a string is an invalid number, the result will be ```NaN```. For example,

```js
let result;
result = Number('hello');
console.log(result); // NaN

result = Number(undefined);
console.log(result); // NaN

result = Number(NaN);
console.log(result); // NaN
```

***

### 2. Convert to String Explicitly
To convert other data types to strings, you can use either String() or toString(). For example,

```js
//number to string
let result;
result = String(324);
console.log(result);  // "324"

result = String(2 + 4);
console.log(result); // "6"

//other data types to string
result = String(null);
console.log(result); // "null"

result = String(undefined);
console.log(result); // "undefined"

result = String(NaN);
console.log(result); // "NaN"

result = String(true);
console.log(result); // "true"

result = String(false);
console.log(result); // "false"

// using toString()
result = (324).toString();
console.log(result); // "324"

result = true.toString();
console.log(result); // "true"
```

**Note** ```String()``` takes null and undefined and converts them to string. However, toString() gives error when null are passed.

***

### 3. Convert to Boolean Explicitly
To convert other data types to a boolean, you can use Boolean().

In JavaScript, undefined, null, 0, NaN, '' converts to false. For example,

```js
let result;
result = Boolean('');
console.log(result); // false

result = Boolean(0);
console.log(result); // false

result = Boolean(undefined);
console.log(result); // false

result = Boolean(null);
console.log(result); // false

result = Boolean(NaN);
console.log(result); // false
```

All other values give true. For example,

```js
result = Boolean(324);
console.log(result); // true

result = Boolean('hello');
console.log(result); // true

result = Boolean(' ');
console.log(result); // true
```

***

### JavaScript Type Conversion Table
The table shows the conversion of different values to String, Number, and Boolean in JavaScript.

| Value     | String Conversion | Number Conversion | Boolean Conversion |
|-----------|-------------------|-------------------|--------------------|
| 1         | "1"               | 1                 | true               |
| 0         | "0"               | 0                 | false              |
| "1"       | "1"               | 1                 | true               |
| "0"       | "0"               | 0                 | true               |
| "ten"     | "ten"             | NaN               | true               |
| true      | "true"            | 1                 | true               |
| false     | "false"           | 0                 | false              |
| null      | "null"            | 0                 | false              |
| undefined | "undefined"       | NaN               | false              |
| ''        | ""                | 0                 | false              |
| ' '       | " "               | 0                 | true               |