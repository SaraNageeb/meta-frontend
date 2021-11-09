# Rest Params

Note that ES6 also has the three dots ( ...) which is a rest parameter that collects all remaining arguments of a function into an array.



```js
function f(a, b, ...args) {
    console.log(args); 
    console.log(a); 
    console.log(b); 
}

f(1, 2, 3, 4, 5);
```
Output:

```js
[ 3, 4, 5 ]
1
2
```
In this example, the rest parameter (...) collects the arguments 3,4 and 5 into an array args. So the three dots ( ...) represent both the spread operator and the rest parameter.

Here are the main differences:

* The spread operator unpacks elements.
* The rest parameter packs elements into an array.

The rest parameters must be the last arguments of a function. However, the spread operator can be anywhere:
```js
const odd = [1,3,5];
const combined = [...odd, 2,4,6];
console.log(combined);
```

Output:

```js
[ 1, 3, 5, 2, 4, 6 ]
```

Or

```js
const odd = [1,3,5];
const combined = [2,...odd, 4,6];
console.log(combined);
```

Output:
```js
[ 2, 1, 3, 5, 4, 6 ]
```

***

More example:

```js
// function sum() {
//     return arguments.reduce((total, el) => total + el)
// }

// COLLECT THE "REST" IN NUMS:
function sum(...nums) {
    return nums.reduce((total, el) => total + el)
}


function raceResults(gold, silver, ...everyoneElse) {
    console.log(`GOLD MEDAL GOES TO: ${gold}`)
    console.log(`SILVER MEDAL GOES TO: ${silver}`)
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`)
}
```