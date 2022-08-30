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
The easiest way to access a single element in the DOM is by its unique ```ID```. You can get an element by ID with the ```getElementById()``` method of the ```document``` object.

```js
document.getElementById();
```

In order to be accessed by ID, the HTML element must have an ```id``` attribute. You have a ```div``` element with an ID of ```demo``` you can use:

```js
<div id="demo">Access me by ID</div>
```

In the Console, get the element and assign it to the ```demoId``` variable.

```js
const demoId = document.getElementById('demo');
```

Logging ```demoId``` to the console will return our entire HTML element.

```js
console.log(demoId);
```

```
// Output
<div id="demo">Access me by ID</div>
```

You can be sure you’re accessing the correct element by changing the ```border``` property to ```purple```.

```js
demoId.style.border = '1px solid purple';
```

Once you do so, your live page will look like this:

![image](https://user-images.githubusercontent.com/25232528/187435369-85b871a1-bd52-4099-8faf-7acc21b202a4.png)
 
## Select Elements by Class Name
The ```class``` attribute is used to access one or more specific elements in the DOM. You can get all the elements with a given class name with the ```getElementsByClassName()``` method.

```js
document.getElementsByClassName();
```

Now we want to access more than one element, and in our example we have two elements with a ```demo``` class.

```js
<div class="demo">Access me by class (1)</div>
<div class="demo">Access me by class (2)</div>
```

Access these elements in the Console and put them in a variable called ```demoClass```.

```js
const demoClass = document.getElementsByClassName('demo');
```

At this point, it might be tempting to modify the elements the same way you did with the ID example. However, if you try to run the following code and change the ```border``` property of the class demo elements to orange, you will get an error.

```js
demoClass.style.border = '1px solid orange';
```
```
Output
Uncaught TypeError: Cannot set property 'border' of undefined
```

The reason this doesn’t work is because instead of just getting one element, you have an array-like object of elements (HTMLCollection).

```
console.log(demoClass);
```

```
// Output
(2) [div.demo, div.demo]
```
JavaScript arrays must be accessed with an index number. You can change the first element of this array by using an index of ```0```.

```js
demoClass[0].style.border = '1px solid orange';
```

Generally when accessing elements by class, we want to apply a change to all the elements in the document with that particular class, not just one. You can do this by creating a ```for loop```, and looping through every item in the array.

```js
for (i = 0; i < demoClass.length; i++) {
  demoClass[i].style.border = '1px solid orange';
 }
```

When you run this code, your live page will be rendered like this:

![image](https://user-images.githubusercontent.com/25232528/187435190-3e3bb503-31d3-4d1f-9a61-c81c52a5b227.png)


***

## Use CSS Queries to Select Page Elements
To access a single element, you can use the ```querySelector()``` method. In our HTML file, we have a ```demo-query``` element

```js
<div id="demo-query">Access me by query</div>
```

The selector for an ```id``` attribute is the hash symbol (```#```). You can assign the element with the ```demo-query``` id to the ```demoQuery``` variable.

```js
const demoQuery = document.querySelector('#demo-query');
```

In the case of a selector with multiple elements, such as a class or a tag, ```querySelector()``` will return the first element that matches the query. You can use the ```querySelectorAll()``` method to collect all the elements that match a specific query.

In the example file, you have two elements with the ```demo-query-all``` class applied to them.

```js
<div class="demo-query-all">Access me by query all (1)</div>
<div class="demo-query-all">Access me by query all (2)</div>
```

The selector for a ```class``` attribute is a period or full stop (```.```), so you can access the class with ```.demo-query-all```.

```js
const demoQueryAll = document.querySelectorAll('.demo-query-all');
```

Using the ```forEach()``` method, you can apply the color ```green``` to the ```border``` property of all matching elements.

```js
demoQueryAll.forEach(query => {
  query.style.border = '1px solid green';
});
```

![image](https://user-images.githubusercontent.com/25232528/187438603-f5ad2e71-7ee0-4932-90d3-69df89f9ba14.png)

Using the query selector methods is extremely powerful, as you can access any element or group of elements in the DOM the same way you would in a CSS file.

***

# Complete JavaScript Code

```js
// Assign all elements
const demoId = document.getElementById('demo');
const demoClass = document.getElementsByClassName('demo');
const demoTag = document.getElementsByTagName('article');
const demoQuery = document.querySelector('#demo-query');
const demoQueryAll = document.querySelectorAll('.demo-query-all');

// Change border of ID demo to purple
demoId.style.border = '1px solid purple';

// Change border of class demo to orange
for (i = 0; i < demoClass.length; i++) {
  demoClass[i].style.border = '1px solid orange';
}

// Change border of tag demo to blue
for (i = 0; i < demoTag.length; i++) {
  demoTag[i].style.border = '1px solid blue';
}

// Change border of ID demo-query to red
demoQuery.style.border = '1px solid red';

// Change border of class query-all to green
demoQueryAll.forEach(query => {
  query.style.border = '1px solid green';
});
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Accessing Elements in the DOM</title>

  <style>
    html { font-family: sans-serif; color: #333; }
    body { max-width: 500px; margin: 0 auto; padding: 0 15px; }
    div, article { padding: 10px; margin: 5px; border: 1px solid #dedede; }
  </style>

</head>

<body>

  <h1>Accessing Elements in the DOM</h1>

  <h2>ID (#demo)</h2>
  <div id="demo">Access me by ID</div>

  <h2>Class (.demo)</h2>
  <div class="demo">Access me by class (1)</div>
  <div class="demo">Access me by class (2)</div>

  <h2>Tag (article)</h2>
  <article>Access me by tag (1)</article>
  <article>Access me by tag (2)</article>

  <h2>Query Selector</h2>
  <div id="demo-query">Access me by query</div>

  <h2>Query Selector All</h2>
  <div class="demo-query-all">Access me by query all (1)</div>
  <div class="demo-query-all">Access me by query all (2)</div>

  <script src="access.js"></script>

</body>

</html>
```

***

# Making Changes to the DOM
Once you've selected an element in the DOM, you can read or modify it. You can replace or change the display of text, for example. Or you can create new nodes and insert them into the DOM. 

## Get and Set Content with textContent and innerHTML
The difference between the two methods is quite clear and is in the name itself.

The innerText method, for example, will change the content of an element with only text, that is, we cannot insert HTML with this method

See a practical example:

```js
var el = document.querySelector("#teste");
el.innerText = "<div> Olá </div>";
```

This code will make the text ```<div>Hello </div>```, be inserted in the element, ignoring the opening and closing of the div tags.

**Graphic representation of the example:**

![image](https://user-images.githubusercontent.com/25232528/187470765-8ff21b5e-531e-49cf-bbf6-27e15a0198e6.png)


In ```innerHTML``` we will have a different approach, we can change the content of an element in the DOM by inserting text and HTML.

So if we use this same example, but with the ```innerHTML``` method:

```js
var el = document.querySelector("#test");
el.innerHTML = "<div> Hello </div>";
```

We will have the interpretation of the div tag, and it will be converted to HTML

The only representation will be the one that is as text between the tags

We can then conclude that when the content to be inserted is text only, we will opt for ```innerText```

If we need to insert and create HTML structures, we will opt for ```innerHTML```

**Conclusion**

In this article we saw the difference between ```innerHTML``` and ```innerText``` to change DOM in JavaScript

* The main difference is that ```innerText``` can only add text to elements.

* ```innerHTML``` can add text and HTML tags too, being able to structure a web page.

* So if we need to insert only text, we can use ```innerText```, if there is also HTML in our insertion, we will use ```innerHTML```


## Change Element Attributes
HTML tags are converted into objects (called nodes) and placed into the DOM. Attributes exist as properties of element objects, like the href attribute of an <a> element or the action attribute of a <form> element. You get or set those attributes by way of properties, similar to the way you did earlier with an input element's value property and a heading's textContent property.
 
**className**
The className property overwrites any existing classes on an element. When dealing with multiple classes on an element, the classList property offers a convenient alternative to accessing an element's list of classes.

**Get and set attributes with JavaScript**
The getAttribute and setAttribute methods provide alternative ways to manage element attributes.

***
 
## Set Inline Styles with the style Property
Like most other attributes, you can get and set the inline style of an element in the DOM with the style property. However, unlike most other attributes, the style property returns an object containing a list of CSS style properties.
 
**Examples**

```js
// Change the color of "myH1":

document.getElementById("myH1").style.color = "red";
```
