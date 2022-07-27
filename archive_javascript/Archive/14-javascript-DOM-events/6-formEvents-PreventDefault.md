# Event.preventDefault
Calling the preventDefault() method of the event object will cancel the default handling that the browser is programmed to execute.

Opening a new page on an a element click event, for example.

Or submitting a form on the submit event.

Calling preventDefault() is what you need to do to completely customize the action. Perhaps by creating a fetch request to load some JSON instead of opening a new page on a link click.

***

### Checkboxes
Normally, when you click on a checkbox it’ll toggle the check. However if you use preventDefault it will actually stop the broswer from doing that.

index.html
```html
<input type="checkbox" id="myCheckbox">  
```

index.js
```js
document
  .getElementById('myCheckbox')
  .addEventListener('click', (event) => {
    event.preventDefault();  // 👈
  });
```

Crazy! Just like that the browser is prevented from checking the box.


***

### Links and input boxes
You can use preventDefault on all sorts of different HTML elements. Let’s try using it on a link and an input box:

index.html

```html
<a href="https://duckduckgo.com" id="myLink">DuckDuckGo</a>  

<input type=text" id="myInput"/>
```

index.js
```js
document.getElementById('myLink')
  .addEventListener('click', (e) => e.preventDefault())

document.getElementById('myInput')
  .addEventListener('keypress', (e) => e.preventDefault())
```

This is probably obvious but should be mentioned: you’ll need to target the correct event. For example, targeting the keyup event on the ```<input>``` won’t prevent you from entering text since that happens during the keydown event.

That’s why we used keypress since it actually covers both keydown/keyup.

***

### preventDefault in Practice
In real life, you’ll probably resort to using preventDefault most often to stop forms from automatically submitting when the submit button is clicked, giving you a chance to instead submit the form data asynchronously using JavaScript and something like the Fetch API to make an Ajax request.

```js
document
  .getElementById('myForm')
  .addEventListener('submit', (event) => {
    event.preventDefault();  // 👈

    // ...send the form data and get a response asynchronously
  });
```

***

* Use preventDefault() method to prevent the default behavior of an event, but does not stop the event flow.