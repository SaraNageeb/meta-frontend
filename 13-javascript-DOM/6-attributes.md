To get the value of an attribute of an element, you use the getAttribute() method:

let attributeValue = element.getAttribute(attributeName);
Code language: JavaScript (javascript)
For example, to get the value of the title attribute of an anchor element, you use the following code:

const link = document.querySelector('a');
let title = link.getAttribute('title');
Code language: JavaScript (javascript)
It’s possible to use the getAttribute() method to get the data-* attribute. For example:

<a href="/api" data-method="post">Save</a>
Code language: HTML, XML (xml)
To get the value of the data-method attribute of the anchor element, you use the getAttribute() method as follows:

const link = document.querySelector('a');
let method = link.getAttribute('data-method');

***

Summary: in this tutorial, you will learn how to set the value of an attribute on a DOM element using the setAttribute() method.

To set a value of an attribute on an element, you use the setAttribute() method:

element.setAttribute(name,value);
Code language: CSS (css)
For example, to set the title attribute of the anchor element, you use the following code:

let link = document.querySelector('a');
link.setAttribute('title','JavaScript DOM setAttribute');
Code language: JavaScript (javascript)
You can also use the setAttribute()method to set the value for a data-* attribute. For example:

let btn = document.querySelector('a');
btn.setAttribute('data-method','post');
