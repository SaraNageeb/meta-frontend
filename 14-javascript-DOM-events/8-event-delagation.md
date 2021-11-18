# Event delegation
Event delegation refers to the idea of delegating event listening to parent elements instead of adding event listeners directly to the event targets. Using this technique, the parent can catch and handle the bubbling events as necessary.

```js
window.addEventListener('click', e => {
  if (e.target.className === 'btn') console.log('Hello there!');
});
```

In the above example, we delegate event handling from the button to window and use event.target to get the original event's target.

Using the event delegation pattern is advantageous for two reasons:

* By using event delegation, we can listen for events on a large amount of elements without having to attach event listeners individually, which can provide performance benefits.

* By using event delegation, dynamic elements (i.e. added or removed from the DOM over the course of time) can have their events captured and handled without requiring listeners to be registered or removed.

***

### Event Delegation Example
Event delegation allows us to attach a single event listener, to a parent element, that will fire for all descendants matching a selector, whether those descendants exist now or are added in the future.

The idea is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we put a single handler on their common ancestor.

Let's try to understand this using an example:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <ul id="category">
        <li id="books">Books</li>
        <li id="camera">Camera</li>
        <li id="sports">Sports</li>
    </ul>

    <script src="index.js"></script>

</body>

</html>
```

In the above code snippet, we want to perform some specific actions whenever the user clicks on any of the li elements. Let's say we want to print that specific li element in the console.

One way to do this is to attach an event listener to each of the li element like the below code snippet:

```js
document.querySelector('#books').addEventListener('click', (e)=>{
    console.log(e.target.id);
})

document.querySelector('#camera').addEventListener('click', (e)=>{
    console.log(e.target.id);
})

document.querySelector('#sports').addEventListener('click', (e)=>{
    console.log(e.target.id);
})
```

As you already noticed, it is not an optimized way to implement this functionality. There may be a possibility that there are more li elements in the future which leads to more code addition & violates the rule: Don't repeat yourself.

Let's take a look at how we can implement the same using Event Delegation.

```js
document.querySelector('#category').addEventListener('click', (e) => {
    if (e.target.tagName == 'LI') {
        console.log(e.target.id);
    }
})
```

In the above code snippet, instead of attaching a handler to each of the li elements – we put a single handler on their common parent ul and it implements the same functionality using the concept of Event Bubbling under the hood.