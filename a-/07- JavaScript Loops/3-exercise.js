// Write a function that receives 2 numbers and returns the biggest number
function max(x, y) {
    return x > y ? x : y;
}

// Arrow function
const max2 = (x,y) => x > y ? x : y;

console.log(max(15, 20));
console.log(max2(20,22));
