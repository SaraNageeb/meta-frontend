# Task

In the starter code of this code lab, you are given a Fruits component that has its own state. Based on this state, it outputs three fruits on the screen. Additionally, you have a FruitsCounter component which shows a message that reads: "Total fruits: 2".

Y​our task is to lift state up from the Fruits component to the App component, so that you can then pass the state information to both the Fruits component and the FruitsCounter component. This change to the app should fix the previously incorrect message of "Total fruits: 2".  The new message should be "Total fruits: 3".  However, the new message will not be just a hard-coded string. Instead, it should reflect the number of fruits that exist in the state variable, so based on how many fruits there are in the state array, this information should affect the output of the total number of fruits - as returned from the FruitsCounter component.

## Steps

**Step 1.** This task’s starting point is the stateless App component’s code:
```jsx
import Fruits from "./Fruits";
import FruitsCounter from "./FruitsCounter";

function App() {
  return (
    <div className="App">
      <h1>Where should the state go?</h1>
      <Fruits />
      <FruitsCounter />
    </div>
  );
}

export default App;
```

The first step of this task is to move the state from the Fruits component:
```jsx
import React from "react";

function Fruits() {
    const [fruits] = React.useState([
        {fruitName: 'apple', id: 1},
        {fruitName: 'apple', id: 2},
        {fruitName: 'plum', id: 3},
    ]);

    return (
        <div>
            {fruits.map(f => <p key={f.id}>{f.fruitName}</p>)}
        </div>
    )
}

export default Fruits
```

The state should be moved to the App component. That is the first step of this task.

**Step 2.** AOnce you've moved the state up from the Fruits component to the App component, you need to update the FruitsCounter component so that it accepts that state from the App component, and then uses it to display the number of the available fruits using the length property of the array of fruits from the fruits state variable that comes from App and is received in FruitsCounter as a prop.utton tags, add the following text: Guess the number between 1 and 3. 

**Step 3.** Save your updates and serve the app so that it shows the correct count of fruits, while the rest of the output should remain unchanged.

***

## Solution: Managing state in React

**Step 1.**
Move the state from the ```Fruits``` component to the ```App``` component.

To complete this step, you need to go to the 
```Fruits``` component and cut the ```useState``` call, namely this piece of code:

```jsx
const [fruits] = React.useState([
    {fruitName: 'apple', id: 1},
    {fruitName: 'apple', id: 2},
    {fruitName: 'plum', id: 3},
]);
```

You also need to cut the ```import React from "react";``` at the very top of the ```Fruits``` component, since you no longer need to access the useState method on the React object from the Fruits file. 

Additionally, you need to add the import statement to the ```App``` component, which means that you should inject a new import at the very top of ```App.js```:

```js
import React from "react";
```

Once you've done that, you need to update the ```App``` component's return statement so that it sends the fruits data to the ```Fruit```s and ```FruitsCounter``` component - since both of these components need to get this state's data via props.


```js
// The updated return statement in App.js:
  return (
    <div className="App">
      <h1>Where should the state go?</h1>
      <Fruits fruits={fruits} />
      <FruitsCounter fruits={fruits} />
    </div>
  );
  ```
  
**Step 2.**

The ```Fruits``` component should be updated so that it accepts state from the ```App``` component.

Now all that you need to do is to update the code in the ```Fruits``` components to accept the props object and render the fruits property where appropriate.

That means that the ```Fruits``` component will end up having the following code:

```jsx
function Fruits(props) {
    return (
        <div>
            {props.fruits.map(f => <p key={f.id}>{f.fruitName}</p>)}
        </div>
    )
}

export default Fruits
```

**Step 3.**

Once you've lifted the state up from the ```Fruits``` component to the ```App``` component, you also need to update the ```FruitsCounter``` component. 

Just like the ```Fruits``` component, the ```FruitsCounter``` component should also receive state from the ```App``` component, so that it can display the number of the available fruits using the length property of the array of fruits from the fruits state variable.

The ```FruitsCounter``` component will end up having the following code:


```js
function FruitsCounter(props) {
    return (
        <h2>Total fruits: {props.fruits.length}</h2>
    )
}

export default FruitsCounter;
```

***

Here is the completed App.js file:

```jsx
import React from "react";
import Fruits from "./Fruits";
import FruitsCounter from "./FruitsCounter";

function App() {
  const [fruits] = React.useState([
      {fruitName: 'apple', id: 1},
      {fruitName: 'apple', id: 2},
      {fruitName: 'plum', id: 3},
  ]);

  return (
    <div className="App">
      <h1>Where should the state go?</h1>
      <Fruits fruits={fruits} />
      <FruitsCounter fruits={fruits} />
    </div>
  );
}

export default App;
```

Here is the completed Fruits.js file:

```jsx
function Fruits(props) {
    return (
        <div>
            {props.fruits.map(f => <p key={f.id}>{f.fruitName}</p>)}
        </div>
    )
}

export default Fruits
```

Here is the completed FruitsCounter.js file:

```jsx
function FruitsCounter(props) {
    return (
        <h2>Total fruits: {props.fruits.length}</h2>
    )
}

export default FruitsCounter;
```

The completed app should look as follows:

![image](https://user-images.githubusercontent.com/25232528/196994428-c0d94fe2-5171-4962-8e25-b0e2417df436.png)




