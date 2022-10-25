# Lifecycle of Components

A React component undergoes three phases in its lifecycle: mounting, updating, and unmounting.

1. The mounting phase is when a new component is created and inserted into the DOM or, in other words, when the life of a component begins. This can only happen once, and is often called “initial render.”

2. The updating phase is when the component updates or re-renders. This reaction is triggered when the props are updated or when the state is updated. This phase can occur multiple times, which is kind of the point of React.

3. The last phase within a component's lifecycle is the unmounting phase, when the component is removed from the DOM.

![image](https://user-images.githubusercontent.com/25232528/197160657-9119b66f-2cd3-4b12-abb2-c929dc2c8e00.png)

***

## React component lifecycle with hooks

In this React Application, we can see the 3 three phases of the React component lifecycle being used.

```jsx
import "./App.css";
import { useState } from "react";
import { Text } from "./Text";

function App() {
  const [showText, setShowText] = useState(false);

  return (
    <div className="App">
      <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        Show Text
      </button>

      {showText && <Text />}
    </div>
  );
}

export default App;
```

```jsx
import React from "react";
import { useState, useEffect } from "react";

export const Text = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    // use effect only is calling itself when the component has mounted
    console.log("COMPONENT MOUNTED");

    return () => {
      // use effect only is calling itself when the component has unmounted
      console.log("COMPONENT UNMOUNTED");
    };

    //To run the useEffect only on mount, pass an empty array []
    // If the array contains a state variable, the useEffect callback function gets triggered on 2 occasions. First, when the page renders and whenever the state variable is updated.
  }, [text]);

  return (
    <div>
      <input
        onChange={(event) => {
          setText(event.target.value);
        }}
      />

      <h1> {text}</h1>
    </div>
  );
};

```

Check Result: https://v1fumi.csb.app/

***

