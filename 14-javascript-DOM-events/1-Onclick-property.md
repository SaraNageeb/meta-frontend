# onclick Event
The onclick event occurs when the user clicks on an element.

***

### Syntax

In HTML:
```html
<element onclick="myScript">
```

In JavaScript:
```js
object.onclick = function(){myScript};
```

In JavaScript, using the addEventListener() method:
```js
object.addEventListener("click", myScript);
```
***

### Example

Execute a JavaScript when a button is clicked:

<button onclick="myFunction()">Click me</button>

```js
const btn = document.querySelector('#v2');
```

***

### More Examples

Example
Click on a ```<button>``` element to display the current day, date and time:

```html
<button onclick="getElementById('demo').innerHTML = Date()">What is the time?</button>
```

Example
Click on a ```<p>``` element to change its text color to red:

```html
<p id="demo" onclick="myFunction()">Click me to change my text color.</p>

<script>
function myFunction() {
  document.getElementById("demo").style.color = "red";
}
</script>
```
***

```js
btn.onclick = function () {
    console.log("YOU CLICKED ME!")
    console.log("I HOPE IT WORKED!!")
}
```

```js
function scream() {
    console.log("AAAAAHHHHH");
    console.log("STOP TOUCHING ME!")
}

btn.onmouseenter = scream;
```

```js
document.querySelector('h1').onclick = () => {
    alert('you clicked the h1!')
}
```

***