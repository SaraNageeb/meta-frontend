# An introduction to the JavaScript DOM
The Javascript DOM (Document Object Model) is an interface that allows developers to manipulate the content, structure and style of a website.

![DOM](/img/javascript-dom-structure.gif)

With the object model, JavaScript gets all the power it needs to create dynamic HTML:

* JavaScript can change all the HTML elements in the page
* JavaScript can change all the HTML attributes in the page
* JavaScript can change all the CSS styles in the page
* JavaScript can remove existing HTML elements and attributes
* JavaScript can add new HTML elements and attributes
* JavaScript can react to all existing HTML events in the page
* JavaScript can create new HTML events in the page

The places of the elements are referred to as nodes. Not only elements get nodes but also the attributes of elements and text get their own node (attribute-nodes and text-nodes).

### DOM Document
The DOM Document is the owner of all other objects in your webpage. That means if you want to access any object on your webpage you always have to start with the document. It also contains many important properties and methods that enable us to access and modify our website.

***