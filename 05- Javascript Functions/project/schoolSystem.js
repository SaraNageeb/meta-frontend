let names = ['Ash', 'Bob', 'Chi'];
let gradesA = [7.0, 6.5, 9.5];
let gradesB = [8.0, 7.0, 8.5];

// Creating a function that calculates the average of grades
function average(n1, n2) {
    return (n1 + n2) / 2;
}

// Function to check if student passed of failed
function passed(average) {
    if (average >= 7) {
        return 'passed';
    } else {
        return 'failed';
    }
}

// Looping over each student and their grade
for (let index in names) {

    let grade1 = gradesA[index];
    let grade2 = gradesB[index];
    let ave = average(grade1, grade2);

    console.log(names[index] +
        ': ' +
        grade1 +
        ' - ' +
        grade2 +
        ' , Average Score: ' +
        ave +
        ' : ' +
        passed(ave));
}