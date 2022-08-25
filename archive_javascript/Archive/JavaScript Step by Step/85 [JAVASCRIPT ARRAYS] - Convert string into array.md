# 4 Ways to Convert String to Character Array in JavaScript

```js
const string = 'hi there';

const usingSplit = string.split('');
const usingSpread = [...string];
const usingArrayFrom = Array.from(string);
const usingObjectAssign = Object.assign([], string);
```

```
Result
// [ 'h', 'i', ' ', 't', 'h', 'e', 'r', 'e' ]
```