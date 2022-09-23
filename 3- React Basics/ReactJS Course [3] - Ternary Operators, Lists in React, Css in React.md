# Ternary Operators, Lists in React, Css in React

***

## Practical styling with className
In React, practical CSS styles are applied through the className property.

This is also the equivalent of using a stylesheet for your project. Since React is driven by component structure, you can import your stylesheets for specific needs only.

Let’s look at an example.

```App.css```

```css
.CSS-span {
  display: inline-block;
  transform: rotate(-1deg);
  position: relative;
  color: #fff;
  background-color: #dd9662;
  padding: 1px 5px 1px 5px;
  border-radius: 5px;
}
```

```App.js```

```js
import './app.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        How to Style React Components with <span className="CSS-span">CSS</span>
        </p>
      </header>
    </div>
  );
  
}
```

And this would be the outcome:

![image](https://user-images.githubusercontent.com/25232528/191931170-0a811bad-e5f9-45f0-9440-ff9f4f6c1a61.png)


## Using JSX for Inline Styles
React lets you style DOM elements using inline styles. While the CSS logic remains the same, the style itself has to pass through JavaScript. This is also known as JSX.

Let’s look at an example:

```Headline.js```

```js
function Headline(){

 const headlineStyle = {
      backgroundColor: "#fff",
      lineHeight: "1.5",
      height: "2rem",
      border: "none",
      color: "black"
 }

    return (
        <div style= { headlineStyle } >
            <h2>Headline title</h2>
            <p>the sub-headline</p>
        </div>
    )
}
```

One thing you’ll note is that instead of writing line-height we use lineHeight.

The explanation for this is that, “Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names.”.

***

## The Ternary Operator
![image](https://user-images.githubusercontent.com/25232528/192004017-263ad490-ce7c-4841-9296-c98fea06a9b7.png)

There’s a more compact way to write conditionals in JSX: the ternary operator.

The ternary operator works the same way in React as it does in regular JavaScript. However, it shows up in React surprisingly often.

Recall how it works: you write ```x ? y : z```, where x, y, and z are all JavaScript expressions. When your code is executed, ```x``` is evaluated as either “truthy” or “falsy.” If ```x``` is truthy, then the entire ternary operator returns ```y```. If ```x``` is falsy, then the entire ternary operator returns ```z```.

Here’s how you might use the ternary operator in a JSX expression:

```js
const headline = (
  <h1>
    { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
  </h1>
);
```

In the above example, if ```age``` is greater than or equal to ```drinkingAge```, then ```headline``` will equal ```<h1>Buy Drink</h1>```. Otherwise, ```headline``` will equal ```<h1>Do Teen Stuff</h1>```.

***

## .map in JSX
The array method ```.map()``` comes up often in React. It’s good to get in the habit of using it alongside JSX.

If you want to create a list of JSX elements, then ```.map()``` is often your best bet. It can look odd at first:

```js
const strings = ['Home', 'Shop', 'About Me'];
 
const listItems = strings.map(string => <li>{string}</li>);
 
<ul>{listItems}</ul>
```

In the above example, we start out with an array of strings. We call ```.map()``` on this array of strings, and the ```.map()``` call returns a new array of ```<li>```s.

On the last line of the example, note that ```{listItems}``` will evaluate to an array, because it’s the returned value of ```.map()```! JSX ```<li>```s don’t have to be in an array like this, but they can be.

```js
// This is fine in JSX, not in an explicit array:
 
<ul>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>
 
// This is also fine!
 
const liArray = [
  <li>item 1</li>, 
  <li>item 2</li>, 
  <li>item 3</li>
];
 
<ul>{liArray}</ul>
```

**Example**

```js
import React from "react";

function App() {
  const people = ["Rowe", "Prevost", "Gare"];

  return people.map((person, i) => (
    // expression goes here:
    <ul key={"person_" + i}>{person}</ul>
  ));
}

export default App;
```

View the result: https://d15w0k.csb.app/

***

## Quick Example
Map the array and show only planets with gas.

```js
function App() {
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true }
  ];

  return (
    <div className="App">
      {planets.map(
        (planet, key) => planet.isGasPlanet && <h1 key={key}>{planet.name}</h1>
      )}
    </div>
  );
}

export default App;
```

View the result: https://49vw8b.csb.app/

***
