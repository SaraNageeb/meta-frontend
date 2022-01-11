### Numbers
Numbers in JavaScript are as straightforward as they sound; you don’t need any special syntax for numbers, you write them straight into JavaScript.

In JavaScript, numbers can be whole numbers (called integers). For example:

```js
5
0
-100
9999

// Or numbers with decimal points to represent fractions of a whole number like:
3.14
-9.88888
.0000009

// Numbers like these with decimal points are also called "floating point numbers." JavaScript even lets you use scientific notation to represent really large or really small numbers:
```

***

### Storing Numbers in Variables
Just as with string values, you can put a number in a variable, or "assign" a number to a variable using the equals sign (or assignment operator):

```jsx
let score = 0;
const pi = 3.141592653589793;
const absoluteZero = -273.15;
const numberOfAtomsOnEarth = 1.33e+105;
```

Unlike strings, you don't put quote marks around a number. If you do, then you have a string, not a number. This is one confusing part about working with strings and numbers. For example, consider the following code:

```jsx
const aString = '10';
```

The value stored in the variable **`aString`** is not the number 10. It's a **string** made up of the character **`1`** followed by **`0`** – this can lead to strange and confusing behavior like making some math operations not work as expected.

***

### Creating a Program with Math
Building a short program that helps you calculate the number of seconds in a day, hours in a week, or minutes in a year.

```jsx
const secsPerMin = 60;
const minsPerHour = 60;
const hoursPerDay = 24;
const daysPerWeek = 7;
const weeksPerYear = 52;

const secondsPerDay = secsPerMin * minsPerHour * hoursPerDay;
console.log(`There are ${secondsPerDay} seconds in a day.`);
```

***

### Arithmetic Operators
JavaScript lets you perform most mathematical calculations, including addition, subtraction, multiplication, and division.

For example, in a previous course, you used the **`+`** symbol (or the addition operator) to add two numbers together:

```jsx
2 + 7 // 9
```

To subtract numbers, use a minus sign (or the subtraction operator):

```jsx
4 - 3 // 1
```

To divide two numbers, you use a forward slash character, also called the division operator:

```jsx
6 / 3 // 2
```

The division operator instructs the JavaScript engine to divide the number on the left by the number on the right. In the example above, divide 6 by 3 (which is 2).

To multiply numbers, use the multiplication operator, which is represented by an asterisk. For example, the following means **`10`** times **`9`**:

```jsx
10 * 9 // 90
```

You won't spend much time doing literal calculations with JavaScript, meaning you don't need to ask JavaScript what '2 + 2' is – we have calculators for that. However, you will frequently store numbers in variables, and then perform calculations with those variables.

For example, you might start a game by creating a variable named **`score`**:

```jsx
let score;
```

And store the number **`0`** in it:

```jsx
let score = 0;
```

Later in the program, maybe when the player destroys an invading spaceship, you add 100 points to that score:

```js
score = score + 100;
```

The variable **`score`** appears twice in this statement. Remember, when putting a value into a variable, whatever is on the right goes into the variable on the left. In this case, the value on the right is the current contents of the variable **`score`** plus **`100`**. That total is then stored back into the variable on the left -- this is how we update a variable.

The **`let`** keyword allows you to add to the current value of **`score`**.

***

### Assignment Operators
There are shorthand methods for performing each of the basic mathematical operations on a variable: addition, subtraction, multiplication and division. For example, to add **`10`** to the contents of a variable, use **`+= 10`**. This both adds **`10`** to the current variable and assigns the result back into the variable.

There are also shorthand for subtracting from a variable, multiplying a variable by a value, and dividing a variable by a value.
<br>

![Assignment Operators](/img/03-numbers/assign-operators.png)

***