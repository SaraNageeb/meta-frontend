### Looping Through an Array

We can loop through the entirety of the array with the for keyword, taking advantage of the length property. In this example, we can create an array of shellfish and print out each index number as well as each value to the console.


```js
// Create an array of shellfish species
let shellfish = [
	"oyster",
	"shrimp",
	"clam",
	"mussel",
];
```

```js
// Loop through the length of the array
for (let i = 0; i < shellfish.length; i++) {
  console.log(i, shellfish[i]);
} 

/* 
Output 
0 'oyster'
1 'shrimp'
2 'clam'
3 'mussel'
*/

```


We can also use the for...of loop, a newer feature of JavaScript.

```js
// Create an array of aquatic mammals
let mammals = [
	"dolphin",
	"whale",
	"manatee",
];

// Loop through each mammal
for (let mammal of mammals) {
	console.log(mammal);
}

/* 
Output 
dolphin
whale
manatee
*/
```


The for...of loop does not retrieve the index number of the elements in the array, but it is generally a simpler, more concise way to loop through an array.

Using loops is extremely useful for printing out the whole value of an array, such as when displaying the items from a database on a website.
