# JavaScript switch Statement

The JavaScript ```switch``` statement is used in decision making.

The ```switch``` statement evaluates an expression and executes the corresponding body that matches the expression's result.

The syntax of the ```switch``` statement is:

```js
switch(variable/expression) {
    case value1:  
        // body of case 1
        break;

    case value2:  
        // body of case 2
        break;

    case valueN:
        // body of case N
        break;

    default:
        // body of default
}
```

The ```switch``` statement evaluates a variable/expression inside parentheses ```()```.

* If the result of the expression is equal to ```value1```, its body is executed.
* If the result of the expression is equal to ```value2```, its body is executed.
* This process goes on. If there is no matching case, the ```default``` body executes.

***

## Example 1: Simple Program Using switch Statement

```js
// program using switch statement
let a = 2;

switch (a) {

    case 1:
        a = 'one';
        break;
    case 2:
        a = 'two';
        break;
    default:
        a = 'not found';
        break;
}
console.log(`The value is ${a}`);
```

**Output**

```
The value is two.
```
In the above program, an expression ```a = 2``` is evaluated with a ```switch``` statement.

* The expression's result is evaluated with ```case 1``` which results in ```false```.

* Then the ```switch``` statement goes to the second case. Here, the expression's result matches with ```case 2```. So``` The value is two``` is displayed.

* The ```break``` statement terminates the block and control flow of the program jumps to outside of the ```switch``` block.

***

## Example 2: switch With Multiple Case

```
// multiple case switch program
let fruit = 'apple';
switch(fruit) {
    case 'apple':
    case 'mango':
    case 'pineapple':
        console.log(`${fruit} is a fruit.`);
        break;
    default:
        console.log(`${fruit} is not a fruit.`);
        break;
}
```

**Output**

```
apple is a fruit.
```

In the above program, multiple cases are grouped. All the grouped cases share the same code.

If the value of the ```fruit``` variable had value ```mango``` or ```pineapple```, the output would have been the same.

***

