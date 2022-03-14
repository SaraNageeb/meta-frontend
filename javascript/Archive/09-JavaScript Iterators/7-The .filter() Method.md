# The .filter() Method
Another useful iterator method is .filter(). Like .map(), .filter() returns a new array. However, .filter() returns an array of elements after filtering out certain elements from the original array. The callback function for the .filter() method should return true or false depending on the element that is passed to it. The elements that cause the callback function to return true are added to the new array. Take a look at the following example:

```js
const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
 
const shortWords = words.filter(word => {
  return word.length < 6;
});
```

* words is an array that contains string elements.

* const shortWords = declares a new variable that will store the returned array from invoking .filter().

* The callback function is an arrow function that has a single parameter, word. Each element in the words array will be passed to this function as an argument.

* word.length < 6; is the condition in the callback function. Any word from the words array that has fewer than 6 characters will be added to the shortWords array.
Let’s also check the values of words and shortWords:

```js
console.log(words); // Output: ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
console.log(shortWords); // Output: ['chair', 'music', 'brick', 'pen', 'door']
Observe how words was not mutated, i.e. changed, and shortWords is a new array.
```

***

```js
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
// Call the .filter() method on randomNumbers to return values that are less than 250.
const smallNumbers = randomNumbers.filter(randomNumber => {return randomNumber < 250});

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
// Invoke .filter() on the favoriteWords array to return elements that have more than 7 characters.
const longFavoriteWords = favoriteWords.filter(favoriteWord => {return favoriteWord.length > 7})
```