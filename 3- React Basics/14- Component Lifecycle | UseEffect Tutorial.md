# Lifecycle of Components

Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.

The three phases are: 

* **Mounting lifecycle methods**, that is inserting elements into the DOM.
* **Updating**, which involves methods for updating components in the DOM.
* **Unmounting**, that is removing a component from the DOM.

![image](https://user-images.githubusercontent.com/25232528/197160657-9119b66f-2cd3-4b12-abb2-c929dc2c8e00.png)

***


## React component lifecycle with hooks

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

***

Check Result: https://v1fumi.csb.app/
