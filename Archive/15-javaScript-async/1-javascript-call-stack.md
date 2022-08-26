# Introduction to JavaScript Call Stack
JavaScript engine uses a call stack to manage execution contexts: the Global Execution Context and Function Execution Contexts.

The call stack works based on the LIFO principle i.e., last-in-first-out.

When you execute a script, the JavaScript engine creates a Global Execution Context and pushes it on top of the call stack.

Whenever a function is called, the JavaScript engine creates a Function Execution Context for the function, pushes it on top of the Call Stack, and starts executing the function.

If a function calls another function, the JavaScript engine creates a new Function Execution Context for the function that is being called and pushes it on top of the call stack.

When the current function completes, the JavaScript engine pops it off the call stack and resumes the execution where it left off in the last code listing.

The script will stop when the call stack is empty.

***

### JavaScript call stack example

See the following script:

```js
function add(a, b) {
    return a + b;
}

function average(a, b) {
    return add(a, b) / 2;
}

let x = average(10, 20);
```

***


When the script runs, the JavaScript engine places the global execution context (denoted by main() or global() function on the call stack.

![Call Stack](/img/JavaScript-Call-Stack-main1.png)

The global execution context enters the creation phase and moves to the execution phase.

The JavaScript engine executes the call to the average(10, 20) function and creates a function execution context for the average() function and pushes it on top of the call stack:

![Call Stack](/img/JavaScript-Call-Stack-step-2.png)

The JavaScript engine starts executing the average() since it is at the top of the call stack.

The average() function calls add() function. At this point, the JavaScript engine creates another function execution context for the add() function and places it on the top of the call stack:

![Call Stack](/img/JavaScript-Call-Stack-step-3.png)

JavaScript engine executes the add() function and pops it off the call stack:

![Call Stack](/img/JavaScript-Call-Stack-step-4.png)

At this point, the average() function is on top of the call stack, JavaScript engine executes it and pops it off the call stack.

![Call Stack](/img/JavaScript-Call-Stack-step-5.png)

Now, the call stack is empty so the script stops executing:

![Call Stack](/img/JavaScript-Call-Stack-empty-stack.png)

The following picture illustrates the overall status of the Call Stack in all steps:

JavaScript-Call-Stack
![Call Stack](/img/JavaScript-Call-Stack.png)

***