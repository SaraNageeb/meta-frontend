# Push and Pop Array Methods in JavaScript
JavaScript gives us four methods to add or remove items from the beginning or end of arrays:

***

### push()
The push() method allows you to add one or more elements to the end of the array. The push() method returns the value of the length property that specifies the number of elements in the array.

If you consider an array as a stack, the push() method adds one or more element at the top of the stack. The following example creates an empty array named stack and adds five numbers, one by one, at the end of the stack array. It is like to push each number into the top of the stack.

```js
let stack = [];

stack.push(1);
console.log(stack); // [1]

stack.push(2);
console.log(stack); // [1,2]

stack.push(3);
console.log(stack); // [1,2,3]

stack.push(4);
console.log(stack); // [1,2,3,4]

stack.push(5);
console.log(stack); // [1,2,3,4,5]
```

The following figure illustrates each step in the script above.

![Push Array Method](/img/push-array.png)

Initially, the stack is empty. Each time, we call the push() method to add a number to the stack. After 5 calls, the stack has 5 elements.

Note that the push() method also allows you to add multiple items to the end of the array at a time.

***

### pop()
The pop() method removes the element at the end of the array and returns the element to the caller. If the array is empty, the pop() method returns undefined.

The following example shows how to pop elements from the top of the stack using the pop() method.

```js
console.log(stack.pop()); //  5
console.log(stack); // [1,2,3,4];

console.log(stack.pop()); //  4
console.log(stack); // [1,2,3];

console.log(stack.pop()); //  3
console.log(stack); // [1,2];

console.log(stack.pop()); //  2
console.log(stack); // [1];

console.log(stack.pop()); //  1
console.log(stack); // []; -> empty

console.log(stack.pop()); //  undefined
```

The figure below illustrates each step in the script.

![Pop Array Method](/img/pop-array.png)

Initially, the stack has 5 elements. The pop() method removes the element at the end of the array i.e., at the top of the stack one at a time. After five operations, the stack is empty.

***