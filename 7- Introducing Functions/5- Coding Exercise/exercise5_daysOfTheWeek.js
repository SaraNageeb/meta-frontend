/*
Write a function called sumArray which accepts a single argument: 
an array of numbers.It should return the sum of all the numbers in the array.
*/

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
 
function returnDay(num) {
    while (num > 0 && num < 8) {
        return days[num -1];
    } return null;
}

console.log(returnDay(1));
console.log(returnDay(2));
console.log(returnDay(3));
console.log(returnDay(4));
console.log(returnDay(5));
console.log(returnDay(6));
console.log(returnDay(7));