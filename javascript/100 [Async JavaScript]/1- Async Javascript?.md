# Understanding (and effectively using) asynchronous JavaScript

![Variables][variables]

[variables]:https://www.freecodecamp.org/news/content/images/2021/09/freeCodeCamp-Cover-2.png

***

### Introduction
JavaScript is a single-threaded language, meaning it only allows one logic to be performed at a time, because of this you can’t perform complex long functions that will block JavaScript’s main thread. To solve this, callbacks — which are functions passed into other functions as an argument to be executed later — were used to perform asynchronous functions. Using async JavaScript, you can perform large functions without blocking the main thread of JavaScript.

To better understand this, let’s look at what we mean by synchronous and asynchronous JavaScript.

***

### Synchronous JavaScript

Synchronous JavaScript as the name implies, means in a sequence, or an order. Here, every function or program is done in a sequence, each waiting for the first function to execute before it executes the next, synchronous code goes from top to bottom.

To better understand synchronous JavaScript, let’s look at the code below:

```js
let a = 5;
let b = 10;
console.log(a);
console.log(b);
```

And here is the result:

```js
5
10
```

Here, the JavaScript engine executes the first one in the equation, which in this case is 5 and then goes down to execute the second line of code, printing 10 to the console. If we add any other line of code, the JavaScript engine executes it based on the position we add it, this is what synchronous JavaScript entails, a sequential way of executing code.

***

### Asynchronous JavaScript

Now, we have an idea on how synchronous JavaScript works, let’s talk about asynchronous JavaScript. To explain this, let’s look at the code below:

```js
console.log("Hello.");
setTimeout(function() {
  console.log("Goodbye!");
}, 3000);
console.log("Hello again!");
```

Unlike our other example, JavaScript engine won’t execute the code above synchronously. Let’s take a look at the output below:

```js
Hello.
Hello again!
Goodbye!
```

In the code, we logged Hello to our console, next we wrote a function that will log Goodbye to our console after three seconds and the last part of our code logs Hello again to our console. 


Here, the JavaScript engine goes through the first function and executes it, printing Hello to the console, going to the next function, it sees the setTimeout function and instead of waiting for three seconds to print the function, it goes to the last function and executes it, printing Hello again, waits for three seconds, and then executes the second function.

So with asynchronous JavaScript, the JavaScript doesn’t wait for responses when executing a function, instead it continues with executing other functions. Let’s look at ways of executing asynchronous JavaScript .


***

### HTTP Requests

The Hypertext Transfer Protocol (HTTP) is designed to enable communications between clients and servers.

HTTP works as a request-response protocol between a client and server.

Example: A client (browser) sends an HTTP request to the server; then the server returns a response to the client. The response contains status information about the request and may also contain the requested content.

***

### API Endpoints

Simply put, an endpoint is one end of a communication channel. When an API interacts with another system, the touchpoints of this communication are considered endpoints. 

For APIs, an endpoint can include a URL of a server or service. Each endpoint is the location from which APIs can access the resources they need to carry out their function.

APIs work using ‘requests’ and ‘responses.’ When an API requests information from a web application or web server, it will receive a response. The place that APIs send requests and where the resource lives, is called an endpoint.

![API][APIEndpoints]

[APIEndpoints]:https://help.klaviyo.com/hc/article_attachments/360060901452/whatisanAPI_copy.png

***

### HTTP response status codes

HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes:

1. Informational responses (100–199)
2. Successful responses (200–299)
3. Redirection messages (300–399)
4. Client error responses (400–499)
5. Server error responses (500–599)

More Info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

***

### Making a HTTP Request

The keystone of AJAX is the XMLHttpRequest object.

1. Create an XMLHttpRequest object
2. Define a callback function
3. Open the XMLHttpRequest object
4. Send a Request to a server

```js
// This creates a request obj 
const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState)

    // if the request is done and the status is sucessfull 
    if(request.readyState === 4 && request.status === 200) {
        console.log(request, request.responseText);
    // if not display an error msg   
    } else if(request.readyState === 4) {
        console.log('Could not fetch the data');
    }
});

// telling the request type and where to get the data from
request.open('GET', 'https://pokeapi.co/api/v2/pokemon');

// sending the request
request.send();
```

***

### JSON

JSON is a format that stores structured information and is primarily used to transfer data between a server and a client.

The file is basically a simpler and lighter alternative to XML (Extensive Markup Language), which has similar functions.

Developers use JSON to work with AJAX (Asynchronous JavaScript and XML). These formats work together to achieve asynchronous loading of stored data.

This means that a website can update its information without having to reload the page you are visiting.

This process is easier to do with JSON than XML/RSS. And today, as many websites are using AJAX, the .json file is becoming very popular.

```js
// This creates a request obj 
const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState)

    // if the request is done and the status is sucessfull 
    if(request.readyState === 4 && request.status === 200) {
        // JSON.Parse - converts JSON string into javascript obj
        const data = JSON.parse(request.responseText);
        console.log(request, data);
    // if not display an error msg   
    } else if(request.readyState === 4) {
        console.log('Could not fetch the data');
    }
});

// telling the request type and where to get the data from
request.open('GET', 'https://pokeapi.co/api/v2/pokemon');

// sending the request
request.send();
```

***

### Promises

In JavaScript, a promise is a good way to handle asynchronous operations. It is used to find out if the asynchronous operation is successfully completed or not.

A promise may have one of three states.

* Pending
* Fulfilled
* Rejected

A promise starts in a pending state. That means the process is not complete. If the operation is successful, the process ends in a fulfilled state. And, if an error occurs, the process ends in a rejected state.

For example, when you request data from the server by using a promise, it will be in a pending state. When the data arrives successfully, it will be in a fulfilled state. If an error occurs, then it will be in a rejected state.

***

### Create a Promise
To create a promise object, we use the Promise() constructor.

```js
let promise = new Promise(function(resolve, reject){
     //do something
});
```

The Promise() constructor takes a function as an argument. The function also accepts two functions resolve() and reject().

If the promise returns successfully, the resolve() function is called. And, if an error occurs, the reject() function is called.

***

### Example: Program with a Promise

Let's suppose that the program below is an asynchronous program. Then the program can be handled by using a promise.

```js
const getPokemon = resourceData => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest()

        request.addEventListener('readystatechange', () => {
            // console.log(request, request.readyState)

            // if the request is done and the status is sucessfull
            if (request.readyState === 4 && request.status === 200) {
                // JSON.Parse - converts JSON string into javascript obj
                const data = JSON.parse(request.responseText)
                resolve(data)
                // if not display an error msg
            } else if (request.readyState === 4) {
                reject('Could not fetch the data')
            }
        })

        // telling the request type and where to get the data from
        request.open('GET', resourceData)

        // sending the request
        request.send()
    })
}

getPokemon('https://pokeapi.co/api/v2/pokemon')
    .then(data => {
        console.log('promise resolve:', data)
    })
    .catch(err => {
        console.log('promise rejected:', err)
    })
```

In the above program, a Promise object is created that takes two functions: resolve() and reject(). resolve() is used if the process is successful and reject() is used when an error occurs in the promise.

The promise is resolved if the value of count is true.

***

### JavaScript Promise Chaining
Promises are useful when you have to handle more than one asynchronous task, one after another. For that, we use promise chaining.

You can perform an operation after a promise is resolved using methods then(), catch() and finally().

JavaScript then() method
The then() method is used with the callback when the promise is successfully fulfilled or resolved.

The syntax of then() method is:

```js
promiseObject.then(onFulfilled, onRejected);
```

```js
const getPokemon = (resourceData) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            // console.log(request, request.readyState)

            // if the request is done and the status is sucessfull 
            if (request.readyState === 4 && request.status === 200) {
                // JSON.Parse - converts JSON string into javascript obj
                const data = JSON.parse(request.responseText);
                resolve(data);
                // if not display an error msg   
            } else if (request.readyState === 4) {
                reject('Could not fetch the data');
            }
        });

        // telling the request type and where to get the data from
        request.open('GET', resourceData);

        // sending the request
        request.send();
    });
};

getPokemon('https://pokeapi.co/api/v2/pokemon')
    .then(data => {
        console.log('promise resolve:', data);
        return getPokemon('https://pokeapi.co/api/v2/pokemon?limit=21&offset=30');
    }).then(data => {
        console.log('promise 2 resolve:', data);
    }).catch((err) => {
        console.log('promise rejected:', err);
    });
```

In the above program, the then() method is used to chain the functions to the promise. The then() method is called when the promise is resolved successfully.

You can chain multiple then() methods with the promise.

***

### JavaScript catch() method
The catch() method is used with the callback when the promise is rejected or if an error occurs. For example,

```js
const getPokemon = (resourceData) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            // console.log(request, request.readyState)

            // executes when promise is resolved successfully
            if (request.readyState === 4 && request.status === 200) {
                // JSON.Parse - converts JSON string into javascript obj
                const data = JSON.parse(request.responseText);
                resolve(data);
              // executes if there is an error
            } else if (request.readyState === 4) {
                reject('Could not fetch the data');
            }
        });

        // telling the request type and where to get the data from
        request.open('GET', resourceData);

        // sending the request
        request.send();
    });
};

// The URL is invalid
getPokemon('https://pokeapi.co/api/v2/pokemon123')
    .then(data => {
        console.log('promise resolve:', data);
        return getPokemon('https://pokeapi.co/api/v2/pokemon?limit=21&offset=30');
    }).then(data => {
        console.log('promise 2 resolve:', data);
    }).catch((err) => {
        console.log('promise rejected:', err);
    });
```

```
output

"promise rejected:", "Could not fetch the data"
```

In the above program, the promise is rejected. And the catch() method is used with a promise to handle the error.

***

### Fetch API

The Fetch API is a modern interface that allows you to make HTTP requests to servers from web browsers.

If you have worked with XMLHttpRequest (XHR) object, the Fetch API can perform all the tasks as the XHR object does.

In addition, the Fetch API is much simpler and cleaner. It uses the Promise to deliver more flexible features to make requests to servers from the web browsers.

The fetch() method is available in the global scope that instructs the web browsers to send a request to a URL.

```js
fetch(`https://pokeapi.co/api/v2/pokemon/`)
.then((response) => {
    console.log('resolved', response);
    // getting the data
    return response.json();
}) // now we can actually get the data from the json method
.then((data) => {
  console.log(data);
})
.catch((err) => {
  console.log('rejected', err);
});
```

***

### Async & Await

We use the async keyword with a function to represent that the function is an asynchronous function. The async function returns a promise.

The syntax of async function is:

```js
async function name(parameter1, parameter2, ...paramaterN) {
    // statements
}
```

Here,

* name - name of the function
* parameters - parameters that are passed to the function

***

### Example: Async Function

The use of await pauses the async function until the promise returns a result (resolve or reject) value. For example:

```js
const getPokemons = async () => {

    // Here, you fetch the url
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');

    if(response.status !== 200) {
        throw new Error('Cannot fetch the data');
    }
    // The data is converted to json and waits until the promise resolves
    const data = await response.json();

    return data;
};

getPokemons()
.then(data => console.log('resolved: ',  data))
.catch(err => console.log('rejected: ', err.message));
```

Output

```
[{
  name: "bulbasaur",
  url: "https://pokeapi.co/api/v2/pokemon/1/"
}, {
  name: "ivysaur",
  url: "https://pokeapi.co/api/v2/pokemon/2/"
}, {
  name: "venusaur",
  url: "https://pokeapi.co/api/v2/pokemon/3/"
}, {
  name: "charmander",
  url: "https://pokeapi.co/api/v2/pokemon/4/"
}, {
  name: "charmeleon",
  url: "https://pokeapi.co/api/v2/pokemon/5/"
}, {
  name: "charizard",
  url: "https://pokeapi.co/api/v2/pokemon/6/"
}, {
  name: "squirtle",
  url: "https://pokeapi.co/api/v2/pokemon/7/"
}, {
  name: "wartortle",
  url: "https://pokeapi.co/api/v2/pokemon/8/"
}, {
  name: "blastoise",
  url: "https://pokeapi.co/api/v2/pokemon/9/"
}
```
***

### Axios

```js
// Make a request for a list of pokemons 
axios.get('https://pokeapi.co/api/v2/pokemon')
  .then(response => {
    // handle success
    console.log(response);
  })
  .catch(error => {
    // handle error
    console.log(error);
  });
  
 
  
  // Async Function
  const getPokemon = async () => {
  const res = await axios.get("https://pokeapi.co/api/v2/pokemon");
  console.log(res.data);
  };


getPokemon();
```