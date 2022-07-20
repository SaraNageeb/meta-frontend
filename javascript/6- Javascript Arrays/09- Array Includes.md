# Array includes() Overview
The includes() method checks if an array contains a specified element or not.

```js
// defining an array
let languages = ["JavaScript", "Java", "C"];

// checking whether the array contains 'Java'
let check = languages.includes("Java");

console.log(check); 

// Output: true
```

***

### Example 1: Using includes() method

```js
let languages = ["JavaScript", "Java", "C", "C++"];

// checking whether the array contains 'C'
let check1 = languages.includes("C");

console.log(check1); // true

// checking whether the array contains 'Ruby'
let check2 = languages.includes("Ruby");

console.log(check2); // false
```

Output

```
true
false
```

In the above example, we have used the includes() method to check whether the languages array contains elements 'C' and 'Ruby'.

languages.includes("C") returns true since the array contains 'C' and languages.includes("Ruby") returns false since the array does not contain 'Ruby'.

***

### Example 2: includes() for Case-Sensitive Search
The includes() method is case sensitive. For example:

```js
let languages = ["JavaScript", "Java", "C", "Python"];

// checking whether the array contains 'Python'
let check1 = languages.includes("Python");

console.log(check1); // true

// checking whether the array contains 'python'
let check2 = languages.includes("python");

console.log(check2); // false
```

Output

```
true
false
```

Here the includes() method returns true for searchValue- 'Python' and false for 'python'.

This is because the method is case sensitive and it treats 'Python' and 'python' as two different strings.

***

### Example 3: includes() with two Parameters

```js
let languages = ["JavaScript", "Java", "C", "Python"];

// second argument specifies position to start the search
let check1 = languages.includes("Java", 2);

console.log(check1); // false

// the search starts from third last element 
let check2 = languages.includes("Java", -3);

console.log(check2); // true 
```


Output

```
false
true
```

In the above example, we have passed two argument values in the include() method.

languages.includes("Java", 2) returns false since the method doesn't find 'Java' from second index of the array.

In languages.includes("Java", -3), the method starts searching 'Java' from the third last element because of the negative argument -3.

***

