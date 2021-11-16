# append VS appendChild
append and appendChild are two popular methods used to add elements into the Document Object Model(DOM).

***

### .append()
This method is used to add an element in form of a Node object or a DOMString (basically means text). Here's how that would work.

```js
// Inserting a Node object
const parent = document.createElement('div');
const child = document.createElement('p');
parent.append(child);
// This appends the child element to the div element
// The div would then look like this <div><p></p></div>
```

```js
// Inserting a DOMString
const parent = document.createElement('div');
parent.append('Appending Text');
// The div would then look like this <div>Appending Text</div>
```

***

### .appendChild()
Similar to the .append method, this method is used to elements in the DOM, but in this case, only accepts a Node object.

```js
// Inserting a Node object
const parent = document.createElement('div');
const child = document.createElement('p');
parent.appendChild(child);
// This appends the child element to the div element
// The div would then look like this <div><p></p></div>
```

```js
// Inserting a DOMString
const parent = document.createElement('div');
parent.appendChild('Appending Text');
// Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'
```

***

### Differences
* .append accepts Node objects and DOMStrings while .appendChild accepts only Node objects.

```js
const parent = document.createElement('div');
const child = document.createElement('p');
// Appending Node Objects
parent.append(child) // Works fine
parent.appendChild(child) // Works fine
// Appending DOMStrings
parent.append('Hello world') // Works fine
parent.appendChild('Hello world') // Throws error
```

* .append does not have a return value while appendChild returns the appended Node object
```js
const parent = document.createElement('div');
const child = document.createElement('p');
const appendValue = parent.append(child);
console.log(appendValue) // undefined
const appendChildValue = parent.appendChild(child);
console.log(appendChildValue) // <p><p>
```

* .append allows you to add multiple items while appendChild allows only a single item

```js
const parent = document.createElement('div');
const child = document.createElement('p');
const childTwo = document.createElement('p');
parent.append(child, childTwo, 'Hello world'); // Works fine
parent.appendChild(child, childTwo, 'Hello world');
// Works fine, but adds the first element and ignores the rest
```

***

### Example
Append an item in a list:

```js
var node = document.createElement("LI"); // Create a <li> node

var textnode = document.createTextNode("Water"); // Create a text node

node.appendChild(textnode); // Append the text to <li>

document.getElementById("myList").appendChild(node); // Append <li> to <ul> with id="myList"
```

Before appending:
```
Coffee
Tea
```

After appending:
```
Coffee
Tea
Water
```

***