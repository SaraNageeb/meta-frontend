# JavaScript object
JavaScript object is a non-primitive data-type that allows you to store multiple collections of data.

![image](https://user-images.githubusercontent.com/25232528/186669426-01049369-24aa-43b7-b68d-26b0338c0417.png)

Here is an example of a JavaScript object.

```js
// object
const student = {
    firstName: 'Ash',
    class: 10
};
```

Here, ```student``` is an object that stores values such as strings and numbers.

***

## JavaScript Object Declaration
The syntax to declare an object is:

```js
const object_name = {
   key1: value1,
   key2: value2
}
```

Here, an object ```object_name``` is defined. Each member of an object is a ```key:``` ```value``` pair separated by commas and enclosed in curly braces ```{}```.

![image](https://user-images.githubusercontent.com/25232528/186671237-585d51a3-475d-47c5-994a-62c7c9208e2d.png)


For example,

```js
// object creation
const person = { 
    name: 'John',
    age: 20
};
console.log(typeof person); // object
```


You can also define an object in a single line.

```js
const person = { name: 'John', age: 20 };
```

In the above example, ```name``` and ```ag```e are ```keys```, and ```John``` and ```20``` are values respectively.

***
