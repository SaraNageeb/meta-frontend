# What is React?
React is a JavaScript library for building user interfaces. React makes building and maintaining the user interface of your application faster and easier by breaking it up into smaller, reusable components. It also helps eliminate the complexity that comes with updating your DOM elements when the user interacts with your application.

***

## Introducing React
React introduces a more efficient and flexible way of building, organizing and maintaining your UI code. One of the main benefits of working with React is that it lets you build your application's user interface by breaking it up into small, reusable pieces of code called components.

***

## Setting Up With Create React App
The easiest way to get started by far is by using a tool called create-react-app. It is possible (but not necessary) to install create-react-app on your machine if the npm tool that was installed along with Node has a version number of at least 5.3.

**Let's create an application called part1 and navigate to its directory.**

```
npx create-react-app part1
cd part1
```

**The application is run as follows**

```
npm start
```

By default, the application runs in localhost port 3000 with the address ```http://localhost:3000```

Your default browser should launch automatically. Open the browser console immediately. Also open a text editor so that you can view the code as well as the web-page at the same time on the screen:

![image](https://user-images.githubusercontent.com/25232528/191854067-4edff981-04d1-4962-84d0-7e44e97838a5.png)

The code of the application resides in the src folder. Let's simplify the default code such that the contents of the file index.js look like:

```js
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
```

and file ```App.js``` looks like this

```js
const App = () => (
  <div>
    <p>Hello world</p>
  </div>
)

export default App
```

The files App.css, App.test.js, index.css, logo.svg, setupTests.js and reportWebVitals.js may be deleted as they are not needed in our application right now.

***

## JSX
JSX is a syntax extension for JavaScript. It was written to be used with React. JSX code looks a lot like HTML.

What does “syntax extension” mean?

In this case, it means that JSX is not valid JavaScript. Web browsers can’t read it!

If a JavaScript file contains JSX code, then that file will have to be compiled. That means that before the file reaches a web browser, a JSX compiler will translate any JSX into regular JavaScript.

***

## Component
A component is an independent, reusable code block which divides the UI into smaller pieces. For example, if we were building the UI of Twitter with React:

**The components of Twitter's News Feed**

![image](https://user-images.githubusercontent.com/25232528/191860510-35a192b9-15c4-4d14-bc7c-62fc9d97c4a7.png)

Rather than building the whole UI under one single file, we can and we should divide all the sections (marked with red) into smaller independent pieces. In other words, these are components.

React has two types of components: functional and class, I will only focus on functional components.


**Functional Components**

The first and recommended component type in React is functional components. A functional component is basically a JavaScript/ES6 function that returns a React element (JSX). According to React's official docs, the function below is a valid functional component:

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

Alternatively, you can also create a functional component with the arrow function definition:

```js
const Welcome = (props) => { 
  return <h1>Hello, {props.name}</h1>; 
}
```

To be able to use a component later, you need to first ```export``` it so you can import it somewhere else:

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default Welcome;
```

After importing it, you can call the component like in this example:

```js
import Welcome from './Welcome';

function App() { 
  return (
    <div className="App">
      <Welcome />
    </div>
  );
}
```

**So a Functional Component in React:**

* Is a JavaScript/ES6 function
* Must return a React element (JSX)
* Always starts with a capital letter (naming convention)
* Takes props as a parameter if necessary

***

## Props 
Another important concept of components is how they communicate. React has a special object called a prop (stands for property) which we use to transport data from one component to another.

But be careful – props only transport data in a one-way flow (only from parent to child components). It is not possible with props to pass data from child to parent, or to components at the same level.

Let's revisit the App( ) function above to see how to pass data with props.

First, we need to define a prop on the Welcome Component and assign a value to it:

```js
import Welcome from './Welcome';

function App() { 
  return (
    <div className="App">
      <Welcome name="John"/>
      <Welcome name="Mary"/>
      <Welcome name="Alex"/>
    </div>
  );
}
```

Props are custom values and they also make components more dynamic. Since the Welcome component is the child here, we need to define props on its parent (App), so we can pass the values and get the result simply by accessing the prop "name":

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

![image](https://user-images.githubusercontent.com/25232528/191864664-6e01d10f-7456-43c7-8b84-06753e65667e.png)

***


## Quick Example

```App.js File```

```js
import "./styles.css";
import Job from "./components/Job";

function App() {
  return (
    <div className="App">
      <Job salary={90000} position="Senior SDE" company="Amazon" />
      <Job salary={80000} position="Junior SDE" company="Apple" />
      <Job salary={120000} position="Backend" company="Netflix" />
    </div>
  );
}

export default App;
```

```Job Component```

```jsx
const Job = (props) => {
  return (
    <div>
      <h1>{props.salary}</h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
    </div>
  );
};

export default Job;
```

https://jcn6wm.csb.app/
