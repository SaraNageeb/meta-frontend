# What is the DOM?
When a web page is loaded, the browser creates a Document Object Model of the page.

The HTML DOM model is constructed as a tree of Objects:


![DOM](https://www.kirupa.com/html5/images/DOM_js_72.png)

With the object model, JavaScript gets all the power it needs to create dynamic HTML:

* JavaScript can change all the HTML elements in the page
* JavaScript can change all the HTML attributes in the page
* JavaScript can change all the CSS styles in the page
* JavaScript can remove existing HTML elements and attributes
* JavaScript can add new HTML elements and attributes
* JavaScript can react to all existing HTML events in the page
* JavaScript can create new HTML events in the page

***

## The Browser's Global window Object
The browser as a global environment provides variables, objects, and functions additional to those in the core JavaScript language to make things happen inside the browser window; it's what allows your JavaScript code to connect to the DOM and manipulate a web page. The browser has a global object called window containing all the properties and methods available to the current browser window.

For Example, the alert method comes from the window object. You can invoke it as shown below.

```js
window.alert("Hello")
```

You can also invoke it using shorthand. JavaScript automatically looks for it in the global object, which is the window object:

```js
alert("Hello")
```

***

## Accessing the DOM
The window object contains a property named document, which is an object, and it's the entry point into the DOM loaded in the current window. We use the document object to select and control elements of the web page. 

For Example,checking document property on Google page.

```js
document.title
// 'Google''

document.domain
// 'www.google.com'

// Change the background color
document.body.style.backgroundColor = 'red';
```
***

## Introduction to Browser Events
When you load a web page in your browser and start interacting with it, you're generating all kinds of events (or actions) that the browser is listening for and registering behind the scenes. You can write JavaScript to make the browser do something in response to a user's action.
 
**Anonymous function declaration passed to addEventListener()**

```js
const body = document.body;
body.addEventListener('click', function () {
  body.innerHTML = '<h1>Hello, world!</h1>';
});
```

***

# Getting a Handle on the DOM
The first step of making a web page interactive involves identifying an element for the browser to find and make it available to do something using JavaScript. There are several ways to access specific elements in the DOM. Let's explore those you are likely to use most often.


## Select an Element by ID
The easiest way to find an HTML element in the DOM, is by using the element id.

This example finds the element with ```id="intro"```:

Example

```js
const element = document.getElementById("intro");
```

## Select an Element by Tag Name
This example finds all ```<p>``` elements:

Example
```js
const element = document.getElementsByTagName("p");
 ```
 
 This method returns an HTMLCollection of elements with the given tag name.
 
```js
 // Loop Through an HTMLCollection
 
 for (let i = 0; i < items.length; i++) {
  items[i].style.color = 'orchid';

  console.log(items[i]); // <li style="color: orchid;">Make coffee</li>
}
```
 
 ## Select Elements by Class Name
If you want to find all HTML elements with the same class name, use ```getElementsByClassName()```

Example

Get all elements with ```class="example"```:

```js
const collection = document.getElementsByClassName("example");
```

Get all elements with both the "example" and "color" classes:

```js
const collection = document.getElementsByClassName("example color");
```

The ```getElementsByClassName()``` method returns an HTMLCollection

Inside the ```for...of loop```, the variable highlight is assigned a different value. Log the highlight variable to the console to view the collection of returned elements.

```js
for ( const highlight of highlights ) {
  highlight.style.backgroundColor = 'cornsilk';

  console.log(highlight);
}
```
