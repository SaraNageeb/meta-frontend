# JavaScript querySelector() method 
The querySelector() method is a JavaScript method from the DOM API that allows you to retrieve a single element that match the query parameter passed to the method.

While the getElementsById() method restrict you to retrieve an element only by its id attribute value, the querySelector() method allows you to retrieve an element by any attribute present on the element.

The parameter you need to pass to the querySelector() method can be as simple or as complex as you need.

For example, here’s how to use the method to retrieve the first element that has the class attribute of box:

```js
document.querySelector(".box");
```

The querySelector() method always returns the first element that matches the query. The method searches the element on the page from top to bottom.

The string parameter passed to the querySelector() method follows the CSS selector pattern, where class is represented by a period ``. `` and id is represented by a hash ``#``.

***

### JavaScript querySelector() method example

Suppose you have the following HTML element on your page:


```js
<body>
  <h1>Query Selector</h1>
  <h2>Learning Query selector method</h2>
  <p id="opening" class="bold">Placeholder</p>
</body>
```

You can retrieve the ``<p>`` element by passing "p" as the method’s argument:


```js
let element = document.querySelector("p");

console.log(element);
// <p id="opening" class="bold">Opening</p>
```

Or you can also pass the id or the class attribute, it will return the same ``<p>`` element:

```js
document.querySelector(".bold");
// <p id="opening" class="bold">Opening</p>

document.querySelector("#opening");
// <p id="opening" class="bold">Opening</p>
```
You can also select an element by other attributes like target or value:

```js
// return the first element with target="_blank"
document.querySelector("[target=_blank]");

// return the first element with value="red"
document.querySelector("[value=red]");
```

Even when you pass a selector that returns two elements, only the first element will be returned by the method. The following code tries to fetch both ``<h1>`` and ``<h2>``elements:

```js
document.querySelector("h1, h2");
// <h1>Query Selector</h1>
```

And that’s how the querySelector() method works.

***

### Summary
The .querySelector() method selects the first child/descendant element that matches its selector argument.

It can be invoked on the document object to search the entire document or on a single element instance to search that element’s descendants.

```js
// Select the first <div>
const firstDiv = document.querySelector('div');
 
// Select the first .button element inside .main-navigation
const navMenu = document.getElementById('main-navigation');
const firstButtonChild = navMenu.querySelector('.button');
```

***