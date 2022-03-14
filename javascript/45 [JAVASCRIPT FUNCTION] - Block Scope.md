# Block Scope
A block scope is the area within if, switch conditions or for and while loops. Generally speaking, whenever you see {curly brackets}, it is a block. 
In ES6, const and let keywords allow developers to declare variables in the block scope, which means those variables exist only within the corresponding block.


```js
function foo(){
// the block statetment if does not create a new scope
    if(true){
        var fruit1 = 'apple';        //fruit still exist in the global scope
        const fruit2 = 'banana';     //exist in block scope
        let fruit3 = 'strawberry';   //exist in block scope
    console.log(fruit2); // banana
    console.log(fruit3); // strawberry
    }
    console.log(fruit1); //apple
    console.log(fruit2); //error: fruit2 is not defined
    console.log(fruit3); //error: fruit3 is not defined
}
foo();
//result:
//apple
//error: fruit2 is not defined
//error: fruit3 is not defined
```