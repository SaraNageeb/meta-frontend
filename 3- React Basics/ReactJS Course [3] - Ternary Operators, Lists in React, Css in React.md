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
