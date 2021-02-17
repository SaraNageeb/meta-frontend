# JavaScript Basics  #01

JavaScript is a programming language that drives the web: from front-end user interface design to server-side backend programming, you'll find JavaScript at every stage of a web site and web application. In this course, you'll learn the fundamental programming concepts and syntax of the JavaScript programming language.

# Hello, JavaScript!

JavaScript is the most popular programming language on the planet. It drives millions of web sites and applications, powers web servers, and is used to build desktop and mobile apps. In this stage, you'll create your first JavaScript program and learn how to troubleshoot your programming mistakes.

### JavaScript Everywhere

JavaScript is a powerful programming language that adds dynamic interactivity to millions of sites on the web. Before you start programming, learn about some of the places JavaScript runs and what JavaScript can do.

### Display Messages with JavaScript

Now you're going to take your first step into programming by learning three different ways to output messages with JavaScript: a dialog box, writing directly to the console and writing to the current web page.

- The alert() method displays an alert dialog with the optional specified content and an OK button.
- The console.log() method writes a message to the console.
- The document.write() method writes HTML expressions or JavaScript code to a document.

```jsx
alert("What is your favourite number?");
console.log("Hello World");
document.write("Welcome to my page");
```

### JavaScript Practice Challenge

Practice using JavaScript by writing a "self-destructing message" program.

```jsx
// 1. Display an alert dialog with the content: "Warning! This message will self-destruct in"
alert("Warning! This message will self-destruct in");

// 2. Display a "3... 2... 1..." countdown using 3 alert dialog boxes
alert("3..."); 
alert("2..."); 
alert("1..."); 

// 3. This statement selects the <h1> element and replaces its text with "BOOM!".
document.querySelector("h1").textContent = "🔥BOOM!🔥";

// 4. Log "Message destroyed!" to the console
console.log("Message destroyed!");
```

### Challenge Task

Next, in the app.js file, add the code required to print "Begin program" to the browser's JavaScript console.

Next, write the code for an alert dialog with the message "I am Programming!".

At the end of the script (after alert()), add the code required to print 'End program' to the browser's JavaScript console.

```jsx
console.log("Begin Program");
alert("I am Programming!");
console.log("End program");
```