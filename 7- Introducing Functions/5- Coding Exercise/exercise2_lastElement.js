/*
Please write a function called lastElement which accepts a single array argument. 
The function should return the last element of the array (without removing the element). If the array is empty, 
the function should return null.

*/

// DEFINE YOUR FUNCTION BELOW:
function lastElement(arr) {
    // If array is empty, return null
    if (arr.length === 0) {
        return null;
    } else { // otherwise return the last element
        const last = arr[arr.length - 1];
        return last;
    }
}

console.log(lastElement([3,5,7])); //7
console.log(lastElement([1])); //1
console.log(lastElement([])); //null