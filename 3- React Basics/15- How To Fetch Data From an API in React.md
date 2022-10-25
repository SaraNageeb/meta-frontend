# Axios API
Axios is an HTTP client library that allows you to make requests to a given endpoint:

This could be an external API or your own backend Node.js server, for example.

By making a request, you expect your API to perform an operation according to the request you made.

For example, if you make a GET request, you expect to get back data to display in your application.

***

## How to Set Up Axios with React
Using Axios with React is a very simple process. You need three things:

* An existing React project
* To install Axios with npm/yarn
* An API endpoint for making requests

If you have an existing React project, you just need to install Axios with npm (or any other package manager):

```
npm install axios
```

In this guide, you'll use the JSON Placeholder API to get and change post data.

Here is a list of all the different routes you can make requests to, along with the appropriate HTTP method for each:

![image](https://user-images.githubusercontent.com/25232528/197886223-137a7bfb-a02c-414c-966e-6c2bc045a1af.png)

Here is a quick example of all of the operations you'll be performing with Axios and your API endpoint — retrieving, creating, updating, and deleting posts:

***

## How to Make a GET Request
To fetch data or retrieve it, make a GET request.

First, you're going to make a request for individual posts. If you look at the endpoint, you are getting the first post from the ```/posts``` endpoint:

```jsx
import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
```

To perform this request when the component mounts, you use the ```useEffect hook```. This involves importing Axios, using the ```.get()``` method to make a GET request to your endpoint, and using a ```.then()``` callback to get back all of the response data.

The response is returned as an object. The data (which is in this case a post with ```id```, ```title```, and ```body``` properties) is put in a piece of state called ```post``` which is displayed in the component.

Note that you can always find the requested data from the ```.data``` property in the response.

***

## How to Make a POST Request
To create new data, make a POST request.

According to the API, this needs to be performed on the ```/posts``` endpoint. If you look at the code below, you'll see that there's a button to create a post:

```jsx
import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function createPost() {
    axios
      .post(baseURL, {
        title: "Hello World!",
        body: "This is a new post."
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return "No post!"

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={createPost}>Create Post</button>
    </div>
  );
}
```

When you click on the button, it calls the ```createPost``` function.

To make that POST request with Axios, you use the ```.post()``` method. As the second argument, you include an object property that specifies what you want the new post to be.

Once again, use a ```.then()``` callback to get back the response data and replace the first post you got with the new post you requested.

This is very similar to the ```.get()``` method, but the new resource you want to create is provided as the second argument after the API endpoint.

***

## How to Make a PUT Request
To update a given resource, make a PUT request.

In this case, you'll update the first post.

To do so, you'll once again create a button. But this time, the button will call a function to update a post:

```jsx
import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function updatePost() {
    axios
      .put(`${baseURL}/1`, {
        title: "Hello World!",
        body: "This is an updated post."
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return "No post!"

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={updatePost}>Update Post</button>
    </div>
  );
}
```

In the code above, you use the PUT method from Axios. And like with the POST method, you include the properties that you want to be in the updated resource.

Again, using the ```.then()``` callback, you update the JSX with the data that is returned.

***

## How to Make a DELETE Request
Finally, to delete a resource, use the DELETE method.

As an example, we'll delete the first post.

Note that you do not need a second argument whatsoever to perform this request:

```jsx
import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function deletePost() {
    axios
      .delete(`${baseURL}/1`)
      .then(() => {
        alert("Post deleted!");
        setPost(null)
      });
  }

  if (!post) return "No post!"

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={deletePost}>Delete Post</button>
    </div>
  );
}
```

In most cases, you do not need the data that's returned from the ```.delete()``` method.

But in the code above, the ```.then()``` callback is still used to ensure that your request is successfully resolved.

In the code above, after a post is deleted, the user is alerted that it was deleted successfully. Then, the post data is cleared out of the state by setting it to its initial value of ```null```.

Also, once a post is deleted, the text "No post" is shown immediately after the alert message.

***

### Example: Fetching Data in React

**App.js**

```js
import { useState } from "react";
import Axios from "axios";

import "./styles.css";

export default function App() {
  const [generateExcuse, setGenerateExcuse] = useState("");

  const fetchData = (excuse) => {
    Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}`).then((res) =>
      setGenerateExcuse(res.data[0].excuse)
    );
  };
  return (
    <div className="App">
      <h1>Generate an excuse</h1>
      <button onClick={() => fetchData("party")}>Party</button>
      <button onClick={() => fetchData("family")}>Family</button>
      <button onClick={() => fetchData("office")}>Office</button>

      <h3>{generateExcuse}</h3>
    </div>
  );
}
```

**Check Result:** https://4e2x6d.csb.app/

