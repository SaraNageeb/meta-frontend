// ======================================
// loop to loop over it, 
// and print out the square of each value 
// (the number multiplied by itself).
// ======================================

const numbers = [1,2,3,4,5,6,7,8,9]; 

for (let number of numbers) {
    console.log(number * number);
}

for(let num of numbers) {
    console.log(Math.pow(num, 2));
}