# Switch 
The switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case, as well as statements in cases that follow the matching case.

***

### JavaScript Example: Statement - Switch
In the following example, if expr evaluates to Bananas, the program matches the value with case case 'Bananas' and executes the associated statement. When break is encountered, the program breaks out of switch and executes the statement following switch. If break were omitted, the statement for the case 'Cherries' would also be executed.

```js
const fruit = 'Mangoes'; // Oranges, Bananas, Cherries

switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Apples':
    console.log('Apples are $0.32 a pound.');
    break;
  case 'Bananas':
    console.log('Bananas are $0.48 a pound.');
    break;
  case 'Cherries':
    console.log('Cherries are $3.00 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;
  default:
    console.log('Sorry, we are out of ' + expr + '.');
}

console.log("Is there anything else you'd like?");
```

***

### Multi-case : single operation
This method takes advantage of the fact that if there is no break below a case clause it will continue to execute the next case clause regardless if the case meets the criteria.

This is an example of a single operation sequential case statement, where four different values perform exactly the same.

```js
var Animal = 'Giraffe';
switch (Animal) {
  case 'Cow':
  case 'Giraffe':
  case 'Dog':
  case 'Pig':
    console.log('This animal is not extinct.');
    break;
  case 'Dinosaur':
  default:
    console.log('This animal is extinct.');
}
```
