// ======================================
// WITHOUT ANY LOOPS...LOTS OF REPETITION
// ======================================
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// ======================================
// OUR FIRST FOR LOOP
// Print numbers from 1 to 10
// let num = 1; num <= 10; num += 1
// start at 1; stop at 10; add 1 each time
// ======================================

for (let num = 1; num <= 10; num += 1) {
    console.log(num);
}

// ======================================
// MORE EXAMPLES OF FOR LOOPS!
// ======================================

// Print out "Da ba dee da ba daa" 6 times, using a for loop
for (let i = 1; i <= 6; i++) {
    console.log("Da ba dee da ba da");
}

// Print out even numbers from 2 to 20
for (let e = 2; e <= 20; e += 2) {
    console.log(e)
    console.log('even numbers');
}

// Print out odd numbers from 1 to 19
for (let o = 1; o <= 20; o += 2) {
    console.log(o)
    console.log('odd numbers');
}

// Count down starting from 100 to 10
for (let c = 100; c >= 10; c -= 10) {
    console.log(c);
    console.log('count down 100 to 10');
}

// Multiply 10*10 until you get 1000
for (let m = 10; m <= 1000; m *= 10) {
    console.log(m);
}

// Write a loop that prints: 25, 20, 15, 10, 5, 0
// start at 25; stop at 0; deducts 5 each time
for (let f = 25; f >= 0; f -= 5) {
    console.log(f);
    console.log('25-20-15-10-5-0');
}

// DO NOT RUN THIS LOOP
// INFINITE LOOP!! BAD!!
// ================================
// ================================
// for (let i = 20; i >= 0; i++) {
//     console.log(i);
// }
// ================================
// ================================
