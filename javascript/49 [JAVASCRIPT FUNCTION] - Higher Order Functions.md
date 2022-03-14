# Higher  Order Functions
A higher order function is a function that either takes a function as an argument or returns a function. 

Let’s take a look into some simple examples of higher order functions to enter into the topic and work with code.


***

### Taking a function as an argument
To start let’s build a very simple function called doOperation which takes 3 arguments:

* The function operation
* number1
* number2

Additionally, we will create an operation called sumBothNumbers which will simply return the sum of 2 numbers.

```js
function doOperation(operation, number1, number2) {
    return operation(number1, number2)
}

function sumBothNumbers(number1, number2) {
    return number1 + number2
}

doOperation(sumBothNumbers, 3, 5)

------------
Output
------------
8
```

***

### Returning a function
Next, we will build a higher order function which will return a function. Our function will be called multiplyBy and it will take a number as an argument and return a function that will multiply its input by that number.

```js
function multiplyBy(multiplier) {
    return function result(num) {
        return num * multiplier
    }
}

multiplyByThree = multiplyBy(3)
multiplyByThree(4)

------------
Output
------------
12
```

***