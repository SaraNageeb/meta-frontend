// JavaScript methods (functions) are actions that can be performed on objects.

// This function will only work within an Obj due the use of this
function calcScore() {
    return (this.score[0] + this.score[1]) / 2;
}


let hero = {
    name: 'Tony Stark',
    score: [97, 94],

    averageScore: calcScore // Example of an object method
}

let hero2 = {
    name: 'Bruce Wayne',
    score: [90, 93],

    averageScore: calcScore // Example of an object method
}

console.log(`${hero.name} : ${hero.averageScore()}`);
console.log(`${hero2.name} : ${hero2.averageScore()}`);

calcScore(); // testing the use of this, this function should not work outside an obj