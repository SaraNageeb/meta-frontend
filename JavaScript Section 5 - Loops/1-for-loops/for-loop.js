// Iterate through an Array
const heroes = ['Aquaman', 'Batman', 'Wonder Woman', 'Superman'];

for (let i = 0; i < heroes.length; i++) {
    console.log(`Index ${i} - ${heroes[i]}`);
}

// Iterate through integers from 1-5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Print Odd or Even Numbers
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

for (let i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}