# What is the difference between a forEach loop and the .map() function?
Both JavaScript forEach loops and map() functions iterate over items in a list.
The forEach loop executes a callback function for each element in a list. It does not return any values once it has been run. A map statement calls a function on each element in a list and returns a transformed array with the values returned by that function.
In short, forEach() loops do not return a new array but map() functions do.

***

## What is the difference?
If you notice closely, although they look very similar there is a fundamental difference between forEach() and map() functions.
forEach() changes the original array, whereas map() returns a new array, without mutating the original array.
So which one should you pick? It depends on what you are trying to do with the array.

If you are looking to make changes to the array, map() is preferable. map() ensures that it doesn’t change/mutate the original array, and returns a new array instead.

forEach() is used when you want to iterate through the array and allows a callback function that mutates the original array unlike map(). If you are not looking to transform the array items, but just need to iterate through it and print them or do other actions with them, then forEach() could can be used.
