# What is state ?

 A state is an updatable strucutre containing information or data about a dynamic component, where the information can change over time. Anytime the data inside these components are changed,
 State re-render the app to reflect these changes.
 
 Generally, these changes in data happen due to user-triggered events on the frontend.
 
 State can be considered the heart of React components as it determines the component's behavior and itrs reendering method.
 
 ***
 
 ## Stateful Component v Stateless Component in React
 Components are the core of React development. 
 
 In React, there is two kind of components stateful and stateless. 
 
 As the same sugests, stateful are components that hold some state, whereas Stateless are components with no state.
 
 **Stateful Component**
 
 ```js
 function App() {
 const [word, setWord] = useState("Hello");
 
 return (
 <div>
 <h1> A state value: {word}</h1>
 </div>
 );
 };
 ```
 
 
  **Stateless Component** 
  
 ```js
 function App() {
 return <h1> A completely stateless component</h1>
 };
 ```
 
 ***
