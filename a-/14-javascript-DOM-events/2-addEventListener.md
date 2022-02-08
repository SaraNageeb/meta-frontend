# addEventListener()
The addEventListener() method accepts three arguments: an event name, an event handler function, and a Boolean value that instructs the method to call the event handler during the capture phase (true) or during the bubble phase (false). For example:

```js
let btn = document.querySelector('#btn');
btn.addEventListener('click',function(event) {
    alert(event.type); // click
});
```

It is possible to add multiple event handlers to handle a single event, like this:

```js
let btn = document.querySelector('#btn');
btn.addEventListener('click',function(event) {
    alert(event.type); // click
});

btn.addEventListener('click',function(event) {
    alert('Clicked!');
});
```

***

### Examples


Attach a click event to a ```<button>```element. When the user clicks on the button, output "Hello World" in a ```<p>``` element with id="demo":

```js
document.getElementById("myBtn").addEventListener("click", function() {
  document.getElementById("demo").innerHTML = "Hello World";
});
```

***

### Example 2

```js
const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function () {
    alert("CLICKED!");
})

function twist() {
    console.log("TWIST!")
}
function shout() {
    console.log("SHOUT!")
}

const tasButton = document.querySelector('#tas');

// tasButton.onclick = twist;
// tasButton.onclick = shout;

tasButton.addEventListener('click', twist)
tasButton.addEventListener('click', shout)
```