# JavaScript nested loops explained

Nested loops is a coding pattern that enables you to perform a looping code inside the first loop. You may have a regular for loop like this:

```js
for (let i = 0; i < 2; i++) {
  console.log("- First level loop");
}
```

You can create a second level loop that runs inside the first-level loop by creating another for loop inside the first one as follows:

```js
for (let i = 0; i <= 2; i++) {
  console.log("- First level loop");
  for (let j = 0; j <= 3; j++) {
    console.log("-- Second level loop");
  }
}
```

The code above will generate the following output:

```js
- First level loop
-- Second level loop
-- Second level loop
-- Second level loop
-- Second level loop
- First level loop
-- Second level loop
-- Second level loop
-- Second level loop
-- Second level loop
- First level loop
-- Second level loop
-- Second level loop
-- Second level loop
-- Second level loop
```

As you can see in the output sample above, the second-level for loop is executed for each first-level loop. The i and j variables are indicators of the matrix elements used commonly in mathematics.
The nested loops can be done inside a for loop or a while loop, although the for loop is more common:

```js
let i = 0;
while (i <= 2) {
  console.log("- First level loop");
  i++;
  let j = 0;
  while (j <= 3) {
    console.log("-- Second level loop");
    j++;
  }
}
```

You can also create more than two levels of nested loops, but it’s not recommended because it will confuse even seasoned developers.

***

### Iterating through a multi dimensional array with nested loops

```js

// ===================================
// NESTED ARRAY ITERATION
// ===================================


const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`ROW #${i + 1}`)
    for (let j = 0; j < row.length; j++) {
        console.log(row[j])
    }
}

```