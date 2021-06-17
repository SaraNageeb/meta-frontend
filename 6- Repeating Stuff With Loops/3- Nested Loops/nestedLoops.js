// ===================================
// NESTED FOR LOOP EXAMPLES
// ===================================
/*
1
 1
 2
 3
2
 1
 2
 3 
3
 1
 2
 3 
*/
for (let i = 1; i <= 3; i++) {
    console.log(`i is: ${i}`)
    for (let j = 1; j <= 3; j++) {
        console.log(`     j is: ${j}`)
    }
}

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
    console.log(`ROW #${i + 1}`) // Add one because index starts at zero
    for (let j = 0; j < row.length; j++) {
        console.log(row[j])
    }
}

