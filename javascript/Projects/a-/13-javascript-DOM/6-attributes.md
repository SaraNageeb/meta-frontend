# Get the Value of an Attribute

To get the value of an attribute of an element, you use the getAttribute() method:

```js
let attributeValue = element.getAttribute(attributeName);
```

For example, to get the value of the title attribute of an anchor element, you use the following code:

```js
const link = document.querySelector('a');
let title = link.getAttribute('title');
```

It’s possible to use the getAttribute() method to get the data-* attribute. For example:

```html
<a href="/api" data-method="post">Save</a>
```
To get the value of the data-method attribute of the anchor element, you use the getAttribute() method as follows:

```js
const link = document.querySelector('a');
let method = link.getAttribute('data-method');
```
***

# Set the Value of an Attribute

To set a value of an attribute on an element, you use the setAttribute() method:


```css
element.setAttribute(name,value);
```
For example, to set the title attribute of the anchor element, you use the following code:

```js
let link = document.querySelector('a');
link.setAttribute('title','JavaScript DOM setAttribute');
```

You can also use the setAttribute()method to set the value for a data-* attribute. For example:

```js
let btn = document.querySelector('a');
btn.setAttribute('data-method','post');
```

***
