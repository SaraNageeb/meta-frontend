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

***

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

JSX Conditionals: The Ternary Operator
There’s a more compact way to write conditionals in JSX: the ternary operator.

The ternary operator works the same way in React as it does in regular JavaScript. However, it shows up in React surprisingly often.

Recall how it works: you write x ? y : z, where x, y, and z are all JavaScript expressions. When your code is executed, x is evaluated as either “truthy” or “falsy.” If x is truthy, then the entire ternary operator returns y. If x is falsy, then the entire ternary operator returns z.

Here’s how you might use the ternary operator in a JSX expression:

const headline = (
  <h1>
    { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
  </h1>
);
In the above example, if age is greater than or equal to drinkingAge, then headline will equal <h1>Buy Drink</h1>. Otherwise, headline will equal <h1>Do Teen Stuff</h1>.

***
