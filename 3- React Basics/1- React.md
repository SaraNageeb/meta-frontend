# React Basics
![image](https://user-images.githubusercontent.com/25232528/188939311-c2fef9d7-dcda-43d7-a84a-bd880cdf2ec2.png)

React is a JavaScript library for building user interfaces. React makes building and maintaining the user interface of your application faster and easier by breaking it up into smaller, reusable components. It also helps eliminate the complexity that comes with updating your DOM elements when the user interacts with your application.


***

## Introduction to Create React App
The easiest way to get started by far is by using a tool called create-react-app. It is possible (but not necessary) to install create-react-app on your machine if the npm tool that was installed along with Node has a version number of at least 5.3.

Let's create an application called part1 and navigate to its directory.

```node
npx create-react-app myApp
cd myApp
```

The application is run as follows

```node
npm start
```

By default, the application runs in localhost port 3000 with the address ```http://localhost:3000```

Your default browser should launch automatically. Open the browser console immediately. Also open a text editor so that you can view the code as well as the web-page at the same time on the screen:

![image](https://user-images.githubusercontent.com/25232528/188937654-8106aef0-2054-45ce-bba5-08188254ae49.png)

The code of the application resides in the src folder. Let's simplify the default code such that the contents of the file ```index.js``` look like:

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

The files ```App.css, App.test.js, index.css, logo.svg, setupTests.js and reportWebVitals.js``` may be deleted as they are not needed in our application right now.

***
