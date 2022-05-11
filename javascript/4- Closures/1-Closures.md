JavaScript Closures

JavaScript Nested Function
In JavaScript, a function can also contain another function. This is called a nested function. For example,

// nested function example

// outer function
function greet(name) {

    // inner function
    function displayName() {
        console.log('Hi' + ' ' + name);
    }

    // calling inner function
    displayName();
}

// calling outer function
greet('John'); // Hi John
Run Code
In the above program, the greet() function contains the displayName() function inside of it.

***

Returning a Function
In JavaScript, you can also return a function within a function. For example,

function greet(name) {
    function displayName() {
        console.log('Hi' + ' ' + name);
    }

    // returning a function
    return displayName;
}

const g1 = greet('John');
console.log(g1); // returns the function definition
g1(); // calling the function

Output

function displayName() {
      console.log('Hi' + ' ' + name);
  }
Hi John
In the above program, the greet() function is returning the displayName function definition.

Here, the returned function definition is assigned to the g1 variable. When you print g1 using console.log(g1), you will get the function definition.

To call the function stored in the g1 variable, we use g1() with parentheses.

***
JavaScript Closures
In JavaScript, closure provides access to the outer scope of a function from inside the inner function, even after the outer function has closed. For example,

// javascript closure example

// outer function
function greet() {

    // variable defined outside the inner function
    let name = 'John';

    // inner function
    function displayName() {

        // accessing name variable
        return 'Hi' + ' ' + name;
      
    }

    return displayName;
}

const g1 = greet();
console.log(g1); // returns the function definition
console.log(g1()); // returns the value
Run Code
Output

function displayName() {
      // accessing name variable
      return 'Hi' + ' ' + name;
  }
Hi John
In the above example, when greet() function is called, it returns the function definition of displayName.

Here, g1 is a reference to the displayName() function.

When g1() is called, it still has access to the greet() function.

When we run console.log(g1), it returns the function definition.

The concept of closure exists for other programming languages like Python, Swift, Ruby, etc.

Let's have a look at another example.

// closure example

function calculate(x) {
    function multiply(y) {
        return x * y;
    }
    return multiply;
}

const multiply3 = calculate(3);
const multiply4 = calculate(4);

console.log(multiply3); // returns calculate function definition
console.log(multiply3()); // NaN

console.log(multiply3(6)); // 18
console.log(multiply4(2)); // 8
Run Code
In the above program, the calculate() function takes a single argument x and returns the function definition of the multiply() function. The multiply() function takes a single argument y and returns x * y.

Both multiply3 and multiply4 are closures.

The calculate() function is called passing a parameter x. When multiply3(6) and multiply4(2) are called, the multipy() function has access to the passed x argument of the outer calculate() function.
