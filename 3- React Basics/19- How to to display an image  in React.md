# How to Import Images with React
Apart from the external images, the way images are used in React differs significantly from that of other frameworks or even HTML. These images must first be imported into React before they can be used in our application.

This can be accomplished in two ways: by using the **import** statement or by using the **require()** function. We'll go over both approaches.

***

## How to Import Images With React Using the import Statement
Because it is easier to read and understand, the **import** statement is the most commonly used method for importing locally stored images in React. The images are treated as default exports, and when we import them, we do so in the same way that we import components. This is done by specifying the relative path from the file to the image we are importing:

```jsx
import Logo from './images/react-logo.png';

const App = () => {
   return (
      <div>
         <img src={Logo} alt="React Logo" />
      </div>
   );
};
```

In the code above, we still use the **img** tag and **src** attribute, but this time the **src** attribute receives a variable rather than a string, which is passed using curly braces in JSX.

It is important to understand how to specify and obtain relative paths for files; otherwise, bugs and errors may occur. In the preceding example, the image was saved in an ```/src/images```.

***

## How to Import Images With React using the require() Function
The **require()** function is a Node.js function that is used to include external modules from files other than the current file. It works in the same way as the **import** statement and allows us to include images:

```jsx
let Logo = require('./images/react-logo.png');

const App = () => {
   return (
      <div>
         <img src={Logo} alt="React Logo" />
      </div>
   );
};
```

The only difference is the first line where we required the image via its relative path and then stored it in a variable which we accessed in the **img** tag via curly braces.

**We can also decide to do this inline and avoid the extra line used to assign the image to a variable, as it's not compulsory:**

```jsx
const App = () => {
   return (
      <div>
         <img src={require('./images/react-logo.png')} alt="React Logo" />
      </div>
   );
};
```

***

### Example in an App
Check the result: https://4wg7ur.csb.app/

***
