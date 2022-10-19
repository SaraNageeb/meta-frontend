# Observing state

In this example app, I have a heading, child components. It receives the props and the object, and it also accesses the message property before it returns it and renders it as an H1 element. 

In the parent's app.js component, I import the heading component, and I set the word as a state variable, set to the string of Eat.  

In the return statement, I wrap the heading components in a single div. I pass the message prop of word plus, and then "at Little Lemon", all wrapped in an opening and closing curly brace. You already know that's an opening and a closing curly brace signifies a JSX expression, which means that all the code inside of those curly braces will be evaluated as regular JavaScript. 

The JavaScript engine takes the word Eat and concatenates it, so the words at Little Lemon. Thus, in the browser window, I get the words eat at little lemon. If I want to update the value of the word States variable to something else like drink, I could use the ```setWord``` function directly to help me achieve this. 

However, when I save the change and run my code, the app does not work. This is because one can't use the state's setting variable from your state directly. Instead of updating it directly, I can update it based on a click event. I have another element called button and onClick is equal to handleClick.

I now set another function which I'll name handledClick. Inside the handleClick function definition, I run set word to drink. I click "File, Save All", and wait for the apps to compile. 

Now when I click the Click Here button, I get to drink at the little lemon. To observe and update state, you can use the state's setting functions and state variables using the state hook. But you must make sure that you use event handling attributes in JSX syntax

***

**App.js**

```js
import { useState } from "react";
import Heading from "./Heading";
import "./styles.css";

export default function App() {
  const [word, setWord] = useState("Eat");

  function handleClick() {
    setWord("Drink");
  }

  return (
    <div className="App">
      <Heading message={word + " at Little Lemon"} />
      <button onClick={handleClick}></button>
    </div>
  );
}
```

**Heading.js**
```js
const Heading = (props) => {
  return <h1>{props.message}</h1>;
};

export default Heading;
```

**Check Result:**
https://zbo3x7.csb.app/
