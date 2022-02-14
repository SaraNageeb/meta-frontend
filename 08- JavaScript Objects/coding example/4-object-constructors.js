function createStudent(name, e1, e2) {

    return {
        name: name,
        exam1: e1,
        exam2: e2,

        examAvg: function() {
            return (this.exam1 + this.exam2) / 2;
        }
    }   
}

let class2022 = [
    createStudent('Ash', 8, 7.5),
    createStudent('Bob', 9, 8.5),
    createStudent('Chi', 10, 10)

]

// Finding first student on the array list
student = class2022[0];
console.log(student);
console.log(student.examAvg());

// Finding 2nd student on the array list
student2 = class2022[1];
console.log(student2);
console.log(student2.examAvg());


// Looping over the array
for (student of class2022) {
    console.log(`${student.name} - ${student.examAvg()}`);
}

// forEach
class2022.forEach(element => {
    console.log(element);
});


// Another way to create an obj
function createHero (name, e1, e2) {
    this.name = name;
    this.exam1 = e1;
    this.exam2 = e2;

    this.examAvg = function() {
        return (this.exam1 + this.exam2) /2;
    }
}

// When using the keyword this, we must use the keyword new to create a new obj
let hero = new createHero('Peter Parker', 10, 9.8);
console.log(hero);
console.log(hero.examAvg());