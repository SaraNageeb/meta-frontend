# JavaScript for...in loop
The for...in statement iterates over the properties of an object. 

The syntax of the for...in loop is:

```js
for (key in object) {
    // body of for...in
}
```
In each iteration of the loop, a key is assigned to the key variable. The loop continues for all object properties.

Note: Once you get keys, you can easily find their corresponding values.

***

### Example 1: Iterate Through an Object

```js
const student = {
    name: 'Monica',
    class: 7,
    age: 12
}

// using for...in
for ( let key in student ) {

    // display the properties
    console.log(`${key} => ${student[key]}`);
}
```

```
Output

name => Monica
class => 7
age => 12
```


In the above program, the for...in loop is used to iterate over the student object and print all its properties.

* The object key is assigned to the variable key.
* ```student[key]``` is used to access the value of key.


***

### Example 2: Update Values of Properties

```js
const salaries= {
    Jack : 24000,
    Paul : 34000,
    Monica : 55000
}

// using for...in
for ( let i in salaries) {

    // add a currency symbol
    let salary = "$" + salaries[i];

    // display the values
    console.log(`${i} : ${salary}`);
}
```

```
Output

Jack : $24000,
Paul : $34000,
Monica : $55000
```

In the above example, the for...in loop is used to iterate over the properties of the salaries object. Then, the string $ is added to each value of the object.

***

### for...in with Strings

You can also use for...in loop to iterate over string values. For example,

```js
const string = 'code';

// using for...in loop
for (let i in string) {
    console.log(string[i]);
}
```

```
Output

c
o
d
e
```

***

### for...in with Arrays
You can also use for...in with arrays. For example,

```js
// define array
const arr = [ 'hello', 1, 'JavaScript' ];

// using for...in loop
for (let x in arr) {
    console.log(arr[x]);
}
```

```
Output

hello
1
JavaScript
```

**Note: You should not use for...in to iterate over an array where the index order is important.**

***