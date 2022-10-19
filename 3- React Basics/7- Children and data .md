# React children and data

In React JS, data flows in one direction only, from Parent to Child. This helps components to be simple and predictable.

Consider React components as simple functions that receive props and state and return HTML. When child components receive props from their parents, they either apply modifications (render) or pass it to another child that may use it.

![image](https://user-images.githubusercontent.com/25232528/196650692-fe45839b-d1c2-4b14-8259-95a8414552de.png)

Props are properties passed to a child component that can hold many data types (e.g. array, object, number, function, others). Considering React components looks like HTML tags, props are the attributes of the HTML element. On the following example,Square is the component, size, className and onClick are the props.

***

I've built a new app using Create React app. I have two files created, app.js and child.js. 

The app.js file defines the app components using a class definition instead of a function. When it's created, it initializes its state with the current date. The render function then renders a component called child. 

```js
import Child from "./Child";
import "./styles.css";

export default function App() {
  const date = new Date();

  return (
    <div className="App">
      <Child message={date.toLocaleTimeString()} />
    </div>
  );
}
```


The child's components has a prop named message defined and its value is set as the current dates from the component's state converted to a string format, which includes the hours, minutes, and seconds of the date. In the child.js file, the component renders the message prop in an H1 elements.

```js
const Child = (props) => {
  return (
    <div>
      <h1>{props.message}</h1>
    </div>
  );
};

export default Child;
```


Now when I run the app, the state of the app component flows. It stays down to the child component props, and the H1 elements will display the current date and time. 

**Check result:** https://9eln8k.csb.app/

***

### Stateful and Stateless Components
Stateful and stateless components have many different names.

They are also known as:

– Container vs Presentational components

– Smart vs Dumb components

The literal difference is that one has state, and the other doesn’t. That means the stateful components are keeping track of changing data, while stateless components print out what is given to them via props, or they always render the same thing.
