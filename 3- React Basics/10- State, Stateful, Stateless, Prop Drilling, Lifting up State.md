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
 
 ## Prop Drilling
Prop drilling is a situation where you are passing data from a parent to a child component, then to a grandchild component, and so on, until it reaches a more distant component further down the component tree, where this data is required.
 
![image](https://user-images.githubusercontent.com/25232528/197039259-ad645820-ec5d-4116-b571-5047efbc3864.png)

 
 ***
 
 ## What is Lifting up State 
 
 **A stateful component becoming a stateless component.**
 
That’s right! Lifting up state means moving state up from a child to the parent component - meaning that a previously stateless parent component becomes a stateful component, and a previously stateful child component becomes a stateless component. 


**A stateless component becoming a stateful component.**

That’s right! Lifting up state means moving state up from a child to the parent component - meaning that a previously stateless parent component becomes a stateful component, and a previously stateful child component becomes a stateless component.

<br>

**Quick Example**

Lifting up the State: As we know, every component in React has its own state. Because of this sometimes data can be redundant and inconsistent. So, by Lifting up the state we make the state of the parent component as a single source of truth and pass the data of the parent in its children.

Time to use Lift up the State: If the data in “parent and children components” or in “cousin components” is Not in Sync.

**Example 1:** If we have 2 components in our App. A -> B where, A is parent of B. keeping the same data in both Component A and B might cause inconsistency of data. 

**Example 2:** If we have 3 components in our App.


```

        A
       / \
      B   C
```

Where A is the parent of B and C. In this case, If there is some Data only in component B but, component C also wants that data. We know Component C cannot access the data because a component can talk only to its parent or child (Not cousins).

**Problem:** Let’s Implement this with a simple but general example. We are considering the second example.

**Approach:** To solve this, we will Lift the state of component B and component C to component A. Make A.js as our Main Parent by changing the path of App in the index.js file

***
