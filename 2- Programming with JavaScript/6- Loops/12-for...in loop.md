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

