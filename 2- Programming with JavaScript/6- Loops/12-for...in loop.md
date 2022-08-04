# JavaScript for...in loop

There are also other types of loops. The ```for..in``` loop in JavaScript allows you to iterate over all property keys of an object.

***

## JavaScript for...in loop

```js
The syntax of the for...in loop is:

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
name => Monica
class => 7
age => 12
```

In the above program, the ```for...in``` loop is used to iterate over the ```student``` object and print all its properties.

* The object key is assigned to the variable ```key```.
* ```student[key]``` is used to access the value of ```key```.

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
Jack : $24000,
Paul : $34000,
Monica : $55000
```

In the above example, the ```for...in``` loop is used to iterate over the properties of the ```salaries``` object. Then, the string ```$``` is added to each value of the object.
