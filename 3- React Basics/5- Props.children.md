# Props.children
In reactjs props.children is used to add the data between the opening and closing JSX tags.

Let’s see an example:

**List.js**

```js
function List(props) {
  return <div>{props.children}</div>;
}

export default List;
```

**App.js**

```js
import "./styles.css";
import List from "./List";

export default function App() {
  return (
    <div className="App">
      <h3>Fruit</h3>
      <List>
        <li>Apple</li>
        <li>Banana</li>
        <li>Cherry</li>
      </List>
      <h3>Vegetable</h3>
      <List>
        <li>Tomato</li>
        <li>Lettuce</li>
        <li>Onion</li>
      </List>
    </div>
  );
}
```

In ```List``` component we defined ```props.children``` inside the ```div``` tag, if we pass anything between the ```List``` opening and closing jsx tags that data will be passed to ```props.children``` property and renders inside the ```<div>```.

**Check result:** https://vi8mpw.csb.app/

***
