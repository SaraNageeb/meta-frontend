# Importing and exporting in React JS.md
```Importing``` and ```exporting``` in React JS will help us write modular code, i.e., splitting code into multiple files. Importing allows using contents from another file, whereas exporting makes the file contents eligible for importing. The basic idea behind imports and exports is to exchange contents between several JavaScript files.

Let’s look at these features one by one.

***

## **Exporting**

* Let’s use a file name.js with an object person and name as an attribute.
* Export the object in the current file to make this object usable in another file.

```js
//name.js

const person = {
    name:'Kedar'
}

export default person;
```

The snippet ```export default``` person informs us that we will receive the ```person``` object by default whenever we import from ```name.js```.

We can also export multiple elements from a file. Let’s consider an ```info.js``` file where we will individually export the ```age``` and the ```birth_country``` of the person above.

```js
//info.js

export const age = 23;
export const birth_country = "India"
Now that you have learned about exporting, let’s look at importing.
````

***

## **Importing**
Similar to exporting, there are two ways to import.

1. Importing from default exports.

2. Importing from named exports.

For example, we are creating a file ```app.js```, and we want to use the contents from ```name.js``` and ```info.js```.

When importing from ```name.js```, a default export can be done as shown below.

```js
import person from './name.js'
//or use as below
import prs from './name.js`
```

Since we have a default export, importing anything from that file will provide us with a ```person``` object.

For imports from the ```info.js``` file, we will import from two different constants.

* Therefore, we use ```{}``` to precisely target specific things from that file.

* These are called ```named exports```, as we import them by their name.

```js
import {age} from './info.js'
import {birth_country} from  info.js'
```

As shown below, you can also use aliases while importing in the named exports.

```js
import {birth_country as bc} from 'info.js'
```

You will frequently be using these import and export features throughout React.
