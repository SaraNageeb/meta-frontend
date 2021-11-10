# JavaScript querySelectorAll() method 
The querySelectorAll() method is a JavaScript method from the DOM API that allows you to retrieve all elements that match the query parameter passed to the method.

While other methods like getElementsByClassName() and getElementsByName() restrict you to retrieve elements only by the attribute mentioned in the methods, the querySelectorAll() method allows you to retrieve elements by any attribute present on the elements.
The parameter you need to pass to the querySelectorAll() method can be as simple or as complex as you need.

For example, here’s how to use the method to retrieve any element that has the class attribute of box:


```js
document.querySelectorAll(".box");
```

The string parameter passed to the querySelectorAll() method follows the CSS selector pattern, where class is represented by a period . and id is represented by a hash #.

To retrieve all copies of a specific element, you can simply pass the name of the element as its argument.

***

### JavaScript querySelectorAll() method example

Suppose you have the following HTML element on your page:


```js
<body>
  <p id="opening" class="bold">Opening</p>
  <p id="middle">Middle</p>
  <p id="closing" class="bold">Closing</p>
</body>
```

You can retrieve all ``<p>`` element by passing "p" as the method’s argument:


```js
llet elements = document.querySelectorAll("p");

console.log(elements);
// NodeList(3) [p#opening.bold, p#middle, p#closing.bold]
console.log(elements[0]);
// <p id="opening" class="bold">Opening</p>
```

Or when you only need the opening and the closing ``<p> `` elements, you can pass either the class or the ids as the argument:

```js
document.querySelectorAll(".bold");
// [p#opening.bold, p#closing.bold]

document.querySelectorAll("#opening, #closing");
// [p#opening.bold, p#closing.bold]
```

You can also select an element by other attributes like target or value:

```js
// return all elements with target="_blank"
document.querySelectorAll("[target=_blank]");

// return all elements with value="red"
document.querySelectorAll("[value=red]");
```

The return value of the querySelectorAll() method will be an array-like object called NodeList.

Although you can access the elements stored inside the NodeList object like an array, the NodeList object lacks Array object methods like map() and filter().

Still, the NodeList object implements the forEach() method, which allows you to loop over the object and process each element returned by the method:

```js
let elements = document.querySelectorAll("p");

elements.forEach(element => {
  console.log(element);
  element.style.backgroundColor = "yellow";
})
```

The code above will log the current element inside the loop and set its background-color value to "yellow";

Finally, the querySelectorAll() method always returns a NodeList object even when you only have one matching element.

When you only need to retrieve a single element, you can use the querySelector() method instead.

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

### Summary

* The querySelector() finds the first element that matches a CSS selector or a group of CSS selectors.

* The querySelectorAll() finds all elements that match a CSS selector or a group of CSS selectors.

* A CSS selector defines elements to which a CSS rule applies.