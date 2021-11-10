# JavaScript document.getElementById() Method
The document.getElementById() method returns the element that has the id attribute with the specified value.

document.getElementById() returns null if no elements with the specified ID exists.

An ID should be unique within a page. However, if more than one element with the specified ID exists, the .getElementById() method returns the first element in the source code.

***

### JavaScript getElementById() method example

Consider the following HTML document:

```js
<html>
    <head>
        <title>JavaScript getElementById() Method</title>
    </head>
    <body>
        <p id="message">A paragraph</p>
    </body>
</html>
```

The document contains a <p> element that has the id attribute with the value message:

```js
const p = document.getElementById('message');
console.log(p);
```

Output:

```js
<p id="message">A paragraph</p>
```

Once you selected an element, you can add styles to the element, manipulate its attributes, and traversing to parent and child elements.

***

### Summary
* The getElementById() returns a DOM element specified by an id or null if no matching element found.

* If multiple elements share the same id, even though it is invalid, the getElementById() returns the first element it encounters.