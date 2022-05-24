# JavaScript Methods and this Keyword
In JavaScript, objects can also contain functions. For example,

```js
// object containing method
const person = {
    name: 'John',
    greet: function() { console.log('hello'); }
};
```

In the above example, a ```person``` object has two keys (```name``` and ```greet```), which have a string value and a function value, respectively.

Hence basically, the JavaScript method is an object property that has a function value.

***

### Accessing Object Methods
You can access an object method using a dot notation. The syntax is:

```js
objectName.methodKey()
```

You can access property by calling an objectName and a key. You can access a method by calling an objectName and a key for that method along with ```()```. For example,

```js
// accessing method and property
const person = {
    name: 'John',
    greet: function() { console.log('hello'); }
};

// accessing property
person.name; // John

// accessing method
person.greet(); // hello
```

Here, the ```greet``` method is accessed as ```person.greet()``` instead of ```person.greet```.

If you try to access the method with only ```person.greet```, it will give you a function definition.

```js 
person.greet; // ƒ () { console.log('hello'); }
```

***

### Adding a Method to a JavaScript Object
You can also add a method in an object. For example,

```js
// creating an object
let student = { };

// adding a property
student.name = 'John';

// adding a method
student.greet = function() {
    console.log('hello');
}

// accessing a method
student.greet(); // hello
```

In the above example, an empty ```student``` object is created. Then, the ```name``` property is added. Similarly, the ```greet``` method is also added. In this way, you can add a method as well as property to an object.

***

### JavaScript this Keyword
To access a property of an object from within a method of the same object, you need to use the this keyword. Let's consider an example.

```js
const person = {
    name: 'John',
    age: 30,

    // accessing name property by using this.name
    greet: function() { console.log('The name is' + ' ' + this.name); }
};

person.greet();
```

Output

```
The name is John
```

In the above example, a ```person``` object is created. It contains properties (```name``` and ```age```) and a method greet.

In the method ```greet```, while accessing a property of an object, ```this``` keyword is used.

In order to access the properties of an object, ```this``` keyword is used following by ```.``` and key.

Note: In JavaScript, ```this``` keyword when used with the object's method refers to the object. ```this``` is bound to an object.

However, the function inside of an object can access it's variable in a similar way as a normal function would. For example,

```js
const person = {
    name: 'John',
    age: 30,
    greet: function() {
        let surname = 'Doe';
        console.log('The name is' + ' ' + this.name + ' ' + surname); }
};

person.greet();
```

Output

```
The name is John Doe
```

***