# Primitive vs. Reference Values
In javascript, a variable may store two types of values: primitive and reference. So before we discuss them let’s first discuss two important concepts stack and heap.

***

### Primitive Types
Javascript has six primitive types null, undefined, boolean, string, number, symbol.
The size of the primitive values is fixed. That’s why javascript stores the primitive values on the stack. When you assign a variable of this type to another variable, the new variable copies the value. Let’s take an example.

```js
let x = 1;
let y = x;
console.log(x, y); // 1 1
x = 2;
console.log(x, y); // 2 1
y = 3;
console.log(x, y); // 2 3
```

At line 5 we modified the value of x. But it didn’t modify the value of y. Because y copied the value of x.

***

### Reference Types
In javascript, there are two reference types objects and array. Array are also objects so technically one type. The size of reference types is dynamic so javascript stores the reference values on the heap. When we create an object and assign it some value. The value is not directly stored in the variable instead a reference to the value is stored in that variable. Let’s take an example

```js
let student1 = {name: "john", age: 20};
let student2 = student1;
console.log(student1); // {name: "john", age: 20}
console.log(student2); // {name: "john", age: 20}
student2.name = "doe";
console.log(student1); // {name: "doe", age: 20}
console.log(student2); // {name: "doe", age: 20}
```

In the example, we modified the value of student2 at line 7 and it also modified the value of student1. It’s because both student1 and student2 reference to the same value. So modifying student1 will affect student2 and vice versa.

Now the question is how to overcome this problem. The solution is to create a new reference for the new object. This way the new object will point to its own object instead of overlapping each other. We can create a new reference using the spread operator. Let’s take an example.

```js
let student1 = {name: "john", age: 20};
let student2 = {...student1};
console.log(student1); // {name: "john", age: 20}
console.log(student2); // {name: "john", age: 20}
student2.name = "doe";
console.log(student1); // {name: "john", age: 20}
console.log(student2); // {name: "doe", age: 20}
```