# Lexical Scope
Another point to mention is the lexical scope. Lexical scope means the children scope have the access to the variables defined in the parent scope. The children functions are lexically bound to the execution context of their parents.

```js
function foo1(){
    var fruit1 = 'apple';        
    const fruit2 = 'banana';     
    let fruit3 = 'strawberry';
    function foo2(){
        console.log(fruit1);
        console.log(fruit2);
        console.log(fruit3);
    }
    foo2();
}

foo1();

//result:
//apple
//banana
//strawberry
```