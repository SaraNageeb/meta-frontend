# Event bubbling
In the event bubbling model, an event starts at the most specific element and then flows upward toward the least specific element (the document or even window).

When you click the button, the click event occurs in the following order:

1. button
2. div with the id container
3. body
4. html
5. document

The click event first occurs on the button which is the element that was clicked. Then the click event goes up the DOM tree, firing on each node along its way until it reaches the document object.

The following picture illustrates the event bubbling effect when users click the button:

![Event Bubbling](/img/javascript-event-bubbling.png)

Note that modern web browsers bubble the event up to the window object.

***

### stopPropagation()
The stopPropagation() method immediately stops the flow of an event through the DOM tree. However, it does not stop the browers default behavior.

See the following example:

```js
let btn = document.querySelector('#btn');

btn.addEventListener('click', function(event) {
    console.log('The button was clicked!');
    event.stopPropagation();
});

document.body.addEventListener('click',function(event) {
    console.log('The body was clicked!');
});
```

Without the stopPropagation() method, you would see two messages on the Console window.

However, the click event never reaches the body because the stopPropagation() was called on the click event handler of the button.

Use stopPropagation() method to stop the flow of an event through the DOM tree, but does not cancel the browser default behavior.

***