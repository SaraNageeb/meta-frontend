# Adding an Item to an Array
In our seaCreatures variable we had five items, which consisted of the indices from 0 to 4. If we want to add a new item to the array, we can assign a value to the next index.

```js
seaCreatures[5] = "whale";

seaCreatures;
```

```
Output
[ 'octopus',
	'squid',
	'shark',
	'seahorse',
	'starfish',
	'whale' ]
```

If we add an item and accidentally skip an index, it will create an undefined item in the array.

```js
seaCreatures[7] = "pufferfish";

seaCreatures;
```

```
Output
[ 'octopus',
	'squid',
	'shark',
	'seahorse',
	'starfish',
	'whale',
	,
	'pufferfish' ]
```

Attempting to access the extra array item will return undefined.

```js
seaCreatures[6]
```

```
Output
undefined
```

***

Issues like that can be avoided by using the push() method, which adds an item to the end of an array.

```js
// Append lobster to the end of the seaCreatures array
seaCreatures.push("lobster");

seaCreatures;
```

```
Output
[ 'octopus',
	'squid',
	'shark',
	'seahorse',
	'starfish',
	,
	'whale',
	'pufferfish',
	'lobster' ]
```

***

On the other end of the spectrum, the unshift() method will add an item to the beginning of an array.

```js
// Append dragonfish to the beginning of the seaCreatures array
seaCreatures.unshift("dragonfish");

seaCreatures;
```

```
Output
[ 'dragonfish',
	'octopus',
	'squid',
	'shark',
	'seahorse',
	'starfish',
	'whale',
	,
	'pufferfish',
	'lobster' ]
```

Between push() and unshift() you will be able to apend items to the beginning and end of an array.

***