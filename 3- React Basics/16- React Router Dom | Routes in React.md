# React Router
React Router is a JavaScript library that helps developers create single-page applications that are responsive and have a dynamic user interface. It is a popular tool among React developers and is used to create routing and navigation for web applications.

![image](https://user-images.githubusercontent.com/25232528/197811142-831cb2a1-bc95-484c-a9ec-412af60b4002.png)

***

## How to Install React Router
To install React Router, all you have to do is run ```npm install react-router-dom@6``` in your project terminal and then wait for the installation to complete.

If you are using yarn then use this command: ```yarn add react-router-dom@6```

***

## How to Set Up React Router
The first thing to do after installation is complete is to make React Router available anywhere in your app.

To do this, open the ```index.js``` file in the ```src``` folder and import ```BrowserRoute```r from ```react-router-dom``` and then wrap the root component (the ```App``` component) in it.

This is what the ```index.js``` looked like initially:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

After making changes with React Router, this is what you should have:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
```

All we did was replace ```React.StrictMod```e with ```BrowserRouter``` which was imported from ```react-router-dom```.  Now the router features are accessible from any part of your app.

***

## How to Route to Other Components
We are finally done setting things up, so now we'll look at routing to and rendering different components.


**Step 1 - Create multiple components**

We'll create the following ```Home```, ```About```, and ```Contact``` components like this:

```Home component```

```jsx
function Home() {
  return (
    <div>
      <h1>This is the home page</h1>
    </div>
  );
}
export default Home;
```

```About component```

```jsx
import React from 'react'

function About() {
    return (
        <div>
            <h1>This is the about page</h1>
        </div>
    )
}

export default About
```

```Contact component```

```jsx
import React from 'react'

function Contact() {
    return (
        <div>
            <h1>This is the contact page</h1>
        </div>
    )
}

export default Contact
```

<br>

**Step 2 - Define routes**

Since the ```App``` component acts as the root component where our React code gets rendered from initially, we will be creating all our routes in it.

Don't worry if this does not make much sense – you'll understand better after looking at the example below.

```App component```

```jsx
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
      </Routes>
    </div>
  )
}

export default App
```

We first imported the features we'll be using – ```Routes``` and ```Route```. After that, we imported all the components we needed to attach a route to. Now let's break down the process.

```Routes``` acts as a container/parent for all the individual routes that will be created in our app.

```Route``` is used to create a single route. It takes in two attributes:

* ```path```, which specifies the URL path of the desired component. You can call this pathname whatever you want. Above, you'll notice that the first pathname is a backslash (/). Any component whose pathname is a backslash will get rendered first whenever the app loads for the first time. This implies that the ```Home``` component will be the first component to get rendered.


* ```element```, which specifies the component the route should render.


All we have done now is define our routes and their paths, and attach them to their respective components.

<br>

**Step 3 - Use ```Link``` to navigate to routes**

If you have been coding along up to this point without any errors, your browser should be rendering the ```Home``` component.

We will now use a different React Router feature to navigate to other pages based on those routes and pathnames we created in the ```App``` component. That is:

```Home Component```

```jsx
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>This is the home page</h1>
      <Link to="about">Click to view our about page</Link>
      <Link to="contact">Click to view our contact page</Link>
    </div>
  );
}

export default Home;
```

The ```Link``` component is similar to the anchor element (<a>) in HTML. Its ```to``` attribute specifies which path the link takes you to.

Recall that we created the pathnames listed in the ```App``` component so when you click on the link, it will look through your routes and render the component with the corresponding pathname.

Always remember to import ```Link``` from ```react-router-dom``` before using it.
  
***
  
## React Router Examples
Here you'll find an example of using React Router to accomplish certain tasks.
  
Check App: https://53x8jc.csb.app/contact
  
***
