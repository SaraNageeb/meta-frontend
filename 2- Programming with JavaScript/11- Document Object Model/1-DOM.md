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
